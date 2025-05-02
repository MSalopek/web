# consider porting this to golang

import sqlite3
from datetime import datetime, timedelta, UTC
from typing import Dict
from load_assets import fetch_asset_prices, load_prices_to_db
import time
from pprint import pprint


def get_required_intervals(db_path: str) -> Dict[str, Dict[str, int]]:
    """
    Checks the latest price date for each token and determines how many days of data
    need to be fetched to catch up.
    Data is fetched for dates until current date (exclusive).

    For current date use spot price instead instead of historical data (historic data is never available for current date).

    Returns:
        Dict[str, Dict[str, int]]: Dictionary mapping token symbols to coingeckoId and interval days
    """
    with sqlite3.connect(db_path) as conn:
        cursor = conn.cursor()

        # Get the latest date for each token from coingecko source (source_id = 1)
        query = """
        SELECT t.symbol, t.coingecko_id, MAX(tp.date) as latest_date
        FROM tokens t
        LEFT JOIN token_prices tp ON t.id = tp.token_id AND tp.source_id = 1
        WHERE t.coingecko_id IS NOT NULL
        GROUP BY t.symbol, t.coingecko_id
        """

        cursor.execute(query)
        results = cursor.fetchall()

        current_date = datetime.now(UTC).date()
        intervals = {}

        for symbol, coingecko_id, latest_date in results:
            if not coingecko_id:
                continue  # Skip tokens without coingecko_id

            if latest_date is None:
                # If no data exists, fetch full default interval
                intervals[symbol] = 365
                continue

            latest_dt = datetime.strptime(latest_date, "%Y-%m-%d").date()
            days_difference = (current_date - latest_dt).days

            # Add 1 to ensure we get the latest day, and add a small buffer
            required_interval = days_difference + 2

            # Ensure we fetch at least 1 day of data, but no more than 365
            intervals[symbol] = {
                "coingecko_id": coingecko_id,
                "interval": min(365, max(1, required_interval)),
            }

    return intervals


def update_prices(db_path: str):
    """
    Update prices for all assets, fetching only the required interval for each.
    """
    asset_intervals = get_required_intervals(db_path)

    for symbol, asset_data in asset_intervals.items():
        time.sleep(3)
        coingecko_id = asset_data.get("coingecko_id")

        if not coingecko_id:
            print(f"Skipping {symbol}: No coingecko_id found")
            continue

        interval = asset_data.get("interval", 365)  # fallback to 365 if not found

        try:
            prices = fetch_asset_prices(asset_id=coingecko_id, interval=interval)
            load_prices_to_db(db_path, symbol, prices, upsert=True)
        except Exception as e:
            print(f"Error updating {symbol}: {str(e)}")


if __name__ == "__main__":
    import os
    import sys
    import argparse

    # Check for API key first
    if not os.getenv("COINGECKO_API_KEY"):
        print("Error: COINGECKO_API_KEY environment variable is not set")
        sys.exit(1)

    # Set up argument parser
    parser = argparse.ArgumentParser(description="Update token prices from Coingecko")
    parser.add_argument("--db-path", required=True, help="Path to the SQLite database")

    args = parser.parse_args()

    # Verify database exists
    if not os.path.exists(args.db_path):
        print(f"Error: Database file not found at {args.db_path}")
        sys.exit(1)

    update_prices(args.db_path)

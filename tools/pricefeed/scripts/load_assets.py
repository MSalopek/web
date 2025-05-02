import os
import requests
import sqlite3
from dataclasses import dataclass
from typing import List, Tuple
from datetime import datetime
import json


DEFAULT_INTERVAL = 365  # days

HISTORIC_COINGECKO_CHART_URL = "https://api.coingecko.com/api/v3/coins/{asset_id}/market_chart?vs_currency={vs_currency}&days={days}&interval={interval}&precision={precision}"

API_KEY = os.getenv("COINGECKO_API_KEY")


@dataclass
class CoingeckoPriceWithTimestamp:
    timestamp_ms: int
    price_usd: float


@dataclass
class CoingeckoPriceDataWithDate:
    date: str
    price_usd: float


@dataclass
class CoinGeckoPriceData:
    prices: List[CoingeckoPriceWithTimestamp]  # [timestamp_ms, price_usd]
    market_caps: List[Tuple[int, float]]  # [timestamp_ms, market_cap_usd] -- unused
    total_volumes: List[Tuple[int, float]]  # [timestamp_ms, volume_usd] -- unused


def fetch_asset_prices(
    asset_id: str,
    save_to_file: bool = False,
    base_currency: str = "usd",
    interval: int = DEFAULT_INTERVAL,
) -> List[CoingeckoPriceDataWithDate]:
    """
    Ref: https://docs.coingecko.com/v3.0.1/reference/coins-id-market-chart

    Args:
        asset_id: The ID of the asset to fetch prices for.
        base_currency: The currency to price the asset in.
        interval: The interval to fetch prices for.

    DEFAULT URL params for coingecko request:
    vs_currency: usd
    days: 365
    interval: daily
    precision: 5

    The function returns a list of CoingeckoPriceDataWithDate objects, which contain the date and price of the asset.
    Date is assumed to be in UTC in YYYY-MM-DD format.
    """

    url = HISTORIC_COINGECKO_CHART_URL.format(
        asset_id=asset_id,
        vs_currency=base_currency,
        days=interval,
        interval="daily",
        precision=5,
    )
    # print("FETCHING URL: ", url)
    headers = {"accept": "application/json", "x-cg-demo-api-key": API_KEY}

    response = requests.get(url, headers=headers)
    data = response.json()

    if data.get("error"):
        raise ValueError(f"Error fetching {asset_id}: {data.get('error')}")

    if save_to_file:
        with open(f"asset_prices/{asset_id}.json", "w") as f:
            json.dump(data, f)

    prices_with_timestamp = data.get("prices", [])
    if not prices_with_timestamp:
        raise ValueError(f"No prices found for {asset_id}")

    prices_with_date = [
        CoingeckoPriceDataWithDate(
            date=datetime.fromtimestamp(price[0] / 1000).strftime("%Y-%m-%d"),
            price_usd=price[1],
        )
        for price in prices_with_timestamp
    ]
    # print("DONE PROCESSING", asset_id, len(prices_with_date), "prices")
    return prices_with_date


def load_prices_to_db(
    db_path: str,
    token_symbol: str,
    prices: List[CoingeckoPriceDataWithDate],
    upsert: bool = False,
):
    """
    Load prices into the database for a specific token.

    Args:
        db_path: Path to the SQLite database
        token_symbol: Symbol of the token (e.g., 'BTC', 'ETH')
        prices: List of price data objects
    """
    with sqlite3.connect(db_path) as conn:
        cursor = conn.cursor()

        # First get the token_id for the given symbol
        cursor.execute("SELECT id FROM tokens WHERE symbol = ?", (token_symbol,))
        result = cursor.fetchone()
        if not result:
            raise ValueError(f"Token with symbol {token_symbol} not found in database")

        token_id = result[0]

        # Prepare the insert statement -> 1 is for coingecko
        insert_query = """
            INSERT INTO token_prices (token_id, price_usd, source_id, date)
            VALUES (?, ?, 1, ?)
        """
        # Modify the insert statement based on upsert parameter
        if upsert:
            print("Updating prices for", token_symbol)
            insert_query += " ON CONFLICT (token_id, source_id, date) DO UPDATE SET price_usd = excluded.price_usd"
        else:
            insert_query += " ON CONFLICT (token_id, source_id, date) DO NOTHING"

        # Prepare batch of values
        values = [(token_id, price.price_usd, price.date) for price in prices]

        # Insert in batches
        batch_size = 1000
        for i in range(0, len(values), batch_size):
            batch = values[i : i + batch_size]
            cursor.executemany(insert_query, batch)

        conn.commit()
        # print("DONE LOADING", token_symbol, "prices")


def parse_osmosis_um_prices(input_file: str):
    with open(input_file, "r") as f:
        data = json.load(f)
    prices = data["result"]["data"]["json"]

    prices_data = []
    for price in prices:
        date = datetime.fromtimestamp(price["time"]).strftime("%Y-%m-%d")
        close_price = price["close"]
        prices_data.append(
            CoingeckoPriceDataWithDate(
                date=date,
                price_usd=round(close_price, 5),
            )
        )

    return prices_data


if __name__ == "__main__":
    from tqdm import tqdm
    import time
    import argparse

    parser = argparse.ArgumentParser(
        description="Load asset prices from Coingecko into database"
    )
    parser.add_argument("--db-path", required=True, help="Path to the SQLite database")
    parser.add_argument(
        "--assets-path",
        help="Path to the known-assets-with-gecko-id.json file",
        required=False,
    )
    parser.add_argument(
        "--osmosis-um-prices-path",
        help="Path to the osmosis_um_prices.json file",
        required=False,
    )

    args = parser.parse_args()

    # Read the assets file

    if args.assets_path:
        with open(args.assets_path, "r") as f:
            assets = json.load(f)

        errors = []
        # Process each asset with progress bar
        for asset in tqdm(assets, desc="Loading assets", unit="asset"):
            time.sleep(3)
            try:
                prices = fetch_asset_prices(asset["coingeckoId"], save_to_file=True)
                load_prices_to_db(args.db_path, asset["symbol"], prices)
            except Exception as e:
                errors.append(f"{asset['symbol']}: {str(e)}")
                print(f"\nError processing {asset['symbol']}: {str(e)}")

        print("Errors: ", "\n".join(errors))
    else:
        print("No assets path provided, skipping asset loading")

    if args.osmosis_um_prices_path:
        print("Loading osmosis UM prices")
        prices_data = parse_osmosis_um_prices(args.osmosis_um_prices_path)
        load_prices_to_db(args.db_path, "UM", prices_data)

    print("\nDONE LOADING ALL ASSETS :)")

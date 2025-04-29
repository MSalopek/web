from dataclasses import dataclass
from typing import Sequence, Deque, Dict, Optional, List, Union
import datetime
import csv
from collections import defaultdict


@dataclass
class TaxRate:
    duration: float  # duration in years
    rate: float  # tax rate as float -> 0.01 == 1%


default_tax_rates = {
    "short_term": TaxRate(duration=0, rate=0.2),
    "long_term": TaxRate(duration=1, rate=0.1),
    "income": TaxRate(duration=0, rate=0.2),  # duration is not important
}


transaction_type = ["income", "disposal", "acquisition", "expense", "rebalance"]
disposal_header = [
    "Date Acquired",
    "Date Sold",
    "Asset",
    "Amount",
    "Price Acquired (USD)",
    "Price Disposed (USD)",
    "Total Cost Basis",
    "Total Proceeds",
    "PnL",
]

income_header = ["Date", "Asset", "Amount", "Price (USD)", "Total Value (USD)"]

inventory_header = [
    "Asset",
    "Amount",
    "Price (USD)",
    "Total Cost Basis",
    "Date Acquired",
]


def get_price(
    prices: Dict[str, Dict[datetime.date, float]], asset: str, date: datetime.date
) -> float:
    try:
        return prices[asset][date]
    except KeyError:
        raise ValueError(f"Missing price for {asset} on {date}")


@dataclass
class Transaction:
    date: datetime.date
    type: str
    amount_in: float
    asset_in: str
    amount_out: float
    asset_out: str
    fee_amount: float
    fee_asset: str
    timestamp: Optional[int] = None

    internal: bool = False  # Internal transfers are not tax events
    label: Optional[str] = None


@dataclass
class Disposal:
    date_acquired: datetime.date
    date_sold: datetime.date
    amount: float
    asset: str
    price_acquired: float
    price_disposed: float
    pnl: float
    sub_disposals: Optional[list["Disposal"]] = None
    inputs: Optional[list[Transaction]] = None
    outputs: Optional[list[Transaction]] = None


@dataclass
class Income:
    date: datetime.date
    amount: float
    asset: str
    price: float
    timestamp: Optional[int] = None


@dataclass
class Expense:
    date: datetime.date
    amount: float
    asset: str
    price: float
    timestamp: Optional[int] = None


@dataclass
class InventoryLot:
    date: datetime.date
    amount: float
    price: float
    tx: Optional[Transaction] = None
    timestamp: Optional[int] = None


@dataclass
class LotSpend:
    """
    Helper data class useful for tracking the spends of particular inventory lots.

    Code is more readable when using this dataclass than it is using a tuple(asset, date, amount_spent, price).
    """

    asset: str
    date: datetime.date
    amount_spent: float
    price: float


@dataclass
class TaxResult:
    tax_amount: float
    disposals: List[Disposal]
    incomes: List[Income]


def apply_tax_rates(
    disposals: List[Disposal],
    incomes: List[Income],
    tax_rates: Dict[str, TaxRate] = default_tax_rates,
) -> Dict[str, TaxResult]:
    # calculate tax from disposals
    result: Dict[str, TaxResult] = {
        k: TaxResult(tax_amount=0.0, disposals=[], incomes=[]) for k in tax_rates.keys()
    }

    for disposal in disposals:
        for tax_type, tax_rate in tax_rates.items():
            if (
                disposal.date_sold is not None
                and (disposal.date_sold - disposal.date_acquired).days / 365.0
                <= tax_rate.duration
            ):
                result[tax_type].tax_amount += disposal.pnl * tax_rate.rate
                result[tax_type].disposals.append(disposal)

    result["income"] = TaxResult(
        tax_amount=tax_rates["income"].rate
        * sum(income.amount * income.price for income in incomes),
        disposals=[],
        incomes=incomes,
    )

    return result


# maybe add PnL for each asset
def inventory_summary(
    inventory: Dict[str, Deque[InventoryLot]],
) -> Dict[str, Dict[str, float]]:
    summary: Dict[str, Dict[str, float]] = defaultdict(
        lambda: {"amount": 0, "cost_basis": 0}
    )
    for asset, lots in inventory.items():
        total_cost = sum(lot.amount * lot.price for lot in lots)
        total_amount = sum(lot.amount for lot in lots)
        summary[asset] = {"amount": total_amount, "cost_basis": total_cost}
    return summary


def filter_transactions_by_date(
    transactions: list[Transaction], start_date: datetime.date, end_date: datetime.date
) -> list[Transaction]:
    return [
        tx
        for tx in transactions
        if tx.date is not None and start_date <= tx.date <= end_date
    ]


def disposals_to_csv_rows(disposals: Sequence[Disposal]) -> list[list[str]]:
    rows = []
    for d in disposals:
        total_cost = d.price_acquired * d.amount
        proceeds = d.price_disposed * d.amount
        rows.append(
            [
                d.date_acquired.isoformat() if d.date_acquired else "",
                d.date_sold.isoformat() if d.date_sold else "",
                d.asset,
                f"{d.amount:.8f}",
                f"{d.price_acquired:.8f}",
                f"{d.price_disposed:.8f}",
                f"{total_cost:.2f}",
                f"{proceeds:.2f}",
                f"{d.pnl:.2f}",
            ]
        )
    return rows


def incomes_to_csv_rows(incomes: Sequence[Income]) -> list[list[str]]:
    rows = []

    for inc in incomes:
        total_value = inc.amount * inc.price
        rows.append(
            [
                inc.date.isoformat() if inc.date else "",
                inc.asset,
                f"{inc.amount:.8f}",
                f"{inc.price:.8f}",
                f"{total_value:.2f}",
            ]
        )
    return rows


def inventory_to_csv_rows(inventory: Dict[str, Deque[InventoryLot]]) -> list[list[str]]:
    rows = []
    for asset, lots in inventory.items():
        for lot in lots:
            total_cost = lot.amount * lot.price
            rows.append(
                [
                    asset,
                    f"{lot.amount:.8f}",
                    f"{lot.price:.8f}",
                    f"{total_cost:.2f}",
                    lot.date.isoformat(),
                ]
            )
    return rows


def write_disposal_csv(path: str, rows: list[list[str]]) -> None:
    with open(path, mode="w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(disposal_header)
        writer.writerows(rows)


def write_income_csv(path: str, rows: list[list[str]]) -> None:
    with open(path, mode="w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(income_header)
        writer.writerows(rows)


def write_inventory_csv(path: str, rows: list[list[str]]) -> None:
    with open(path, mode="w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(inventory_header)
        writer.writerows(rows)

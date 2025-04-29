from collections import deque, defaultdict
from common import Transaction, Disposal, Income, InventoryLot, LotSpend
import datetime
from typing import List, Dict, Sequence, Deque, Callable


def calculate_fifo(
    transactions: Sequence[Transaction],
    starting_inventory: Dict[str, List[InventoryLot]],
    get_price: Callable[[str, datetime.date], float],
) -> tuple[List[Income], List[Disposal], Dict[str, Deque[InventoryLot]]]:

    inventory: Dict[str, Deque[InventoryLot]] = defaultdict(deque)
    incomes: List[Income] = []
    disposals: List[Disposal] = []

    for asset, lots in starting_inventory.items():
        for lot in lots:
            inventory[asset].append(lot)

    for tx in sorted(transactions, key=lambda t: t.date or datetime.date.min):
        tx_type = classify_transaction(tx)

        if tx_type == "income":
            handle_income(tx, incomes, get_price)
            handle_acquisition(tx, inventory, get_price)
        elif tx_type == "disposal":
            handle_disposal(tx, inventory, disposals, get_price)
            if tx.amount_in > 0:
                handle_acquisition(tx, inventory, get_price)
        elif tx_type == "acquisition":
            handle_acquisition(tx, inventory, get_price)
        elif tx_type == "rebalance":
            # acquire with no income
            handle_rebalance(tx, inventory, disposals)
        elif tx_type == "swap":
            # swap is a disposal and acquisition
            # positions are swapped between the two assets
            handle_swap(tx, inventory, disposals, get_price)
        else:
            raise ValueError(f"Unknown transaction type: {tx.type}")

    return incomes, disposals, inventory


# python is kinda bad for this, there's no select/case statement or usable pattern matching
def classify_transaction(tx: Transaction) -> str:
    if tx.type == "receive":
        if tx.internal:
            return "acquisition"
        else:
            return "income"

    elif tx.type == "staking_reward":
        return "income"

    elif tx.type == "send":
        if tx.internal:
            # should decrease inventory but not affect tax
            # can also be viewed as disposal with acquisition price == disposal price
            return "rebalance"
        else:
            return "disposal"

    # swap is a disposal and acquisition
    # the logic cannot be handled here -> one asset is disposed and the other is acquired
    elif tx.type == "swap":
        return "swap"

    return "unknown"


def handle_income(
    tx: Transaction,
    incomes: List[Income],
    get_price: Callable[[str, datetime.date], float],
) -> None:
    price = get_price(tx.asset_in, tx.date)
    incomes.append(
        Income(date=tx.date, amount=tx.amount_in, asset=tx.asset_in, price=price)
    )


def handle_acquisition(
    tx: Transaction,
    inventory: dict[str, deque[InventoryLot]],
    get_price: Callable[[str, datetime.date], float],
) -> None:
    inventory[tx.asset_in].append(
        InventoryLot(
            amount=tx.amount_in,
            price=get_price(tx.asset_in, tx.date),
            date=tx.date,
            timestamp=tx.timestamp or None,
            tx=tx,
        )  # placeholder
    )


def handle_swap(
    tx: Transaction,
    inventory: dict[str, deque[InventoryLot]],
    disposals: List[Disposal],
    get_price: Callable[[str, datetime.date], float],
) -> None:
    """
    Swap is a disposal and acquisition.
    * asset_out is disposed
    * asset_in is acquired

    Tax is only applied on the disposal, while the acquisition is tax-free but counts towards the inventory (cost basis is established).

    This shows that this logic needs to be refactored or better terminology needs to be used.

    TODO: we need to get the date of the acquisition for the disposed asset.
    It if a date is not provided, we should use the earliest date from the inventory lots to maintain FIFO ordering.
    """
    handle_disposal(tx, inventory, disposals, get_price)
    handle_acquisition(tx, inventory, get_price)


def match_fifo_disposal(
    asset: str, amount: float, inventory: dict[str, deque[InventoryLot]]
) -> tuple[list[LotSpend], float]:
    fifo = inventory[asset]
    remaining = amount
    spent_lots: list[LotSpend] = []
    total_cost_basis = 0.0

    while remaining > 0 and fifo:
        lot = fifo[0]
        used_amount = min(lot.amount, remaining)
        cost_basis = used_amount * lot.price
        total_cost_basis += cost_basis

        if used_amount == lot.amount:
            fifo.popleft()
        else:
            lot.amount -= used_amount

        remaining -= used_amount
        spent_lots.append(
            LotSpend(
                asset=asset, date=lot.date, amount_spent=used_amount, price=lot.price
            )
        )

    return spent_lots, total_cost_basis


def handle_disposal(
    tx: Transaction,
    inventory: Dict[str, Deque[InventoryLot]],
    disposals: List[Disposal],
    get_price: Callable[[str, datetime.date], float],
) -> None:
    """
    Disposal is a taxable event that consumes lots from the inventory.

    If the disposed amount is bigger than a single lot, the lots will be consumed in FIFO order until the full disposed amount is covered.
    When consuming a lot, the lot's price at the time of acquisition is used to calculate the cost basis.

    The function returns a list of spent lots (can be partially consumed) and the total cost basis.
    """
    asset = tx.asset_out
    amount = tx.amount_out

    price_disposed = get_price(asset, tx.date)
    spent_lots, _ = match_fifo_disposal(asset, amount, inventory)

    # total for the disposal would be calculated as follows
    # if there were a single lot:s
    # proceeds = amount * price_disposed
    # pnl = proceeds - total_cost_basis

    spent_lots_sum = sum(lot.amount_spent for lot in spent_lots)
    if spent_lots_sum != amount:
        raise ValueError(
            f"Spent lots sum {spent_lots_sum} does not match amount {amount}"
        )

    for lot in spent_lots:
        price_acquired = lot.price
        pnl = lot.amount_spent * (price_disposed - price_acquired)
        # cost_basis = lot[2] * price_acquired
        disposals.append(
            Disposal(
                date_acquired=lot.date,
                date_sold=tx.date,
                amount=lot.amount_spent,
                asset=lot.asset,
                price_acquired=price_acquired,
                price_disposed=price_disposed,
                pnl=pnl,
            )
        )


def handle_rebalance(
    tx: Transaction,
    inventory: Dict[str, Deque[InventoryLot]],
    disposals: List[Disposal],
) -> None:
    asset = tx.asset_out
    amount = tx.amount_out

    spent_lots, _ = match_fifo_disposal(asset, amount, inventory)

    for lot in spent_lots:
        disposals.append(
            Disposal(
                date_acquired=lot.date,
                date_sold=tx.date,
                amount=lot.amount_spent,
                asset=lot.asset,
                # price_acquired == price_disposed so pnl is 0
                # this is a bit of a hack, but it works
                price_acquired=lot.price,
                price_disposed=lot.price,
                pnl=0,
            )
        )

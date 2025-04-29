import datetime
from common import Transaction, apply_tax_rates

# fmt: off
case_income_same_day_2_assets = [
    Transaction(date=datetime.date(2024, 1, 1), timestamp=1, type="receive", amount_in=100, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    Transaction(date=datetime.date(2024, 1, 1), timestamp=2, type="receive", amount_in=200, asset_in="OSMO", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
]
case_income_same_day_1_asset = [
    # treated as 2 separate events because the price can be different
    Transaction(date=datetime.date(2024, 1, 1), timestamp=1, type="receive", amount_in=100, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    Transaction(date=datetime.date(2024, 1, 1), timestamp=2, type="receive", amount_in=200, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
]
case_income =  [
    Transaction(date=datetime.date(2024, 1, 1), timestamp=1, type="receive", amount_in=100, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    Transaction(date=datetime.date(2024, 1, 2), timestamp=2, type="receive", amount_in=200, asset_in="OSMO", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    Transaction(date=datetime.date(2024, 1, 3), timestamp=3, type="receive", amount_in=150, asset_in="UM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    Transaction(date=datetime.date(2024, 1, 30), timestamp=4,  type="staking_reward", amount_in=5, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
]
# non-taxable acquisitions -> e.g. rebalance/send from another wallet owned by the same person
case_receives_internal = [
    Transaction(date=datetime.date(2024, 1, 15), timestamp=1, type="receive", amount_in=10, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    Transaction(date=datetime.date(2024, 1, 20), timestamp=2, type="receive", amount_in=20, asset_in="OSMO", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    Transaction(date=datetime.date(2024, 1, 25), timestamp=3, type="receive", amount_in=30, asset_in="UM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
]
case_income_and_internals = case_income + case_receives_internal
case_single_asset_spend = [
    # the first one is internal and it sets the initial inventory balance
    Transaction(date=datetime.date(2024, 1, 1), timestamp=1, type="receive", amount_in=1, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    Transaction(date=datetime.date(2024, 1, 10), timestamp=2, type="staking_reward", amount_in=1, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    Transaction(date=datetime.date(2024, 1, 17), timestamp=3, type="send", amount_in=0, asset_in="", amount_out=1, asset_out="ATOM", fee_amount=0, fee_asset=""),
    # Taxable income
    Transaction(date=datetime.date(2024, 1, 18), timestamp=4, type="receive", amount_in=5, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
]

case_swap = [ 
    Transaction(date=datetime.date(2024, 1, 1), timestamp=1, type="receive", amount_in=1, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    Transaction(date=datetime.date(2024, 1, 10), timestamp=2, type="staking_reward", amount_in=1, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    # Taxable income
    Transaction(date=datetime.date(2024, 1, 18), timestamp=4, type="swap", amount_out=1, asset_out="ATOM", amount_in=5, asset_in="OSMO", fee_amount=0, fee_asset=""),
]
case_swap_multilot_same_asset = [ 
    # swap is 1 ATOM -> 5 OSMO -> this first Tx should remain in the lot with 9 ATOM
    Transaction(date=datetime.date(2024, 1, 1), timestamp=1, type="receive", amount_in=10, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    Transaction(date=datetime.date(2024, 1, 10), timestamp=2, type="staking_reward", amount_in=1, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    # Taxable income
    Transaction(date=datetime.date(2024, 1, 18), timestamp=4, type="swap", amount_out=1, asset_out="ATOM", amount_in=5, asset_in="OSMO", fee_amount=0, fee_asset=""),
]
case_swap_spend_multiple_lots = [
    Transaction(date=datetime.date(2024, 1, 1), timestamp=1, type="receive", amount_in=1, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    Transaction(date=datetime.date(2024, 1, 10), timestamp=2, type="staking_reward", amount_in=2, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    # first lot is spent in full, the second one is partially spent
    Transaction(date=datetime.date(2024, 1, 18), timestamp=4, type="swap", amount_out=2, asset_out="ATOM", amount_in=10, asset_in="OSMO", fee_amount=0, fee_asset=""),
]
case_multi_asset_complex = [
    # Acquisitions -> internal transfer from another wallet -> not a tax event
    Transaction(date=datetime.date(2024, 1, 1), timestamp=1, type="receive", amount_in=100, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    Transaction(date=datetime.date(2024, 1, 2), timestamp=2, type="receive", amount_in=200, asset_in="OSMO", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    Transaction(date=datetime.date(2024, 1, 3), timestamp=3, type="receive", amount_in=150, asset_in="UM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),

    # Income (airdrops/rewards)
    Transaction(date=datetime.date(2024, 1, 4), timestamp=4, label="airdrop", type="receive", amount_in=10, asset_in="NAM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    Transaction(date=datetime.date(2024, 1, 5), timestamp=5, type="staking_reward", amount_in=5, asset_in="NTRN", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    Transaction(date=datetime.date(2024, 1, 6), timestamp=6, type="staking_reward", amount_in=2, asset_in="STRD", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),

    # Swap 50 ATOM → 300 OSMO - consume 1 ATOM lot
    Transaction(date=datetime.date(2024, 1, 7), timestamp=7, type="swap", amount_in=300, asset_in="OSMO", amount_out=50, asset_out="ATOM", fee_amount=0, fee_asset=""),

    # Sell 50 OSMO -> taxable -> this is a disposal that happens at the observed price of OSMO
    Transaction(date=datetime.date(2024, 1, 8), timestamp=8, type="send", amount_in=0, asset_in="", amount_out=50, asset_out="OSMO", fee_amount=0, fee_asset=""),

    # Receive more rewards
    Transaction(date=datetime.date(2024, 1, 9), timestamp=9, type="staking_reward", amount_in=4, asset_in="STRD", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),
    Transaction(date=datetime.date(2024, 1, 10), timestamp=10, label="airdrop", type="receive", amount_in=20, asset_in="NAM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),

    # Swap 100 OSMO → 5 NTRN -> consume 1 OSMO lot
    Transaction(date=datetime.date(2024, 1, 11), timestamp=11, type="swap", amount_in=5, asset_in="NTRN", amount_out=100, asset_out="OSMO", fee_amount=0, fee_asset=""),

    # Acquisition -> internal transfer from another wallet -> not a tax event
    Transaction(date=datetime.date(2024, 1, 12), timestamp=12, type="receive", amount_in=100, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    
    # INCOME -> TAX EVENT
    Transaction(date=datetime.date(2024, 1, 12), timestamp=12, type="receive", amount_in=100, asset_in="ATOM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=False),

    # Sell 120 ATOM
    Transaction(date=datetime.date(2024, 1, 13), timestamp=13, type="send", amount_in=0, asset_in="", amount_out=120, asset_out="ATOM", fee_amount=0, fee_asset=""),

    # More staking income
    Transaction(date=datetime.date(2024, 1, 14), timestamp=14, type="staking_reward", amount_in=3, asset_in="UM", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),

    # More swaps
    # consume 2 STRD lots
    Transaction(date=datetime.date(2024, 1, 15), timestamp=15, type="swap", amount_in=1, asset_in="NTRN", amount_out=3, asset_out="STRD", fee_amount=0, fee_asset=""),
    # consume 1 STRD lot
    Transaction(date=datetime.date(2024, 1, 16), timestamp=16, type="swap", amount_in=15, asset_in="NAM", amount_out=1, asset_out="STRD", fee_amount=0, fee_asset=""),

    # Another acquisition
    Transaction(date=datetime.date(2024, 1, 17), timestamp=17, type="receive", amount_in=200, asset_in="UM", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    Transaction(date=datetime.date(2024, 1, 17), timestamp=17, type="receive", amount_in=10, asset_in="NTRN", amount_out=0, asset_out="", fee_amount=0, fee_asset="", internal=True),
    
    # Sell 153 UM -> should be using 3 lots -> 150 (full) + 3 (full) + 200 (partial - spend just 1)
    Transaction(date=datetime.date(2024, 1, 18), timestamp=18, type="send", amount_in=0, asset_in="", amount_out=154, asset_out="UM", fee_amount=0, fee_asset=""),

    # Receive reward
    Transaction(date=datetime.date(2024, 1, 19), timestamp=19, type="staking_reward", amount_in=2, asset_in="OSMO", amount_out=0, asset_out="", fee_amount=0, fee_asset=""),

    # Sell 10 STRD
    Transaction(date=datetime.date(2024, 1, 20), timestamp=20, type="send", amount_in=0, asset_in="", amount_out=2, asset_out="STRD", fee_amount=0, fee_asset=""),
]
# fmt: on


if __name__ == "__main__":
    from mocks import mock_get_price
    from pprint import pprint
    from common import (
        Transaction,
        InventoryLot,
        disposals_to_csv_rows,
        incomes_to_csv_rows,
        inventory_to_csv_rows,
        disposal_header,
        income_header,
        inventory_header,
        inventory_summary,
    )
    from fifo import calculate_fifo

    starting_inventory = {
        "ATOM": [
            InventoryLot(amount=1, price=8.0, date=datetime.date(2023, 11, 1), tx=None),
        ],
        "STRD": [
            InventoryLot(amount=5, price=2.0, date=datetime.date(2023, 12, 1), tx=None),
        ],
    }
    # empty inventory
    incomes, disposals, inventory = calculate_fifo(case_swap, {}, mock_get_price)
    disposals_rows = disposals_to_csv_rows(disposals)
    incomes_rows = incomes_to_csv_rows(incomes)
    inventory_rows = inventory_to_csv_rows(inventory)

    print("DISPOSALS")
    print(disposal_header)
    pprint(disposals_rows)
    print("-" * 80)
    print("INCOMES")
    print(income_header)
    pprint(incomes_rows)
    print("-" * 80)
    print("INVENTORY")
    print(inventory_header)
    pprint(inventory_rows)
    summary = inventory_summary(inventory)
    pprint(summary)

    pprint(apply_tax_rates(disposals, incomes))

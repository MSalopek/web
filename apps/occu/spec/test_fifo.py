# type: ignore
import pytest
from fifo import calculate_fifo
from test_fixtures import (
    case_income,
    case_receives_internal,
    case_income_and_internals,
    case_income_same_day_2_assets,
    case_income_same_day_1_asset,
    case_single_asset_spend,
    case_swap,
    case_swap_multilot_same_asset,
    case_swap_spend_multiple_lots,
    case_multi_asset_complex,
)
from mocks import mock_get_price
from pprint import pprint


# Fixtures for common test data
@pytest.fixture
def empty_inventory():
    return {}


@pytest.fixture
def mock_price_fn():
    return mock_get_price


def test_income(empty_inventory, mock_price_fn):
    transactions = case_income

    incomes, disposals, inventory = calculate_fifo(
        transactions, empty_inventory, mock_price_fn
    )

    # Verify incomes
    assert len(incomes) == 4
    assert incomes[0].amount == 100
    assert incomes[0].asset == "ATOM"
    assert incomes[1].amount == 200
    assert incomes[1].asset == "OSMO"
    assert incomes[2].amount == 150
    assert incomes[2].asset == "UM"
    assert incomes[3].amount == 5
    assert incomes[3].asset == "ATOM"

    # Verify no disposals occurred
    assert len(disposals) == 0

    # Verify final inventory
    assert "ATOM" in inventory
    assert len(inventory["ATOM"]) == 2
    assert sum(lot.amount for lot in inventory["ATOM"]) == 105

    assert "OSMO" in inventory
    assert len(inventory["OSMO"]) == 1
    assert inventory["OSMO"][0].amount == 200

    assert "UM" in inventory
    assert len(inventory["UM"]) == 1
    assert inventory["UM"][0].amount == 150


def test_internal_receive(empty_inventory, mock_price_fn):
    transactions = case_receives_internal
    incomes, disposals, inventory = calculate_fifo(
        transactions, empty_inventory, mock_price_fn
    )

    assert len(incomes) == 0
    assert len(disposals) == 0
    assert len(inventory) == 3
    assert "ATOM" in inventory
    assert len(inventory["ATOM"]) == 1
    assert inventory["ATOM"][0].amount == 10

    assert "OSMO" in inventory
    assert len(inventory["OSMO"]) == 1
    assert inventory["OSMO"][0].amount == 20

    assert "UM" in inventory
    assert len(inventory["UM"]) == 1
    assert inventory["UM"][0].amount == 30


def test_internal_transfer_with_income(empty_inventory, mock_price_fn):
    transactions = case_income_and_internals
    incomes, disposals, inventory = calculate_fifo(
        transactions, empty_inventory, mock_price_fn
    )

    assert len(disposals) == 0

    # only Txs where internal=False are counted as income
    assert len(incomes) == 4
    assert incomes[0].amount == 100
    assert incomes[0].asset == "ATOM"
    assert incomes[1].amount == 200
    assert incomes[1].asset == "OSMO"
    assert incomes[2].amount == 150
    assert incomes[2].asset == "UM"
    assert incomes[3].amount == 5
    assert incomes[3].asset == "ATOM"

    # Verify inventory includes both transactions
    assert "ATOM" in inventory
    assert len(inventory["ATOM"]) == 3
    assert sum(lot.amount for lot in inventory["ATOM"]) == 115
    assert inventory["ATOM"][0].amount == 100
    assert inventory["ATOM"][1].amount == 10
    assert inventory["ATOM"][2].amount == 5

    assert "OSMO" in inventory
    assert len(inventory["OSMO"]) == 2
    assert sum(lot.amount for lot in inventory["OSMO"]) == 220
    assert inventory["OSMO"][0].amount == 200
    assert inventory["OSMO"][1].amount == 20

    assert "UM" in inventory
    assert len(inventory["UM"]) == 2
    assert sum(lot.amount for lot in inventory["UM"]) == 180
    assert inventory["UM"][0].amount == 150
    assert inventory["UM"][1].amount == 30


def test_income_same_day_1_asset(empty_inventory, mock_price_fn):
    """
    Same day events are handled as separate lots.

    The price on them can be different, so they can be treated as separate lots.

    The difference in price can be observed if the get_price function is granular enough.
    If the get_price allows for querying daily prices, then the price will be the same for both events.
    """
    transactions = case_income_same_day_1_asset
    incomes, disposals, inventory = calculate_fifo(
        transactions, empty_inventory, mock_price_fn
    )

    assert len(disposals) == 0

    assert len(incomes) == 2

    # only one asset in inventory
    assert len(inventory) == 1
    assert "ATOM" in inventory
    assert len(inventory["ATOM"]) == 2
    assert sum(lot.amount for lot in inventory["ATOM"]) == 300

    assert incomes[0].amount == 100
    assert incomes[0].asset == "ATOM"
    assert incomes[1].amount == 200
    assert incomes[1].asset == "ATOM"


def test_income_same_day_2_assets(empty_inventory, mock_price_fn):
    transactions = case_income_same_day_2_assets
    incomes, disposals, inventory = calculate_fifo(
        transactions, empty_inventory, mock_price_fn
    )

    assert len(incomes) == 2
    assert incomes[0].amount == 100
    assert incomes[0].asset == "ATOM"
    assert incomes[1].amount == 200
    assert incomes[1].asset == "OSMO"


def test_single_asset_spend(empty_inventory, mock_price_fn):
    transactions = case_single_asset_spend

    incomes, disposals, inventory = calculate_fifo(
        transactions, empty_inventory, mock_price_fn
    )

    # Verify income
    assert len(incomes) == 2
    assert incomes[0].amount == 1  # staking reward
    assert incomes[1].amount == 5  # receive

    # Verify disposal
    assert len(disposals) == 1
    assert disposals[0].amount == 1  # send
    assert disposals[0].asset == "ATOM"

    # Verify remaining inventory
    assert "ATOM" in inventory
    assert len(inventory["ATOM"]) == 2
    assert sum(lot.amount for lot in inventory["ATOM"]) == 6

    ## the first internal receive was spent
    assert inventory["ATOM"][0].amount == 1  # from staking reward
    assert inventory["ATOM"][1].amount == 5  # from receive


def test_swap(empty_inventory, mock_price_fn):
    transactions = case_swap

    incomes, disposals, inventory = calculate_fifo(
        transactions, empty_inventory, mock_price_fn
    )

    # incomes added to verify that they are not counted as disposals
    assert len(incomes) == 1
    assert incomes[0].amount == 1
    assert incomes[0].asset == "ATOM"

    # disposing of the "out" assset in the swap
    assert len(disposals) == 1
    assert disposals[0].amount == 1
    assert disposals[0].asset == "ATOM"

    # Verify final inventory
    # after swapping 1 ATOM -> 5 OSMO
    assert "ATOM" in inventory
    assert "OSMO" in inventory
    assert len(inventory["ATOM"]) == 1  # receive was spent, staking reward was not
    assert len(inventory["OSMO"]) == 1
    assert inventory["ATOM"][0].amount == 1
    assert inventory["OSMO"][0].amount == 5


def test_swap_multilot_same_asset(empty_inventory, mock_price_fn):
    transactions = case_swap_multilot_same_asset

    incomes, disposals, inventory = calculate_fifo(
        transactions, empty_inventory, mock_price_fn
    )

    # incomes added to verify that they are not counted as disposals
    assert len(incomes) == 1
    assert incomes[0].amount == 1
    assert incomes[0].asset == "ATOM"

    # disposing of the "out" assset in the swap
    assert len(disposals) == 1
    assert disposals[0].amount == 1
    assert disposals[0].asset == "ATOM"

    # Verify final inventory
    # after swapping 1 ATOM -> 5 OSMO
    assert "ATOM" in inventory
    assert "OSMO" in inventory
    assert (
        len(inventory["ATOM"]) == 2
    )  # receive was partially spent - number of lots is the same
    assert inventory["ATOM"][0].amount == 9  # was 10, 1 was spent
    assert inventory["ATOM"][1].amount == 1

    assert len(inventory["OSMO"]) == 1
    assert inventory["OSMO"][0].amount == 5


def test_swap_spend_multiple_lots(empty_inventory, mock_price_fn):
    transactions = case_swap_spend_multiple_lots

    incomes, disposals, inventory = calculate_fifo(
        transactions, empty_inventory, mock_price_fn
    )

    assert len(incomes) == 1
    assert incomes[0].amount == 2
    assert incomes[0].asset == "ATOM"

    assert len(disposals) == 2
    # spend lot 1 in full
    assert disposals[0].amount == 1
    assert disposals[0].asset == "ATOM"
    # spend lot 2 partially
    assert disposals[1].amount == 1
    assert disposals[1].asset == "ATOM"

    assert len(inventory["ATOM"]) == 1
    assert inventory["ATOM"][0].amount == 1

    assert len(inventory["OSMO"]) == 1
    assert inventory["OSMO"][0].amount == 10


def test_multi_asset_complex(empty_inventory, mock_price_fn):
    transactions = case_multi_asset_complex

    incomes, disposals, inventory = calculate_fifo(
        transactions, empty_inventory, mock_price_fn
    )
    
    ###################################
    # INVENTORY
    ###################################

    # ATOM, OSMO, NAM, UM, STRD, NTRN
    assert len(inventory) == 6
    assert "ATOM" in inventory
    assert "OSMO" in inventory
    assert "UM" in inventory
    assert "NAM" in inventory
    assert "STRD" in inventory
    assert "NTRN" in inventory

    assert len(inventory["ATOM"]) == 2
    # after swapping out 50 and spending 120
    # there should be 130 left in 2 lots
    assert sum(lot.amount for lot in inventory["ATOM"]) == 130

    # before spend/swap -> 3 lots @300 -> 100 + 100 + 100
    # swap 50 -> 50 + 100 + 100
    # spend 120 -> 0 + 30 + 100
    assert inventory["ATOM"][0].amount == 30
    assert inventory["ATOM"][1].amount == 100

    assert len(inventory["OSMO"]) == 3
    assert sum(lot.amount for lot in inventory["OSMO"]) == 352

    # before spend/swap -> 3 lots @300 -> 200 + 300 + 2
    assert inventory["OSMO"][0].amount == 50  # spend 50 and 100 from lot 1 (200)
    assert inventory["OSMO"][1].amount == 300  # spend 100 from lot 2 (300)
    assert inventory["OSMO"][2].amount == 2  # spend 120 from lot 3 (300)

    assert len(inventory["UM"]) == 1
    # before spend/swap -> 3 lots @300 -> 150 + 3 + 200
    # there's a spend of 154 which consumes lots 150 and 3 in full and 200 in part
    assert sum(lot.amount for lot in inventory["UM"]) == 199
    assert inventory["UM"][0].amount == 199

    assert len(inventory["NAM"]) == 3
    # 3 lots, no spend -> 10 + 20 + 15
    assert sum(lot.amount for lot in inventory["NAM"]) == 45
    assert inventory["NAM"][0].amount == 10
    assert inventory["NAM"][1].amount == 20
    assert inventory["NAM"][2].amount == 15

    # there were 4 lots holding 6 in total -> all 6 were spent
    assert len(inventory["STRD"]) == 0
    
    assert len(inventory["NTRN"]) == 4
    assert sum(lot.amount for lot in inventory["NTRN"]) == 21
    assert inventory["NTRN"][0].amount == 5
    assert inventory["NTRN"][1].amount == 5
    assert inventory["NTRN"][2].amount == 1
    assert inventory["NTRN"][3].amount == 10

    ###################################
    # INCOMES
    ###################################
    
    # 3 receives, 5 staking rewards
    assert len(incomes) == 8
    
    ###################################
    # DISPOSALS
    ###################################
    
    # disposals are a bit more complicated because 1 Tx
    # can produce multiple disposals because it spends multiple lots
    # 4 disposals are from swaps (data is set so only 1 lot is spent)
    # 8 disposals are from sends (data is set so multiple lots are spent)
    # OSMO: 1
    # ATOM: 2
    # UM: 3
    # STRD: 2
    assert len(disposals) == 12

    
    
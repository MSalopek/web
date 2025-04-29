// @ts-nocheck
import { describe, it, expect } from 'vitest';
import { calculateFifo } from './fifo';
import {
  case_income,
  case_receives_internal,
  case_income_and_internals,
  case_income_same_day_1_asset,
  case_income_same_day_2_assets,
  case_single_asset_spend,
  case_swap,
  case_swap_multilot_same_asset,
  case_swap_spend_multiple_lots,
  case_multi_asset_complex,
} from './test_fixtures';
import { mockGetPrice } from './mocks';
import { InventoryLot } from './common';

type Inventory = Record<string, InventoryLot[]>;

describe('FIFO Calculations', () => {
  const emptyInventory = (): Inventory => ({});

  it('income transactions', () => {
    const transactions = case_income;
    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    // Verify incomes
    expect(incomes).toHaveLength(4);
    expect(incomes[0]).toEqual(
      expect.objectContaining({
        amount: 100,
        asset: 'ATOM',
      }),
    );
    expect(incomes[1]).toEqual(
      expect.objectContaining({
        amount: 200,
        asset: 'OSMO',
      }),
    );
    expect(incomes[2]).toEqual(
      expect.objectContaining({
        amount: 150,
        asset: 'UM',
      }),
    );
    expect(incomes[3]).toEqual(
      expect.objectContaining({
        amount: 5,
        asset: 'ATOM',
      }),
    );

    // Verify no disposals occurred
    expect(disposals).toHaveLength(0);

    // Verify final inventory
    expect(inventory['ATOM']).toBeDefined();
    expect(inventory['ATOM']).toHaveLength(2);
    expect(inventory['ATOM'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(105);

    expect(inventory['OSMO']).toBeDefined();
    expect(inventory['OSMO']).toHaveLength(1);
    expect(inventory['OSMO'][0].amount).toBe(200);

    expect(inventory['UM']).toBeDefined();
    expect(inventory['UM']).toHaveLength(1);
    expect(inventory['UM'][0].amount).toBe(150);
  });

  it('internal receive transactions', () => {
    const transactions = case_receives_internal;
    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    expect(incomes).toHaveLength(0);
    expect(disposals).toHaveLength(0);
    expect(Object.keys(inventory)).toHaveLength(3);

    expect(inventory['ATOM']).toBeDefined();
    expect(inventory['ATOM']).toHaveLength(1);
    expect(inventory['ATOM'][0].amount).toBe(10);

    expect(inventory['OSMO']).toBeDefined();
    expect(inventory['OSMO']).toHaveLength(1);
    expect(inventory['OSMO'][0].amount).toBe(20);

    expect(inventory['UM']).toBeDefined();
    expect(inventory['UM']).toHaveLength(1);
    expect(inventory['UM'][0].amount).toBe(30);
  });

  it('internal transfer with income', () => {
    const transactions = case_income_and_internals;
    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    expect(disposals.length).toBe(0);

    // Only Txs where internal=false are counted as income
    expect(incomes.length).toBe(4);
    expect(incomes[0]).toEqual(expect.objectContaining({ amount: 100, asset: 'ATOM' }));
    expect(incomes[1]).toEqual(expect.objectContaining({ amount: 200, asset: 'OSMO' }));
    expect(incomes[2]).toEqual(expect.objectContaining({ amount: 150, asset: 'UM' }));
    expect(incomes[3]).toEqual(expect.objectContaining({ amount: 5, asset: 'ATOM' }));

    // Verify inventory includes both transactions
    expect(inventory).toHaveProperty('ATOM');
    expect(inventory['ATOM'].length).toBe(3);
    expect(inventory['ATOM'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(115);
    expect(inventory['ATOM'][0].amount).toBe(100);
    expect(inventory['ATOM'][1].amount).toBe(10);
    expect(inventory['ATOM'][2].amount).toBe(5);

    expect(inventory).toHaveProperty('OSMO');
    expect(inventory['OSMO'].length).toBe(2);
    expect(inventory['OSMO'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(220);
    expect(inventory['OSMO'][0].amount).toBe(200);
    expect(inventory['OSMO'][1].amount).toBe(20);

    expect(inventory).toHaveProperty('UM');
    expect(inventory['UM'].length).toBe(2);
    expect(inventory['UM'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(180);
    expect(inventory['UM'][0].amount).toBe(150);
    expect(inventory['UM'][1].amount).toBe(30);
  });

  it('income same day 1 asset', () => {
    /**
     * Same day events are handled as separate lots.
     * The price on them can be different, so they can be treated as separate lots.
     * The difference in price can be observed if the get_price function is granular enough.
     * If the get_price allows for querying daily prices, then the price will be the same for both events.
     */
    const transactions = case_income_same_day_1_asset;
    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    expect(disposals.length).toBe(0);
    expect(incomes.length).toBe(2);

    // Only one asset in inventory
    expect(Object.keys(inventory).length).toBe(1);
    expect(inventory).toHaveProperty('ATOM');
    expect(inventory['ATOM'].length).toBe(2);
    expect(inventory['ATOM'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(300);

    expect(incomes[0]).toEqual(expect.objectContaining({ amount: 100, asset: 'ATOM' }));
    expect(incomes[1]).toEqual(expect.objectContaining({ amount: 200, asset: 'ATOM' }));
  });

  it('income same day 2 assets', () => {
    const transactions = case_income_same_day_2_assets;
    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    expect(incomes.length).toBe(2);
    expect(incomes[0]).toEqual(expect.objectContaining({ amount: 100, asset: 'ATOM' }));
    expect(incomes[1]).toEqual(expect.objectContaining({ amount: 200, asset: 'OSMO' }));

    expect(disposals.length).toBe(0);
    expect(Object.keys(inventory).length).toBe(2);
  });

  it('single asset spend', () => {
    const transactions = case_single_asset_spend;

    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    // Verify income
    expect(incomes.length).toBe(2);
    expect(incomes[0].amount).toBe(1); // staking reward
    expect(incomes[1].amount).toBe(5); // receive

    // Verify disposal
    expect(disposals.length).toBe(1);
    expect(disposals[0]).toEqual(
      expect.objectContaining({
        amount: 1, // send
        asset: 'ATOM',
      }),
    );

    // Verify remaining inventory
    expect(inventory).toHaveProperty('ATOM');
    expect(inventory['ATOM'].length).toBe(2);
    expect(inventory['ATOM'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(6);

    // The first internal receive was spent
    expect(inventory['ATOM'][0].amount).toBe(1); // from staking reward
    expect(inventory['ATOM'][1].amount).toBe(5); // from receive
  });

  it('swap transactions', () => {
    const transactions = case_swap;
    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    expect(incomes).toHaveLength(1);
    expect(incomes[0]).toEqual(
      expect.objectContaining({
        amount: 1,
        asset: 'ATOM',
      }),
    );

    expect(disposals).toHaveLength(1);
    expect(disposals[0]).toEqual(
      expect.objectContaining({
        amount: 1,
        asset: 'ATOM',
      }),
    );

    expect(inventory['ATOM']).toBeDefined();
    expect(inventory['OSMO']).toBeDefined();
    expect(inventory['ATOM']).toHaveLength(1);
    expect(inventory['OSMO']).toHaveLength(1);
    expect(inventory['ATOM'][0].amount).toBe(1);
    expect(inventory['OSMO'][0].amount).toBe(5);
  });

  it('swap multilot same asset', () => {
    const transactions = case_swap_multilot_same_asset;

    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    // incomes added to verify that they are not counted as disposals
    expect(incomes.length).toBe(1);
    expect(incomes[0]).toEqual(
      expect.objectContaining({
        amount: 1,
        asset: 'ATOM',
      }),
    );

    // disposing of the "out" asset in the swap
    expect(disposals.length).toBe(1);
    expect(disposals[0]).toEqual(
      expect.objectContaining({
        amount: 1,
        asset: 'ATOM',
      }),
    );

    // Verify final inventory
    // after swapping 1 ATOM -> 5 OSMO
    expect(inventory).toHaveProperty('ATOM');
    expect(inventory).toHaveProperty('OSMO');
    // receive was partially spent - number of lots is the same
    expect(inventory['ATOM'].length).toBe(2);
    expect(inventory['ATOM'][0].amount).toBe(9); // was 10, 1 was spent
    expect(inventory['ATOM'][1].amount).toBe(1);

    expect(inventory['OSMO'].length).toBe(1);
    expect(inventory['OSMO'][0].amount).toBe(5);
  });

  it('swap spend multiple lots', () => {
    const transactions = case_swap_spend_multiple_lots;

    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    expect(incomes.length).toBe(1);
    expect(incomes[0]).toEqual(
      expect.objectContaining({
        amount: 2,
        asset: 'ATOM',
      }),
    );

    expect(disposals.length).toBe(2);
    // spend lot 1 in full
    expect(disposals[0]).toEqual(
      expect.objectContaining({
        amount: 1,
        asset: 'ATOM',
      }),
    );
    // spend lot 2 partially
    expect(disposals[1]).toEqual(
      expect.objectContaining({
        amount: 1,
        asset: 'ATOM',
      }),
    );

    expect(inventory['ATOM'].length).toBe(1);
    expect(inventory['ATOM'][0].amount).toBe(1);

    expect(inventory['OSMO'].length).toBe(1);
    expect(inventory['OSMO'][0].amount).toBe(10);
  });

  it('complex multi-asset scenario', () => {
    const transactions = case_multi_asset_complex;
    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    // Verify inventory state
    expect(Object.keys(inventory)).toHaveLength(6);

    expect(inventory['ATOM']).toHaveLength(2);
    expect(inventory['ATOM'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(130);
    expect(inventory['ATOM'][0].amount).toBe(30);
    expect(inventory['ATOM'][1].amount).toBe(100);

    expect(inventory['OSMO']).toHaveLength(3);
    expect(inventory['OSMO'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(352);
    expect(inventory['OSMO'][0].amount).toBe(50);
    expect(inventory['OSMO'][1].amount).toBe(300);
    expect(inventory['OSMO'][2].amount).toBe(2);

    expect(inventory['UM']).toHaveLength(1);
    expect(inventory['UM'][0].amount).toBe(199);

    expect(inventory['NAM']).toHaveLength(3);
    expect(inventory['NAM'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(45);

    expect(inventory['STRD']).toHaveLength(0);

    expect(inventory['NTRN']).toHaveLength(4);
    expect(inventory['NTRN'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(21);

    // Verify incomes and disposals
    expect(incomes).toHaveLength(8);
    expect(disposals).toHaveLength(12);
  });

  it('multi asset complex', () => {
    const transactions = case_multi_asset_complex;

    const [incomes, disposals, inventory] = calculateFifo(
      transactions,
      emptyInventory(),
      mockGetPrice,
    );

    // INVENTORY

    // ATOM, OSMO, NAM, UM, STRD, NTRN
    expect(Object.keys(inventory).length).toBe(6);
    expect(inventory).toHaveProperty('ATOM');
    expect(inventory).toHaveProperty('OSMO');
    expect(inventory).toHaveProperty('UM');
    expect(inventory).toHaveProperty('NAM');
    expect(inventory).toHaveProperty('STRD');
    expect(inventory).toHaveProperty('NTRN');

    expect(inventory['ATOM'].length).toBe(2);
    // after swapping out 50 and spending 120
    // there should be 130 left in 2 lots
    expect(inventory['ATOM'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(130);

    // before spend/swap -> 3 lots @300 -> 100 + 100 + 100
    // swap 50 -> 50 + 100 + 100
    // spend 120 -> 0 + 30 + 100
    expect(inventory['ATOM'][0].amount).toBe(30);
    expect(inventory['ATOM'][1].amount).toBe(100);

    expect(inventory['OSMO'].length).toBe(3);
    expect(inventory['OSMO'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(352);

    // before spend/swap -> 3 lots @300 -> 200 + 300 + 2
    expect(inventory['OSMO'][0].amount).toBe(50); // spend 50 and 100 from lot 1 (200)
    expect(inventory['OSMO'][1].amount).toBe(300); // spend 100 from lot 2 (300)
    expect(inventory['OSMO'][2].amount).toBe(2); // spend 120 from lot 3 (300)

    expect(inventory['UM'].length).toBe(1);
    // before spend/swap -> 3 lots @300 -> 150 + 3 + 200
    // there's a spend of 154 which consumes lots 150 and 3 in full and 200 in part
    expect(inventory['UM'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(199);
    expect(inventory['UM'][0].amount).toBe(199);

    expect(inventory['NAM'].length).toBe(3);
    // 3 lots, no spend -> 10 + 20 + 15
    expect(inventory['NAM'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(45);
    expect(inventory['NAM'][0].amount).toBe(10);
    expect(inventory['NAM'][1].amount).toBe(20);
    expect(inventory['NAM'][2].amount).toBe(15);

    // there were 4 lots holding 6 in total -> all 6 were spent
    expect(inventory['STRD'].length).toBe(0);

    expect(inventory['NTRN'].length).toBe(4);
    expect(inventory['NTRN'].reduce((sum, lot) => sum + lot.amount, 0)).toBe(21);
    expect(inventory['NTRN'][0].amount).toBe(5);
    expect(inventory['NTRN'][1].amount).toBe(5);
    expect(inventory['NTRN'][2].amount).toBe(1);
    expect(inventory['NTRN'][3].amount).toBe(10);

    // INCOMES

    // 3 receives, 5 staking rewards
    expect(incomes.length).toBe(8);

    // DISPOSALS

    // disposals are a bit more complicated because 1 Tx
    // can produce multiple disposals because it spends multiple lots
    // 4 disposals are from swaps (data is set so only 1 lot is spent)
    // 8 disposals are from sends (data is set so multiple lots are spent)
    // OSMO: 1
    // ATOM: 2
    // UM: 3
    // STRD: 2
    expect(disposals.length).toBe(12);
  });
});

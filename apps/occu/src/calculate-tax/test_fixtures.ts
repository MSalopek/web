import { Transaction } from './common';

/* prettier-ignore-start */
export const case_income_same_day_2_assets: Transaction[] = [
    { date: new Date(2024, 0, 1), timestamp: 1, type: "receive", amount_in: 100, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    { date: new Date(2024, 0, 1), timestamp: 2, type: "receive", amount_in: 200, asset_in: "OSMO", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
];

export const case_income_same_day_1_asset: Transaction[] = [
    // treated as 2 separate events because the price can be different
    { date: new Date(2024, 0, 1), timestamp: 1, type: "receive", amount_in: 100, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    { date: new Date(2024, 0, 1), timestamp: 2, type: "receive", amount_in: 200, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
];

export const case_income: Transaction[] = [
    { date: new Date(2024, 0, 1), timestamp: 1, type: "receive", amount_in: 100, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    { date: new Date(2024, 0, 2), timestamp: 2, type: "receive", amount_in: 200, asset_in: "OSMO", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    { date: new Date(2024, 0, 3), timestamp: 3, type: "receive", amount_in: 150, asset_in: "UM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    { date: new Date(2024, 0, 30), timestamp: 4, type: "staking_reward", amount_in: 5, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
];

// non-taxable acquisitions -> e.g. rebalance/send from another wallet owned by the same person
export const case_receives_internal: Transaction[] = [
    { date: new Date(2024, 0, 15), timestamp: 1, type: "receive", amount_in: 10, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    { date: new Date(2024, 0, 20), timestamp: 2, type: "receive", amount_in: 20, asset_in: "OSMO", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    { date: new Date(2024, 0, 25), timestamp: 3, type: "receive", amount_in: 30, asset_in: "UM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
];

export const case_income_and_internals: Transaction[] = [...case_income, ...case_receives_internal];

export const case_single_asset_spend: Transaction[] = [
    // the first one is internal and it sets the initial inventory balance
    { date: new Date(2024, 0, 1), timestamp: 1, type: "receive", amount_in: 1, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    { date: new Date(2024, 0, 10), timestamp: 2, type: "staking_reward", amount_in: 1, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    { date: new Date(2024, 0, 17), timestamp: 3, type: "send", amount_in: 0, asset_in: "", amount_out: 1, asset_out: "ATOM", fee_amount: 0, fee_asset: "" },
    // Taxable income
    { date: new Date(2024, 0, 18), timestamp: 4, type: "receive", amount_in: 5, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
];

export const case_swap: Transaction[] = [
    { date: new Date(2024, 0, 1), timestamp: 1, type: "receive", amount_in: 1, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    { date: new Date(2024, 0, 10), timestamp: 2, type: "staking_reward", amount_in: 1, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    // Taxable income
    { date: new Date(2024, 0, 18), timestamp: 4, type: "swap", amount_out: 1, asset_out: "ATOM", amount_in: 5, asset_in: "OSMO", fee_amount: 0, fee_asset: "" },
];

export const case_swap_multilot_same_asset: Transaction[] = [
    // swap is 1 ATOM -> 5 OSMO -> this first Tx should remain in the lot with 9 ATOM
    { date: new Date(2024, 0, 1), timestamp: 1, type: "receive", amount_in: 10, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    { date: new Date(2024, 0, 10), timestamp: 2, type: "staking_reward", amount_in: 1, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    // Taxable income
    { date: new Date(2024, 0, 18), timestamp: 4, type: "swap", amount_out: 1, asset_out: "ATOM", amount_in: 5, asset_in: "OSMO", fee_amount: 0, fee_asset: "" },
];

export const case_swap_spend_multiple_lots: Transaction[] = [
    { date: new Date(2024, 0, 1), timestamp: 1, type: "receive", amount_in: 1, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    { date: new Date(2024, 0, 10), timestamp: 2, type: "staking_reward", amount_in: 2, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    // first lot is spent in full, the second one is partially spent
    { date: new Date(2024, 0, 18), timestamp: 4, type: "swap", amount_out: 2, asset_out: "ATOM", amount_in: 10, asset_in: "OSMO", fee_amount: 0, fee_asset: "" },
];

export const case_multi_asset_complex: Transaction[] = [
    // Acquisitions -> internal transfer from another wallet -> not a tax event
    { date: new Date(2024, 0, 1), timestamp: 1, type: "receive", amount_in: 100, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    { date: new Date(2024, 0, 2), timestamp: 2, type: "receive", amount_in: 200, asset_in: "OSMO", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    { date: new Date(2024, 0, 3), timestamp: 3, type: "receive", amount_in: 150, asset_in: "UM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },

    // Income (airdrops/rewards)
    { date: new Date(2024, 0, 4), timestamp: 4, label: "airdrop", type: "receive", amount_in: 10, asset_in: "NAM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    { date: new Date(2024, 0, 5), timestamp: 5, type: "staking_reward", amount_in: 5, asset_in: "NTRN", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    { date: new Date(2024, 0, 6), timestamp: 6, type: "staking_reward", amount_in: 2, asset_in: "STRD", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },

    // Swap 50 ATOM → 300 OSMO - consume 1 ATOM lot
    { date: new Date(2024, 0, 7), timestamp: 7, type: "swap", amount_in: 300, asset_in: "OSMO", amount_out: 50, asset_out: "ATOM", fee_amount: 0, fee_asset: "" },

    // Sell 50 OSMO -> taxable -> this is a disposal that happens at the observed price of OSMO
    { date: new Date(2024, 0, 8), timestamp: 8, type: "send", amount_in: 0, asset_in: "", amount_out: 50, asset_out: "OSMO", fee_amount: 0, fee_asset: "" },

    // Receive more rewards
    { date: new Date(2024, 0, 9), timestamp: 9, type: "staking_reward", amount_in: 4, asset_in: "STRD", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },
    { date: new Date(2024, 0, 10), timestamp: 10, label: "airdrop", type: "receive", amount_in: 20, asset_in: "NAM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },

    // Swap 100 OSMO → 5 NTRN -> consume 1 OSMO lot
    { date: new Date(2024, 0, 11), timestamp: 11, type: "swap", amount_in: 5, asset_in: "NTRN", amount_out: 100, asset_out: "OSMO", fee_amount: 0, fee_asset: "" },

    // Acquisition -> internal transfer from another wallet -> not a tax event
    { date: new Date(2024, 0, 12), timestamp: 12, type: "receive", amount_in: 100, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    
    // INCOME -> TAX EVENT
    { date: new Date(2024, 0, 12), timestamp: 12, type: "receive", amount_in: 100, asset_in: "ATOM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: false },

    // Sell 120 ATOM
    { date: new Date(2024, 0, 13), timestamp: 13, type: "send", amount_in: 0, asset_in: "", amount_out: 120, asset_out: "ATOM", fee_amount: 0, fee_asset: "" },

    // More staking income
    { date: new Date(2024, 0, 14), timestamp: 14, type: "staking_reward", amount_in: 3, asset_in: "UM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },

    // More swaps
    // consume 2 STRD lots
    { date: new Date(2024, 0, 15), timestamp: 15, type: "swap", amount_in: 1, asset_in: "NTRN", amount_out: 3, asset_out: "STRD", fee_amount: 0, fee_asset: "" },
    // consume 1 STRD lot
    { date: new Date(2024, 0, 16), timestamp: 16, type: "swap", amount_in: 15, asset_in: "NAM", amount_out: 1, asset_out: "STRD", fee_amount: 0, fee_asset: "" },

    // Another acquisition
    { date: new Date(2024, 0, 17), timestamp: 17, type: "receive", amount_in: 200, asset_in: "UM", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    { date: new Date(2024, 0, 17), timestamp: 17, type: "receive", amount_in: 10, asset_in: "NTRN", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "", internal: true },
    
    // Sell 153 UM -> should be using 3 lots -> 150 (full) + 3 (full) + 200 (partial - spend just 1)
    { date: new Date(2024, 0, 18), timestamp: 18, type: "send", amount_in: 0, asset_in: "", amount_out: 154, asset_out: "UM", fee_amount: 0, fee_asset: "" },

    // Receive reward
    { date: new Date(2024, 0, 19), timestamp: 19, type: "staking_reward", amount_in: 2, asset_in: "OSMO", amount_out: 0, asset_out: "", fee_amount: 0, fee_asset: "" },

    // Sell 10 STRD
    { date: new Date(2024, 0, 20), timestamp: 20, type: "send", amount_in: 0, asset_in: "", amount_out: 2, asset_out: "STRD", fee_amount: 0, fee_asset: "" },
];
/* prettier-ignore-end */

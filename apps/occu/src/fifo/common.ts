export interface TaxRate {
  duration: number; // duration in years
  rate: number; // tax rate as float -> 0.01 == 1%
}
export const default_tax_rates: Record<string, TaxRate> = {
  short_term: { duration: 0, rate: 0.2 },
  long_term: { duration: 1, rate: 0.1 },
  income: { duration: 0, rate: 0.2 }, // duration is not important for income
};

export const transaction_type = ['income', 'disposal', 'acquisition', 'expense', 'rebalance'];

export const disposal_header = [
  'Date Acquired',
  'Date Sold',
  'Asset',
  'Amount',
  'Price Acquired (USD)',
  'Price Disposed (USD)',
  'Total Cost Basis',
  'Total Proceeds',
  'PnL',
];

export const income_header = ['Date', 'Asset', 'Amount', 'Price (USD)', 'Total Value (USD)'];

export const inventory_header = [
  'Asset',
  'Amount',
  'Price (USD)',
  'Total Cost Basis',
  'Date Acquired',
];

// Actions that are included in tax calculations
export const TaxableActions = new Set([
  'receive',
  'send',
  'swap',
  'swapClaim',
  'undelegateClaim',

  // TODO:
  // TRANSACTION_LABEL_BY_CLASSIFICATION.ibcRelayAction,
  // TRANSACTION_LABEL_BY_CLASSIFICATION.ics20Withdrawal,
  // TRANSACTION_LABEL_BY_CLASSIFICATION.delegate,
  // TRANSACTION_LABEL_BY_CLASSIFICATION.undelegate,
  // TRANSACTION_LABEL_BY_CLASSIFICATION.dutchAuctionSchedule,
  // TRANSACTION_LABEL_BY_CLASSIFICATION.dutchAuctionEnd,
  // TRANSACTION_LABEL_BY_CLASSIFICATION.dutchAuctionWithdraw,
  // TRANSACTION_LABEL_BY_CLASSIFICATION.positionClose,
  // TRANSACTION_LABEL_BY_CLASSIFICATION.positionOpen,
  // TRANSACTION_LABEL_BY_CLASSIFICATION.positionWithdraw,
  // TRANSACTION_LABEL_BY_CLASSIFICATION.positionRewardClaim,
]);

export interface TaxTransactionEvent {
  date?: Date | null;
  height?: number | string | null;
  tx_hash?: string | null;
  type: string;
  amount_in: number;
  asset_in: string;
  amount_out: number;
  asset_out: string;
  fee_amount: number;
  fee_asset: string;
  internal?: boolean;

  timestamp?: number | null;
  label?: string | null;
}

export interface Disposal {
  date_acquired: Date | null;
  date_sold: Date | null;
  amount: number;
  asset: string;
  price_acquired: number;
  price_disposed: number;
  pnl: number;
  sub_disposals?: Disposal[] | null;
  inputs?: TaxTransactionEvent[] | null;
  outputs?: TaxTransactionEvent[] | null;
}

export interface Income {
  height?: number | null;
  date?: Date | null;
  amount: number;
  asset: string;
  price: number;
  timestamp?: number | null;
}

export interface Expense {
  height?: number | null;
  date?: Date | null;
  amount: number;
  asset: string;
  price: number;
  timestamp?: number | null;
}

export interface InventoryLot {
  height?: number | null;
  date?: Date | null;
  amount: number;
  price: number;
  txs?: TaxTransactionEvent | TaxTransactionEvent[] | null;
  timestamp?: number | null;
}

// helper for tracking the spends of particular inventory lots
export interface LotSpend {
  height?: number | null;
  date?: Date | null;
  asset: string;
  amount_spent: number;
  price: number;
}

export interface TaxResult {
  tax_amount: number;
  disposals: Disposal[];
  incomes: Income[];
}

export function apply_tax_rates(
  disposals: Disposal[],
  incomes: Income[],
  tax_rates?: Record<string, TaxRate>,
): Record<string, TaxResult> {
  let rates = tax_rates;
  if (!rates) {
    rates = default_tax_rates;
  }

  // calculate tax from disposals
  const result: Record<string, TaxResult> = Object.fromEntries(
    Object.entries(rates).map(([tax_type]) => {
      return [tax_type, { tax_amount: 0.0, disposals: [], incomes: [] }];
    }),
  );

  disposals.forEach(disposal => {
    Object.entries(rates).forEach(([tax_type, tax_rate]) => {
      if (
        disposal.date_sold &&
        disposal.date_acquired &&
        (disposal.date_sold.getTime() - disposal.date_acquired.getTime()) /
          (1000 * 60 * 60 * 24 * 365.0) <=
          tax_rate.duration
      ) {
        const taxResult = result[tax_type];
        if (taxResult) {
          taxResult.tax_amount += disposal.pnl * tax_rate.rate;
          taxResult.disposals.push(disposal);
        }
      }
    });
  });

  const incomeRate = rates['income'];
  if (!incomeRate) {
    throw new Error('Income tax rate not found in tax rates');
  }

  result['income'] = {
    tax_amount:
      incomeRate.rate * incomes.reduce((sum, income) => sum + income.amount * income.price, 0),
    disposals: [],
    incomes: incomes,
  };

  return result;
}

export interface InventorySummary {
  amount: number;
  cost_basis: number;
}

export function inventorySummary(
  inventory: Record<string, InventoryLot[]>,
): Record<string, InventorySummary> {
  const summary: Record<string, InventorySummary> = {};

  Object.entries(inventory).forEach(([asset, lots]) => {
    const total_cost = lots.reduce((sum, lot) => sum + lot.amount * lot.price, 0);
    const total_amount = lots.reduce((sum, lot) => sum + lot.amount, 0);
    summary[asset] = { amount: total_amount, cost_basis: total_cost };
  });

  return summary;
}

export function filterTransactionsByDate(
  transactions: TaxTransactionEvent[],
  start_date: Date,
  end_date: Date,
): TaxTransactionEvent[] {
  return transactions.filter(tx => tx.date && start_date <= tx.date && tx.date <= end_date);
}

export function disposalsToCsvRows(disposals: Disposal[]): string[][] {
  return disposals.map(d => {
    const total_cost = d.price_acquired * d.amount;
    const proceeds = d.price_disposed * d.amount;
    return [
      d.date_acquired ? d.date_acquired.toISOString() : '',
      d.date_sold ? d.date_sold.toISOString() : '',
      d.asset,
      d.amount.toFixed(8),
      d.price_acquired.toFixed(8),
      d.price_disposed.toFixed(8),
      total_cost.toFixed(2),
      proceeds.toFixed(2),
      d.pnl.toFixed(2),
    ];
  });
}

export function incomesToCsvRows(incomes: Income[]): string[][] {
  return incomes.map(inc => {
    const total_value = inc.amount * inc.price;
    return [
      inc.date ? inc.date.toISOString() : '',
      inc.asset,
      inc.amount.toFixed(8),
      inc.price.toFixed(8),
      total_value.toFixed(2),
    ];
  });
}

export function inventoryToCsvRows(inventory: Record<string, InventoryLot[]>): string[][] {
  return Object.entries(inventory).flatMap(([asset, lots]) =>
    lots.map(lot => {
      const total_cost = lot.amount * lot.price;
      return [
        asset,
        lot.amount.toFixed(8),
        lot.price.toFixed(8),
        total_cost.toFixed(2),
        lot.date ? lot.date.toISOString() : '',
      ];
    }),
  );
}

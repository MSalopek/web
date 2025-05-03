import { Disposal, Income, InventoryLot } from './common';

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

/* eslint-disable -- enable later */
export function disposalsToCsvRows(disposals: Disposal[]) {
  return disposals.map(d => {
    const total_cost = d.price_acquired * d.amount;
    const proceeds = d.price_disposed * d.amount;
    return [
      d.date_acquired
        ? typeof d.date_acquired === 'string'
          ? d.date_acquired
          : d.date_acquired.toISOString().split('T')[0]
        : '',
      d.date_sold
        ? typeof d.date_sold === 'string'
          ? d.date_sold
          : d.date_sold.toISOString().split('T')[0]
        : '',
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

export function incomesToCsvRows(incomes: Income[]) {
  return incomes.map(inc => {
    const total_value = inc.amount * inc.price;
    return [
      inc.date
        ? typeof inc.date === 'string'
          ? inc.date
          : inc.date.toISOString().split('T')[0]
        : '',
      inc.asset,
      inc.amount.toFixed(8),
      inc.price.toFixed(8),
      total_value.toFixed(2),
    ];
  });
}

export function inventoryToCsvRows(inventory: Record<string, InventoryLot[]>) {
  return Object.entries(inventory).flatMap(([asset, lots]) =>
    lots.map(lot => {
      const total_cost = lot.amount * lot.price;
      return [
        asset,
        lot.amount.toFixed(8),
        lot.price.toFixed(8),
        total_cost.toFixed(2),
        lot.date
          ? typeof lot.date === 'string'
            ? lot.date
            : lot.date.toISOString().split('T')[0]
          : '',
      ];
    }),
  );
}

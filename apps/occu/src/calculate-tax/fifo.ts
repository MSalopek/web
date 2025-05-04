import { TaxTransactionEvent, Disposal, Income, InventoryLot, LotSpend } from './common';

type GetPriceFunction = (asset: string, date: string) => number;

export interface TaxReportData {
  incomes: Income[];
  disposals: Disposal[];
  fees: Disposal[];
  expenses: Disposal[];
  inventory: Record<string, InventoryLot[]>;
}

export function calculateFifo(
  transactions: TaxTransactionEvent[],
  startingInventory: Record<string, InventoryLot[]>,
  getPrice: GetPriceFunction,
): TaxReportData {
  const inventory: Record<string, InventoryLot[]> = {};
  const incomes: Income[] = [];
  const disposals: Disposal[] = [];
  const fees: Disposal[] = [];
  const expenses: Disposal[] = [];

  // Initialize inventory from starting inventory
  Object.entries(startingInventory).forEach(([asset, lots]) => {
    inventory[asset] = [...lots];
  });

  // Sort transactions by date
  const sortedTransactions = [...transactions].sort((a, b) => {
    const heightA = Number(a.height ?? 0);
    const heightB = Number(b.height ?? 0);
    return heightA - heightB;
  });

  for (const tx of sortedTransactions) {
    switch (tx.type) {
      case 'income':
        handleIncome(tx, incomes, getPrice);
        handleAcquisition(tx, inventory, getPrice);
        break;
      case 'disposal':
        handleDisposal(tx, inventory, disposals, getPrice);
        if (tx.amount_in && tx.amount_in > 0) {
          handleAcquisition(tx, inventory, getPrice);
        }
        break;
      case 'acquisition':
        handleAcquisition(tx, inventory, getPrice);
        break;
      case 'rebalance':
        handleRebalance(tx, inventory, disposals);
        break;
      case 'swap':
        handleSwap(tx, inventory, disposals, getPrice);
        break;
      case 'expense':
        // Edgecase: if the amount_out is 0 then the Tx just incurred a fee
        // there is no need to process the Tx further
        // the transaction will not be in the Tx list because it already shows up in the fees list
        if (tx.amount_out && tx.amount_out > 0) {
          handleExpense(tx, inventory, expenses, getPrice);
        }
        break;
      default:
        throw new Error(`Unknown transaction type: ${tx.type}`);
    }

    // all txs apply a fee
    // fee can incurr a capital gain or loss depending on the Tax settings
    handleFee(tx, inventory, fees, getPrice);
  }

  return { incomes, disposals, fees, expenses, inventory };
}

function handleIncome(
  tx: TaxTransactionEvent,
  incomes: Income[],
  getPrice: GetPriceFunction,
): void {
  if (!tx.asset_in) {
    throw Error(
      `Asset in is undefined for income transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  if (!tx.amount_in) {
    throw Error(
      `Amount in is undefined for income transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  if (!tx.date) {
    throw Error(
      `Date is undefined for income transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  const date = new Date(tx.date);
  const dateString = date.toISOString().split('T')[0];
  if (!dateString) {
    throw Error(
      `Date string is undefined for income transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }
  const price = getPrice(tx.asset_in, dateString);
  incomes.push({
    date: tx.date,
    height: tx.height,
    amount: tx.amount_in,
    asset: tx.asset_in,
    price: price,
    timestamp: tx.timestamp,
  });
}

function handleAcquisition(
  tx: TaxTransactionEvent,
  inventory: Record<string, InventoryLot[]>,
  getPrice: GetPriceFunction,
): void {
  if (!tx.asset_in) {
    throw Error(
      `Asset in is undefined for acquisition transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  if (!tx.amount_in) {
    throw Error(
      `Amount in is undefined for acquisition transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  if (!tx.date) {
    throw Error(
      `Date is undefined for acquisition transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  const asset = tx.asset_in;
  if (!inventory[asset]) {
    inventory[asset] = [];
  }

  const date = new Date(tx.date);
  const dateString = date.toISOString().split('T')[0];
  if (!dateString) {
    throw Error(
      `Date string is undefined for acquisition transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  inventory[asset].push({
    amount: tx.amount_in,
    price: getPrice(asset, dateString),
    date: tx.date,
    timestamp: tx.timestamp ?? undefined,
    txs: tx,
  });
}

function matchFifoDisposal(
  asset: string,
  amount: number,
  inventory: Record<string, InventoryLot[]>,
): [LotSpend[], number] {
  const fifo = inventory[asset] ?? [];
  let remaining = amount;
  const spentLots: LotSpend[] = [];
  let totalCostBasis = 0;

  while (remaining > 0 && fifo.length > 0) {
    const lot = fifo[0];
    if (!lot) {
      throw Error(`Lot is undefined for asset: ${asset}`);
    }
    const usedAmount = Math.min(lot.amount, remaining);
    const costBasis = usedAmount * lot.price;
    totalCostBasis += costBasis;

    if (usedAmount === lot.amount) {
      fifo.shift();
    } else {
      lot.amount -= usedAmount;
    }

    remaining -= usedAmount;
    spentLots.push({
      asset,
      date: lot.date,
      amount_spent: usedAmount,
      price: lot.price,
    });
  }

  return [spentLots, totalCostBasis];
}

function handleDisposal(
  tx: TaxTransactionEvent,
  inventory: Record<string, InventoryLot[]>,
  disposals: Disposal[],
  getPrice: GetPriceFunction,
): void {
  if (!tx.asset_out) {
    throw Error(
      `Asset out is undefined for disposal transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  if (!tx.amount_out) {
    throw Error(
      `Amount out is undefined for disposal transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  if (!tx.date) {
    throw Error(
      `Date is undefined for disposal transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  const asset = tx.asset_out;
  const amount = tx.amount_out;
  const date = new Date(tx.date);
  const dateString = date.toISOString().split('T')[0];
  if (!dateString) {
    throw Error(
      `Date string is undefined for disposal transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }
  const priceDisposed = getPrice(asset, dateString);

  const [spentLots] = matchFifoDisposal(asset, amount, inventory);

  const spentLotsSum = spentLots.reduce((sum, lot) => sum + lot.amount_spent, 0);
  if (Math.abs(spentLotsSum - amount) > 0.00000001) {
    throw new Error(`Spent lots sum ${spentLotsSum} does not match amount ${amount}`);
  }

  spentLots.forEach(lot => {
    const priceAcquired = lot.price;
    const pnl = lot.amount_spent * (priceDisposed - priceAcquired);

    if (!lot.date) {
      throw Error(
        `Lot date is undefined for disposal transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
      );
    }

    disposals.push({
      date_acquired: lot.date,
      date_sold: dateString,
      amount: lot.amount_spent,
      asset: lot.asset,
      price_acquired: priceAcquired,
      price_disposed: priceDisposed,
      pnl: pnl,
    });
  });
}

// fees are handled as disposals in case we need to track capital gains
// and cost basis the moment they are spent
function handleFee(
  tx: TaxTransactionEvent,
  inventory: Record<string, InventoryLot[]>,
  fees: Disposal[],
  getPrice: GetPriceFunction,
): void {
  if (!tx.fee_amount) {
    throw Error(
      `Fee amount is undefined for fees transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  if (!tx.date) {
    throw Error(
      `Date is undefined for fees transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  const fee_tx: TaxTransactionEvent = {
    date: tx.date,
    height: tx.height,
    type: 'disposal',
    asset_out: tx.fee_asset,
    amount_out: tx.fee_amount,
  };

  handleDisposal(fee_tx, inventory, fees, getPrice);
}

function handleExpense(
  tx: TaxTransactionEvent,
  inventory: Record<string, InventoryLot[]>,
  expenses: Disposal[],
  getPrice: GetPriceFunction,
): void {
  if (!tx.amount_out) {
    throw Error(
      `Expense amount is undefined for expense transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  if (!tx.asset_out) {
    throw Error(
      `Expense asset is undefined for expense transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  if (!tx.date) {
    throw Error(
      `Date is undefined for fees transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  handleDisposal(tx, inventory, expenses, getPrice);
}

function handleSwap(
  tx: TaxTransactionEvent,
  inventory: Record<string, InventoryLot[]>,
  disposals: Disposal[],
  getPrice: GetPriceFunction,
): void {
  handleDisposal(tx, inventory, disposals, getPrice);
  handleAcquisition(tx, inventory, getPrice);
}

function handleRebalance(
  tx: TaxTransactionEvent,
  inventory: Record<string, InventoryLot[]>,
  disposals: Disposal[],
): void {
  if (!tx.asset_out) {
    throw Error(
      `Asset out is undefined for rebalance transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  if (!tx.amount_out) {
    throw Error(
      `Amount out is undefined for rebalance transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  const [spentLots] = matchFifoDisposal(tx.asset_out, tx.amount_out, inventory);

  if (!tx.date) {
    throw Error(
      `Date is undefined for rebalance transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  const date = new Date(tx.date);
  const dateString = date.toISOString().split('T')[0];
  if (!dateString) {
    throw Error(
      `Date string is undefined for rebalance transaction: ${tx.height} - ${tx.type} - ${tx.tx_hash}`,
    );
  }

  spentLots.forEach(lot => {
    if (!lot.date) {
      throw Error(
        `Lot date is undefined for rebalance lot: ${lot.asset} ${lot.amount_spent} tx:${tx.height} - ${tx.type} - ${tx.tx_hash}`,
      );
    }

    disposals.push({
      date_acquired: lot.date,
      date_sold: dateString,
      amount: lot.amount_spent,
      asset: lot.asset,
      price_acquired: lot.price,
      price_disposed: lot.price,
      pnl: 0,
    });
  });
}

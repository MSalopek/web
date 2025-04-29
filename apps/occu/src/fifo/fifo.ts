import {
  Transaction,
  Disposal,
  Income,
  InventoryLot,
  LotSpend,
} from "./common";

type GetPriceFunction = (asset: string, date: Date) => number;

export function calculateFifo(
  transactions: Transaction[],
  startingInventory: Record<string, InventoryLot[]>,
  getPrice: GetPriceFunction
): [Income[], Disposal[], Record<string, InventoryLot[]>] {
  const inventory: Record<string, InventoryLot[]> = {};
  const incomes: Income[] = [];
  const disposals: Disposal[] = [];

  // Initialize inventory from starting inventory
  Object.entries(startingInventory).forEach(([asset, lots]) => {
    inventory[asset] = [...lots];
  });

  // Sort transactions by date
  const sortedTransactions = [...transactions].sort(
    (a, b) => (a.date?.getTime() ?? 0) - (b.date?.getTime() ?? 0)
  );

  for (const tx of sortedTransactions) {
    const txType = classifyTransaction(tx);

    switch (txType) {
      case "income":
        handleIncome(tx, incomes, getPrice);
        handleAcquisition(tx, inventory, getPrice);
        break;
      case "disposal":
        handleDisposal(tx, inventory, disposals, getPrice);
        if (tx.amount_in > 0) {
          handleAcquisition(tx, inventory, getPrice);
        }
        break;
      case "acquisition":
        handleAcquisition(tx, inventory, getPrice);
        break;
      case "rebalance":
        handleRebalance(tx, inventory, disposals);
        break;
      case "swap":
        handleSwap(tx, inventory, disposals, getPrice);
        break;
      default:
        throw new Error(`Unknown transaction type: ${tx.type}`);
    }
  }

  return [incomes, disposals, inventory];
}

function classifyTransaction(tx: Transaction): string {
  if (tx.type === "receive") {
    return tx.internal ? "acquisition" : "income";
  }
  if (tx.type === "staking_reward") {
    return "income";
  }
  if (tx.type === "send") {
    return tx.internal ? "rebalance" : "disposal";
  }
  if (tx.type === "swap") {
    return "swap";
  }
  return "unknown";
}

function handleIncome(
  tx: Transaction,
  incomes: Income[],
  getPrice: GetPriceFunction
): void {
  const price = getPrice(tx.asset_in, tx.date);
  incomes.push({
    date: tx.date,
    amount: tx.amount_in,
    asset: tx.asset_in,
    price: price,
    timestamp: tx.timestamp,
  });
}

function handleAcquisition(
  tx: Transaction,
  inventory: Record<string, InventoryLot[]>,
  getPrice: GetPriceFunction
): void {
  if (!inventory[tx.asset_in]) {
    inventory[tx.asset_in] = [];
  }

  inventory[tx.asset_in].push({
    amount: tx.amount_in,
    price: getPrice(tx.asset_in, tx.date),
    date: tx.date,
    timestamp: tx.timestamp ?? undefined,
    txs: tx,
  });
}

function matchFifoDisposal(
  asset: string,
  amount: number,
  inventory: Record<string, InventoryLot[]>
): [LotSpend[], number] {
  const fifo = inventory[asset] || [];
  let remaining = amount;
  const spentLots: LotSpend[] = [];
  let totalCostBasis = 0;

  while (remaining > 0 && fifo.length > 0) {
    const lot = fifo[0];
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
  tx: Transaction,
  inventory: Record<string, InventoryLot[]>,
  disposals: Disposal[],
  getPrice: GetPriceFunction
): void {
  const asset = tx.asset_out;
  const amount = tx.amount_out;
  const priceDisposed = getPrice(asset, tx.date);

  const [spentLots, _] = matchFifoDisposal(asset, amount, inventory);

  const spentLotsSum = spentLots.reduce(
    (sum, lot) => sum + lot.amount_spent,
    0
  );
  if (Math.abs(spentLotsSum - amount) > 0.00000001) {
    throw new Error(
      `Spent lots sum ${spentLotsSum} does not match amount ${amount}`
    );
  }

  spentLots.forEach((lot) => {
    const priceAcquired = lot.price;
    const pnl = lot.amount_spent * (priceDisposed - priceAcquired);

    disposals.push({
      date_acquired: lot.date,
      date_sold: tx.date,
      amount: lot.amount_spent,
      asset: lot.asset,
      price_acquired: priceAcquired,
      price_disposed: priceDisposed,
      pnl: pnl,
    });
  });
}

function handleSwap(
  tx: Transaction,
  inventory: Record<string, InventoryLot[]>,
  disposals: Disposal[],
  getPrice: GetPriceFunction
): void {
  handleDisposal(tx, inventory, disposals, getPrice);
  handleAcquisition(tx, inventory, getPrice);
}

function handleRebalance(
  tx: Transaction,
  inventory: Record<string, InventoryLot[]>,
  disposals: Disposal[]
): void {
  const [spentLots, _] = matchFifoDisposal(
    tx.asset_out,
    tx.amount_out,
    inventory
  );

  spentLots.forEach((lot) => {
    disposals.push({
      date_acquired: lot.date,
      date_sold: tx.date,
      amount: lot.amount_spent,
      asset: lot.asset,
      price_acquired: lot.price,
      price_disposed: lot.price,
      pnl: 0,
    });
  });
}

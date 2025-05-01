interface YearBlockInterval {
  start: number;
  end: number;
}

export const YEAR_BLOCK_INTERVALS: Record<number, YearBlockInterval> = {
  2024: { start: 0, end: 2806631 },
  2025: { start: 2806631, end: 6307200 },
} as const;

export const GENESIS_BLOCK_DATETIME = new Date('2024-07-05T16:00:00+00:00');
export const OSMOSIS_PENUMBRA_IBC =
  'ibc/0FA9232B262B89E77D1335D54FB1E1F506A92A7E4B51524B400DC69C68D28372';

// height at which trading on Penumbra began on OSMOSIS (Aug 1st, 2024)
// this was obtained by checking the indexed chain data
// first height where price is available is actually 411645
// price was very volatile in the first few days -> range from 0.0001 to 1 USDC
// OSMOSIS lists the first trading price as 0.5625 (Aug 1st, midnight UTC)
export const PENUMBRA_HEIGHT_TRADING_START = 411645;
export const PENUMBRA_DATE_TRADING_START = new Date('2025-08-01');
export const PENUMBRA_PRICE_BEFORE_TRADING_START = 0.0;

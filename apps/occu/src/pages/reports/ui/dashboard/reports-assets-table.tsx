import { TableCell } from '@penumbra-zone/ui/TableCell';
import { Card } from '@penumbra-zone/ui/Card';
import { Text } from '@penumbra-zone/ui/Text';

import { Density } from '@penumbra-zone/ui/Density';
import { Skeleton } from '@/shared/ui/skeleton';
// import { ValueViewComponent } from '@penumbra-zone/ui/ValueView';

import { observer } from 'mobx-react-lite';
// import { useUnifiedAssets } from '../../api/use-unified-assets.ts';
import { useTaxReports } from '../report.tsx';
import { NoData } from '../no-data.tsx';
import { InventoryLot } from '@/calculate-tax/common.ts';
import { TaxReportData } from '@/calculate-tax/fifo.ts';
import { useHistoricAssetPrices } from '../../api/use-historic-prices.ts';
import { TokenPriceList } from '@/shared/api/server/price-history/assets.ts';
import { TrendingDown, TrendingUp } from 'lucide-react';

const LoadingState = () => {
  return (
    <Card>
      <div className='p-3'>
        <Text as={'h4'} large color='text.primary'>
          Asset Holdings
        </Text>

        <Density compact>
          <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] overflow-y-auto overflow-x-auto'>
            <TableCell heading>Asset</TableCell>
            <TableCell heading>Holdings</TableCell>
            <TableCell heading>Market Value (USD)</TableCell>
            <TableCell heading>Cost Basis (USD)</TableCell>
            <TableCell heading>PnL (unrealized)</TableCell>

            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='grid grid-cols-subgrid col-span-6'>
                <TableCell loading>
                  <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 rounded-full overflow-hidden'>
                      <Skeleton />
                    </div>
                    <div className='w-20 h-5'>
                      <Skeleton />
                    </div>
                  </div>
                </TableCell>
                <TableCell loading>
                  <div className='w-24 h-5'>
                    <Skeleton />
                  </div>
                </TableCell>
                <TableCell loading>
                  <div className='w-24 h-5'>
                    <Skeleton />
                  </div>
                </TableCell>
                <TableCell loading>
                  <div className='w-24 h-5'>
                    <Skeleton />
                  </div>
                </TableCell>
                <TableCell loading>
                  <div className='w-24 h-5'>
                    <Skeleton />
                  </div>
                </TableCell>
              </div>
            ))}
          </div>
        </Density>
      </div>
    </Card>
  );
};

const ReportInventoryRow = observer(
  ({
    symbol,
    end_balance,
    market_value,
    cost_basis,
    pnl,
    isLastRow,
  }: {
    symbol: string;
    end_balance: number;
    market_value: number;
    cost_basis: number;
    pnl: number;
    isLastRow: boolean;
  }) => {
    const variant = isLastRow ? 'lastCell' : 'cell';

    return (
      <div className='grid grid-cols-subgrid col-span-5'>
        <TableCell variant={variant}>
          <div className='flex items-center'>
            {symbol ? (
              <Text variant={'smallTechnical'} color='text.secondary'>
                {symbol}
              </Text>
            ) : (
              <Text variant={'smallTechnical'} color='text.secondary'>
                -
              </Text>
            )}
          </div>
        </TableCell>
        <TableCell variant={variant}>
          <Text variant={'smallTechnical'} color='text.secondary'>
            {end_balance !== 0 ? end_balance.toFixed(2) : '-'}
          </Text>
        </TableCell>
        <TableCell variant={variant}>
          {market_value > 0 ? (
            <Text variant={'smallTechnical'} color='text.secondary'>
              {market_value.toFixed(2)}
            </Text>
          ) : (
            <Text variant={'smallTechnical'} color='text.secondary'>
              -
            </Text>
          )}
        </TableCell>
        <TableCell variant={variant}>
          {cost_basis > 0 ? (
            <Text variant={'smallTechnical'} color='text.secondary'>
              {cost_basis.toFixed(2)}
            </Text>
          ) : (
            <Text variant={'smallTechnical'} color='text.secondary'>
              -
            </Text>
          )}
        </TableCell>
        <TableCell variant={variant}>
          {pnl !== 0 ? (
            <div className='flex items-center gap-2'>
              <Text
                variant={'smallTechnical'}
                color={pnl > 0 ? 'success.light' : 'destructive.light'}
              >
                {pnl.toFixed(2)}
              </Text>
              {pnl > 0 ? (
                <TrendingUp className='w-4 h-4 text-success-light' />
              ) : (
                <TrendingDown className='w-4 h-4 text-destructive-light' />
              )}
            </div>
          ) : (
            <Text variant={'smallTechnical'} color='text.secondary'>
              -
            </Text>
          )}
        </TableCell>
      </div>
    );
  },
);

interface InventorySummary {
  symbol: string;
  end_balance: number;
  market_value: number;
  cost_basis: number;
  pnl: number;
}

// creates a summary of asset balance changes over the period for each asset that was traded
// PnL is calculated as: market value (end of period) - cost basis
// if the period is in the current year, the market value is the historic price for current date
const summarizeAssets = (
  year: string,
  report: TaxReportData,
  getPrice: (asset: string, date: string) => number,
) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const last_day_period =
    year === currentYear.toString()
      ? (currentDate.toISOString().split('T')[0] ?? `${currentDate.getFullYear()}-12-31`)
      : `${year}-12-31`;

  const inventory: Record<string, InventoryLot[]> = report.inventory;

  const summaries: InventorySummary[] = [];

  for (const asset in inventory) {
    const summary: InventorySummary = {
      symbol: asset,
      end_balance: 0,
      market_value: 0,
      cost_basis: 0,
      pnl: 0,
    };
    const lots = inventory[asset];
    if (lots) {
      const end_price = getPrice(asset, last_day_period);
      summary.end_balance = lots.reduce((acc, lot) => acc + lot.amount, 0);
      summary.cost_basis = lots.reduce((acc, lot) => acc + lot.amount * lot.price, 0);
      summary.pnl = end_price * summary.end_balance - summary.cost_basis;
      summary.market_value = end_price * summary.end_balance;
    }

    summaries.push(summary);
  }
  return summaries;
};

const getTradedAssets = (report?: TaxReportData) => {
  if (!report) {
    return [];
  }
  const inventory: Record<string, InventoryLot[]> = report.inventory;
  return Object.keys(inventory);
};

export const ReportsAssetsTable = observer(({ year }: { year: string }) => {
  const { reports, isLoading } = useTaxReports();
  const { prices, isLoading: isPricesLoading } = useHistoricAssetPrices(
    getTradedAssets(reports[year]?.report),
    {
      enabled: reports[year] && getTradedAssets(reports[year].report).length > 0,
    },
  );

  // @ts-ignore - prices type is complex and needs refinement
  const getPrice = (asset: string, date: string) => {
    if (isPricesLoading) {
      return 0;
    }
    // @ts-ignore - assetData type needs refinement
    const assetData: TokenPriceList = prices[asset] as TokenPriceList;
    // @ts-ignore - optional chaining is actually needed here
    return assetData.prices[date] ?? 0;
  };

  if (Object.keys(reports).length === 0) {
    return <NoData label='No reports found' />;
  }

  const report = reports[year];
  if (!report) {
    return <NoData label='No report found' />;
  }

  const summaries = summarizeAssets(report.year.toString(), report.report, getPrice);

  return (
    <Card>
      <div className='p-3'>
        <div className={'flex flex-col justify-between mb-4'}>
          <Text as={'h4'} xxl color='text.primary'>
            Holdings
          </Text>
          <Text variant={'detail'} color='text.secondary' as={'p'}>
            Asset balances at the end of the period.
          </Text>
        </div>

        <Density compact>
          <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] overflow-y-auto overflow-x-auto'>
            <TableCell heading>Asset</TableCell>
            <TableCell heading>Holdings</TableCell>
            <TableCell heading>Market Value (USD)</TableCell>
            <TableCell heading>Cost Basis (USD)</TableCell>
            <TableCell heading>PnL (unrealized)</TableCell>

            {isLoading ? (
              <LoadingState />
            ) : (
              summaries.map((asset, index) => (
                <ReportInventoryRow
                  key={asset.symbol}
                  symbol={asset.symbol}
                  end_balance={asset.end_balance}
                  market_value={asset.market_value}
                  cost_basis={asset.cost_basis}
                  pnl={asset.pnl}
                  isLastRow={index === summaries.length - 1}
                />
              ))
            )}
          </div>
        </Density>
      </div>
    </Card>
  );
});

import { TaxTransactionEvent } from '@/calculate-tax/common';
import { Button } from '@penumbra-zone/ui/Button';

import { TableCell } from '@penumbra-zone/ui/TableCell';
import { Text } from '@penumbra-zone/ui/Text';
import { Density } from '@penumbra-zone/ui/Density';
import { Pill } from '@penumbra-zone/ui/Pill';

import { useGetMetadata } from '@/shared/api/assets';
import { observer } from 'mobx-react-lite';
import {
  updateTxType,
  useTaxClassifiedTransactionsWithLocalStorage,
} from '../api/use-tax-classified-transactions';
import { Card } from '@penumbra-zone/ui/Card';
import Link from 'next/link';
import { EllipsisVertical, FileSearch } from 'lucide-react';
import { DropdownMenu } from '@penumbra-zone/ui/DropdownMenu';
import { useUnifiedAssets } from '../api/use-unified-assets';
import { TaxSettings, useTaxSettings } from './report-settings';
import { YEAR_BLOCK_INTERVALS } from '@/calculate-tax/constants';
import { queryClient } from '@/shared/const/queryClient';
import { useMemo } from 'react';
import { useHistoricAssetPrices } from '../api/use-historic-prices';
import { calculateFifo, TaxReportData } from '@/calculate-tax/fifo';
import { TokenPriceList } from '@/shared/api/server/price-history/assets';
export interface TaxableTxEventSummaryProps {
  event: TaxTransactionEvent;
  isLastRow: boolean;
  onClick?: VoidFunction;
}

export interface LocalStorageTaxReportData {
  year: number | string;
  report: TaxReportData;
  settings: TaxSettings;
}

const EventTypePill = ({ type }: { type: string }) => {
  switch (type) {
    case 'income':
      return (
        <Pill priority='primary' context='technical-success'>
          {type}
        </Pill>
      );
    case 'disposal':
      return (
        <Pill priority='primary' context='technical-destructive'>
          {type}
        </Pill>
      );
    default:
      return (
        <Pill priority='primary' context='default'>
          {type}
        </Pill>
      );
  }
};

const EventRow = ({ event, isLastRow }: TaxableTxEventSummaryProps) => {
  const variant = isLastRow ? 'lastCell' : 'cell';

  const handleSetType = async (type: string) => {
    if (!event.tx_hash) {
      return;
    }
    updateTxType(event.tx_hash, type);
    // Add await to handle the Promise
    await queryClient.invalidateQueries({ queryKey: ['txs'] });
  };

  return (
    <div className='grid grid-cols-subgrid col-span-8 transition-colors hover:bg-action-hoverOverlay'>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.height}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        {event.date ? (
          <Text variant={'smallTechnical'} color='text.secondary'>
            {typeof event.date === 'string' ? event.date : event.date.toISOString().split('T')[0]}
          </Text>
        ) : (
          '-'
        )}
      </TableCell>
      <TableCell variant={variant}>
        <div className='flex flex-col'>
          <EventTypePill type={event.type} />
        </div>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.label}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.amount_in ? `${event.amount_in} ${event.asset_in}` : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.amount_out ? `${event.amount_out} ${event.asset_out}` : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.fee_amount ? `${event.fee_amount} UM` : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <DropdownMenu>
          <DropdownMenu.Trigger>
            <Button iconOnly icon={EllipsisVertical}>
              Actions
            </Button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content side='bottom' align='start'>
            <DropdownMenu.Item actionType='accent' onSelect={() => void handleSetType('disposal')}>
              Set Disposal
            </DropdownMenu.Item>
            <DropdownMenu.Item actionType='success' onSelect={() => void handleSetType('income')}>
              Set Income
            </DropdownMenu.Item>
            <DropdownMenu.Item actionType='unshield' onSelect={() => void handleSetType('expense')}>
              Set Expense
            </DropdownMenu.Item>
            <DropdownMenu.Item
              actionType='unshield'
              onSelect={() => void handleSetType('rebalance')}
            >
              Set Rebalance
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
        <Link href={`/inspect/tx/${event.tx_hash}`} className='inline-flex items-center gap-2'>
          <Button iconOnly icon={FileSearch}>
            Open Tx Details
          </Button>
        </Link>
      </TableCell>
    </div>
  );
};

export const EventsTable = observer(() => {
  const { isPenumbraConnected, isLoading } = useUnifiedAssets();
  const { settings } = useTaxSettings();
  const year_interval = YEAR_BLOCK_INTERVALS[settings.year];

  const getMetadata = useGetMetadata();
  const { data: transactions } = useTaxClassifiedTransactionsWithLocalStorage(0, getMetadata, {
    enabled: isPenumbraConnected && !isLoading,
    fetchBlocks: true,
    ...(year_interval && {
      startHeight: year_interval.start,
      endHeight: year_interval.end,
    }),
  });

  // Collect unique assets from transactions
  const uniqueAssets = useMemo(() => {
    if (!transactions?.pages) {
      return [];
    }

    const assetSet = new Set<string>();

    transactions.pages.forEach(page => {
      page.forEach(tx => {
        if (tx.asset_in) {
          assetSet.add(tx.asset_in);
        }
        if (tx.asset_out) {
          assetSet.add(tx.asset_out);
        }
      });
    });

    return Array.from(assetSet);
  }, [transactions]);

  // Fetch historic prices for all unique assets
  const { prices, isLoading: isPricesLoading } = useHistoricAssetPrices(uniqueAssets, {
    enabled: transactions && transactions.pages.length > 0 && uniqueAssets.length > 0,
  });

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

  const onGenerateReport = () => {
    const txs = transactions?.pages.flat();
    if (!txs) {
      return;
    }
    const result = calculateFifo(txs, {}, getPrice);

    const localReportsData = localStorage.getItem('tax-reports-by-year');
    const localReports: Record<string, LocalStorageTaxReportData> | null = localReportsData
      ? (JSON.parse(localReportsData) as Record<string, LocalStorageTaxReportData>)
      : {};

    localReports[settings.year.toString()] = {
      year: settings.year,
      report: result,
      settings,
    };

    // Store back in localStorage
    localStorage.setItem('tax-reports-by-year', JSON.stringify(localReports));
  };

  return (
    <Card>
      <div className='p-3'>
        <div className={'flex justify-between mb-4'}>
          <div className='flex flex-col w-2/3'>
            <Text as={'h4'} xxl color='text.primary'>
              Tax Events
            </Text>
            <Text variant={'detail'} color='text.secondary' as={'p'}>
              Transactions are automatically classified based on the transaction type. You can
              manually override the classification for any transaction if the default classification
              does not match the actual transaction type or the intent of the transaction.<br></br>
              Proceed with report generation after reviewing the transactions.
            </Text>
          </div>
          <div className='flex gap-2'>
            <Button density='compact' onClick={onGenerateReport}>
              Generate Report
            </Button>
            {/* <Button density='compact'>Export CSV</Button> */}
          </div>
        </div>
        <Density compact>
          <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_auto] overflow-y-auto overflow-x-auto'>
            <TableCell heading>Height</TableCell>
            <TableCell heading>Date</TableCell>
            <TableCell heading>Tax Type</TableCell>
            <TableCell heading>Tx Type</TableCell>
            <TableCell heading>Amount In</TableCell>
            <TableCell heading>Amount Out</TableCell>
            <TableCell heading>Fee Amount</TableCell>
            {/* empty cell for actions */}
            <TableCell> </TableCell>

            {isLoading && isPricesLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div className='grid grid-cols-subgrid col-span-8' key={index}>
                    <TableCell loading>&nbsp;</TableCell>
                    <TableCell loading>&nbsp;</TableCell>
                    <TableCell loading>&nbsp;</TableCell>
                    <TableCell loading>&nbsp;</TableCell>
                    <TableCell loading>&nbsp;</TableCell>
                    <TableCell loading>&nbsp;</TableCell>
                    <TableCell loading>&nbsp;</TableCell>
                    <TableCell loading>&nbsp;</TableCell>
                  </div>
                ))
              : transactions?.pages.map(page =>
                  page.map((tx, index) => (
                    <EventRow
                      key={`${tx.tx_hash}-${index}`}
                      event={tx}
                      isLastRow={index === page.length - 1}
                    />
                  )),
                )}
          </div>
        </Density>
      </div>
    </Card>
  );
});

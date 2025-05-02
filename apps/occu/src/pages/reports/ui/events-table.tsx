import { TaxTransactionEvent } from '@/calculate-tax/common';
import { Button } from '@penumbra-zone/ui/Button';

import { TableCell } from '@penumbra-zone/ui/TableCell';
import { Text } from '@penumbra-zone/ui/Text';
import { Density } from '@penumbra-zone/ui/Density';
import { Pill } from '@penumbra-zone/ui/Pill';

import { useGetMetadata } from '@/shared/api/assets';
import { observer } from 'mobx-react-lite';
import { useTaxClassifiedTransactionsWithLocalStorage } from '../api/use-tax-classified-transactions';
import { Card } from '@penumbra-zone/ui/Card';
import Link from 'next/link';
import { EllipsisVertical, FileSearch } from 'lucide-react';
import { DropdownMenu } from '@penumbra-zone/ui/DropdownMenu';
import { useUnifiedAssets } from '../api/use-unified-assets';
import { useTaxSettings } from './report-settings';
import { YEAR_BLOCK_INTERVALS } from '@/calculate-tax/constants';

export interface TaxableTxEventSummaryProps {
  event: TaxTransactionEvent;
  isLastRow: boolean;
  onClick?: VoidFunction;
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

  return (
    <div className='grid grid-cols-subgrid col-span-9 transition-colors hover:bg-action-hoverOverlay'>
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
        <Text variant={'smallTechnical'} color='text.secondary'>
          -
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
            <DropdownMenu.Item actionType='accent'>Set Disposal</DropdownMenu.Item>
            <DropdownMenu.Item actionType='success'>Set Income</DropdownMenu.Item>
            <DropdownMenu.Item actionType='unshield'>Set Expense</DropdownMenu.Item>
            <DropdownMenu.Item actionType='unshield'>Set Rebalance</DropdownMenu.Item>
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

  return (
    <Card>
      <div className='p-3'>
        <div className={'flex justify-between mb-4'}>
          <Text as={'h4'} xxl color='text.primary'>
            Tax Events
          </Text>
          <div className='flex gap-2'>
            <Button density='compact'>Export PDF</Button>
            <Button density='compact'>Export CSV</Button>
          </div>
        </div>
        <Density compact>
          <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_auto] overflow-y-auto overflow-x-auto'>
            <TableCell heading>Height</TableCell>
            <TableCell heading>Date</TableCell>
            <TableCell heading>Tax Type</TableCell>
            <TableCell heading>Tx Type</TableCell>
            <TableCell heading>Amount In</TableCell>
            <TableCell heading>Amount Out</TableCell>
            <TableCell heading>Fee Amount</TableCell>
            <TableCell heading>Cost Basis</TableCell>
            {/* empty cell for actions */}
            <TableCell> </TableCell>

            {transactions?.pages.map(page =>
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

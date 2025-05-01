import { ReactNode } from 'react';

import { TaxTransactionEvent } from '@/fifo/common';
import { Button } from '@penumbra-zone/ui/Button';

import { TableCell } from '@penumbra-zone/ui/TableCell';
import { Text } from '@penumbra-zone/ui/Text';
import { Density } from '@penumbra-zone/ui/Density';
import { Pill } from '@penumbra-zone/ui/Pill';

import { useGetMetadata } from '@/shared/api/assets';
import { observer } from 'mobx-react-lite';
import { useTaxClassifiedTransactions } from '../api/use-tax-classified-transactions';
import { Card } from '@penumbra-zone/ui/Card';
import Link from 'next/link';
import { FileSearch } from 'lucide-react';

export interface TaxableTxEventSummaryProps {
  /** TransactionInfo protobuf message, needs `view` and `summary` fields filled to function correctly */
  event: TaxTransactionEvent;
  isLastRow: boolean;
  onClick?: VoidFunction;
  /** Markup to render on the right side of the component */
  endAdornment?: ReactNode;
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
    <div className='grid grid-cols-subgrid col-span-8'>
      <TableCell variant={variant}>
        <div className='flex items-center'>
          <Text variant={'smallTechnical'} color='text.secondary'>
            {event.height}
          </Text>
        </div>
      </TableCell>
      <TableCell variant={variant}>
        <div className='flex flex-col'>
          <EventTypePill type={event.type} />
          {/* <Text variant={'smallTechnical'} color='text.secondary'> */}
          {/* {event.type} */}
          {/* </Text> */}
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
        <Link href={`/inspect/tx/${event.tx_hash}`}>
          <Button actionType='accent' density='compact' iconOnly icon={FileSearch}>
            Go to transaction details
          </Button>
        </Link>
      </TableCell>
    </div>
  );
};

export const EventsTable = observer(() => {
  const getMetadata = useGetMetadata();
  const { data: transactions } = useTaxClassifiedTransactions(0, getMetadata);
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
      </div>
      <Density compact>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] overflow-y-auto overflow-x-auto'>
          <TableCell heading>Height</TableCell>
          <TableCell heading>Event Type</TableCell>
          <TableCell heading>Tx Type</TableCell>
          <TableCell heading>Amount In</TableCell>
          <TableCell heading>Amount Out</TableCell>
          <TableCell heading>Fee Amount</TableCell>
          <TableCell heading>Cost Basis</TableCell>
          <TableCell heading>Actions</TableCell>

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
    </Card>
  );
});

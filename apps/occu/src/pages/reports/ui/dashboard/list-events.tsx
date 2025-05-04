import { observer } from 'mobx-react-lite';

import { Disposal, Income } from '@/calculate-tax/common';
import { NoData } from '../no-data';
import { TableCell } from '@penumbra-zone/ui/TableCell';
import { Text } from '@penumbra-zone/ui/Text';
import { Density } from '@penumbra-zone/ui/Density';
import { Button } from '@penumbra-zone/ui/Button';
import { ArrowUpDown, FileDown, FileSpreadsheet } from 'lucide-react';
import { useState } from 'react';

interface IncomeRowProps {
  event: Income;
  isLastRow: boolean;
}

interface DisposalRowProps {
  event: Disposal;
  isLastRow: boolean;
}

interface ExpenseRowProps {
  event: Disposal;
  isLastRow: boolean;
}

export const IncomeRow = ({ event, isLastRow }: IncomeRowProps) => {
  const variant = isLastRow ? 'lastCell' : 'cell';

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
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.label}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.asset}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.amount ? event.amount : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.price ? event.price : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.price && event.amount ? (event.price * event.amount).toFixed(2) : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.tx_hash ? event.tx_hash : '-'}
        </Text>
      </TableCell>
    </div>
  );
};

export const DisposalRow = ({ event, isLastRow }: DisposalRowProps) => {
  const variant = isLastRow ? 'lastCell' : 'cell';

  return (
    <div className='grid grid-cols-subgrid col-span-10 transition-colors hover:bg-action-hoverOverlay'>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.height}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        {event.date_acquired ? (
          <Text variant={'smallTechnical'} color='text.secondary'>
            {typeof event.date_acquired === 'string'
              ? event.date_acquired
              : event.date_acquired.toISOString().split('T')[0]}
          </Text>
        ) : (
          '-'
        )}
      </TableCell>
      <TableCell variant={variant}>
        {event.date_sold ? (
          <Text variant={'smallTechnical'} color='text.secondary'>
            {typeof event.date_sold === 'string'
              ? event.date_sold
              : event.date_sold.toISOString().split('T')[0]}
          </Text>
        ) : (
          '-'
        )}
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.label}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.amount ? event.amount : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.asset}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.price_acquired ? event.price_acquired : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.price_disposed ? event.price_disposed : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.pnl ? event.pnl : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.tx_hash ? event.tx_hash : '-'}
        </Text>
      </TableCell>
    </div>
  );
};

export const ExpenseRow = ({ event, isLastRow }: ExpenseRowProps) => {
  const variant = isLastRow ? 'lastCell' : 'cell';

  return (
    <div className='grid grid-cols-subgrid col-span-10 transition-colors hover:bg-action-hoverOverlay'>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.height}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        {event.date_acquired ? (
          <Text variant={'smallTechnical'} color='text.secondary'>
            {typeof event.date_acquired === 'string'
              ? event.date_acquired
              : event.date_acquired.toISOString().split('T')[0]}
          </Text>
        ) : (
          '-'
        )}
      </TableCell>
      <TableCell variant={variant}>
        {event.date_sold ? (
          <Text variant={'smallTechnical'} color='text.secondary'>
            {typeof event.date_sold === 'string'
              ? event.date_sold
              : event.date_sold.toISOString().split('T')[0]}
          </Text>
        ) : (
          '-'
        )}
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.label}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.amount ? event.amount : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.asset}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.price_acquired ? event.price_acquired : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.price_disposed ? event.price_disposed : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.pnl ? event.pnl : '-'}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {event.tx_hash ? event.tx_hash : '-'}
        </Text>
      </TableCell>
    </div>
  );
};

// All transactions, regardless of their tax classification
export const IncomeTable = observer(({ events }: { events: Income[] }) => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSortToggle = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
  };

  return (
    <div className='flex flex-col gap-4' style={{ overflowAnchor: 'none' }}>
      {events.length === 0 && <NoData label='You have no tax events of this type' />}

      <Density compact>
        <div className='flex justify-between'>
          <Button icon={ArrowUpDown} onClick={handleSortToggle}>
            Sort {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
          </Button>
          <div className='flex gap-2'>
            <Button icon={FileDown}>Download PDF</Button>
            <Button icon={FileSpreadsheet}>Download CSV</Button>
          </div>
        </div>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] overflow-y-auto overflow-x-auto'>
          <TableCell heading>Height</TableCell>
          <TableCell heading>Date</TableCell>
          <TableCell heading>Label</TableCell>
          <TableCell heading>Asset</TableCell>
          <TableCell heading>Amount</TableCell>
          <TableCell heading>Price</TableCell>
          <TableCell heading>Cost Basis</TableCell>
          <TableCell heading>Tx Hash</TableCell>

          {events.length === 0 && <NoData label='You have no tax events of this type' />}

          {events.map((event, index) => (
            <IncomeRow
              key={`${event.tx_hash}-${index}`}
              event={event}
              isLastRow={index === events.length - 1}
            />
          ))}
        </div>
      </Density>
    </div>
  );
});

export const DisposalTable = observer(({ events }: { events: Disposal[] }) => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSortToggle = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
  };

  return (
    <div className='flex flex-col gap-4' style={{ overflowAnchor: 'none' }}>
      {events.length === 0 && <NoData label='You have no tax events of this type' />}
      <Density compact>
        <div className='flex justify-between'>
          <Button icon={ArrowUpDown} onClick={handleSortToggle}>
            Sort {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
          </Button>
          <div className='flex gap-2'>
            <Button icon={FileDown}>Download PDF</Button>
            <Button icon={FileSpreadsheet}>Download CSV</Button>
          </div>
        </div>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] overflow-y-auto overflow-x-auto'>
          <TableCell heading>Height</TableCell>
          <TableCell heading>Date Acquired</TableCell>
          <TableCell heading>Date Sold</TableCell>
          <TableCell heading>Label</TableCell>
          <TableCell heading>Amount</TableCell>
          <TableCell heading>Asset</TableCell>
          <TableCell heading>Price Acquired</TableCell>
          <TableCell heading>Price Sold</TableCell>
          <TableCell heading>PnL</TableCell>
          <TableCell heading>Tx Hash</TableCell>

          {events.length === 0 && <NoData label='You have no tax events of this type' />}

          {events.map((event, index) => (
            <DisposalRow
              key={`${event.tx_hash}-${index}`}
              event={event}
              isLastRow={index === events.length - 1}
            />
          ))}
        </div>
      </Density>
    </div>
  );
});

export const ExpenseTable = observer(({ events }: { events: Disposal[] }) => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const handleSortToggle = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
  };

  return (
    <div className='flex flex-col gap-4' style={{ overflowAnchor: 'none' }}>
      {events.length === 0 && <NoData label='You have no tax events of this type' />}
      <Density compact>
        <div className='flex justify-between'>
          <Button icon={ArrowUpDown} onClick={handleSortToggle}>
            Sort {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
          </Button>
          <div className='flex gap-2'>
            <Button icon={FileDown}>Download PDF</Button>
            <Button icon={FileSpreadsheet}>Download CSV</Button>
          </div>
        </div>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] overflow-y-auto overflow-x-auto'>
          <TableCell heading>Height</TableCell>
          <TableCell heading>Date Acquired</TableCell>
          <TableCell heading>Date Sold</TableCell>
          <TableCell heading>Label</TableCell>
          <TableCell heading>Amount</TableCell>
          <TableCell heading>Asset</TableCell>
          <TableCell heading>Price Acquired</TableCell>
          <TableCell heading>Price Sold</TableCell>
          <TableCell heading>PnL</TableCell>
          <TableCell heading>Tx Hash</TableCell>

          {events.length === 0 && <NoData label='You have no tax events of this type' />}

          {events.map((event, index) => (
            <ExpenseRow
              key={`${event.tx_hash}-${index}`}
              event={event}
              isLastRow={index === events.length - 1}
            />
          ))}
        </div>
      </Density>
    </div>
  );
});

import { useState } from 'react';
import { Card } from '@penumbra-zone/ui/Card';
import { Tabs } from '@penumbra-zone/ui/Tabs';
import { Density } from '@penumbra-zone/ui/Density';
import {
  AllTransactions,
  DisposalsTransactions,
  ExpensesTransactions,
  IncomeTransactions,
} from './transactions';

enum OverviewTab {
  Transactions = 'All Transactions',
  Income = 'Income',
  Expenses = 'Expenses',
  Disposals = 'Disposals',
}

export const OverviewTabs = () => {
  const [tab, setTab] = useState(OverviewTab.Transactions);

  return (
    <Card>
      <div className='p-3'>
        <div className='w-full mb-4 border-b border-b-other-tonalStroke'>
          <Density compact>
            <Tabs
              value={tab}
              actionType='accent'
              onChange={value => setTab(value as OverviewTab)}
              options={[
                { value: OverviewTab.Transactions, label: OverviewTab.Transactions },
                { value: OverviewTab.Income, label: OverviewTab.Income },
                { value: OverviewTab.Expenses, label: OverviewTab.Expenses },
                { value: OverviewTab.Disposals, label: OverviewTab.Disposals },
              ]}
            />
          </Density>
        </div>

        {tab === OverviewTab.Transactions && <AllTransactions />}
        {tab === OverviewTab.Income && <IncomeTransactions />}
        {tab === OverviewTab.Disposals && <DisposalsTransactions />}
        {tab === OverviewTab.Expenses && <ExpensesTransactions />}
      </div>
    </Card>
  );
};

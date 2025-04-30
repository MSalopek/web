import { useState } from 'react';
import { Card } from '@penumbra-zone/ui/Card';
import { Tabs } from '@penumbra-zone/ui/Tabs';
import { Density } from '@penumbra-zone/ui/Density';
import { PortfolioTransactions } from './transactions';

enum PortfolioTab {
  History = 'History',
}

export const PortfolioPositionTabs = () => {
  const [tab, setTab] = useState(PortfolioTab.History);

  return (
    <Card>
      <div className='p-3'>
        <div className='w-full mb-4 border-b border-b-other-tonalStroke'>
          <Density compact>
            <Tabs
              value={tab}
              actionType='accent'
              onChange={value => setTab(value as PortfolioTab)}
              options={[{ value: PortfolioTab.History, label: PortfolioTab.History }]}
            />
          </Density>
        </div>

        {/* {tab === PortfolioTab.History && <PortfolioTransactions />} */}
        <PortfolioTransactions />
      </div>
    </Card>
  );
};

'use client';

import { ReportsAssetsTable } from './reports-assets-table';

export const DashboardPage = ({ year }: { year: string }) => {
  return (
    <div className='sm:container mx-auto py-8 flex flex-col gap-4'>
      <ReportsAssetsTable year={year} />
    </div>
  );
};

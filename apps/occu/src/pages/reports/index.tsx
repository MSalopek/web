'use client';

import React from 'react';
import { observer } from 'mobx-react-lite';
import { XCircle } from 'lucide-react';
import { Button } from '@penumbra-zone/ui/Button';
import { Text } from '@penumbra-zone/ui/Text';
import { Density } from '@penumbra-zone/ui/Density';
import { useRegistry } from '@/shared/api/registry.ts';
import { IbcChainProvider } from '@/features/cosmos/chain-provider.tsx';
import { ReportSettings } from './ui/report-settings';
import { AssetsTable } from './ui/assets-table';
import { useUnifiedAssets } from './api/use-unified-assets';
import { EventsTable } from './ui/events-table';

interface ReportsPageProps {
  isMobile: boolean;
}

export const ReportsPage = ({ isMobile }: ReportsPageProps): React.ReactNode => {
  const { data } = useRegistry();
  if (isMobile) {
    return <MobileReportsPage />;
  }

  return data ? (
    <IbcChainProvider registry={data}>
      <DesktopReportsPage />
    </IbcChainProvider>
  ) : null;
};

function MobileReportsPage() {
  return (
    <section className='absolute inset-0 h-screen flex flex-col items-center justify-between p-4 gap-3 border-t border-neutral-800'>
      <div className='flex flex-col justify-center items-center p-0 gap-4 w-full flex-grow'>
        <div className='relative'>
          <XCircle className='text-neutral-light w-8 h-8' />
        </div>

        <Text color={'text.secondary'} align={'center'} small={true}>
          This page requires a connection to your wallet, please switch to a desktop device.
        </Text>

        <Density compact={true}>
          {/* Copy Link Button */}
          <Button
            onClick={() => {
              // We discard the promise using void,
              // because Button only expects void-returning functions.
              void (async () => {
                /* Write the current url to clipboard */
                const currentUrl = window.location.href;
                await navigator.clipboard.writeText(currentUrl);
              })();
            }}
          >
            Copy Link
          </Button>
        </Density>
      </div>

      <Button>
        <Text body>Go Back</Text>
      </Button>
    </section>
  );
}

const DesktopReportsPage = observer(() => {
  const { isPenumbraConnected } = useUnifiedAssets();

  return (
    <div className='sm:container mx-auto py-8 flex flex-col gap-4'>
      <ReportSettings />
      {isPenumbraConnected && (
        <>
          <AssetsTable />
          <EventsTable />
        </>
      )}
    </div>
  );
});

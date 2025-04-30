'use client';

import React from 'react';
import { observer } from 'mobx-react-lite';
import { XCircle } from 'lucide-react';
import { Button } from '@penumbra-zone/ui/Button';
import { Text } from '@penumbra-zone/ui/Text';
import { Density } from '@penumbra-zone/ui/Density';
import { WalletConnect } from './ui/wallet-connect';
import { useRegistry } from '@/shared/api/registry.ts';
import { IbcChainProvider } from '@/features/cosmos/chain-provider.tsx';
import { OverviewTabs } from './ui/overview-tabs';
import { useUnifiedAssets } from './api/use-unified-assets';
import { AssetsTable } from './ui/assets-table';
import { AssetBars } from './ui/asset-bars';

interface OverviewPageProps {
  isMobile: boolean;
}

export const OverviewPage = ({ isMobile }: OverviewPageProps): React.ReactNode => {
  const { data } = useRegistry();
  if (isMobile) {
    return <MobileOverviewPage />;
  }

  return data ? (
    <IbcChainProvider registry={data}>
      <DesktopOverviewPage />
    </IbcChainProvider>
  ) : null;
};

function MobileOverviewPage() {
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

const DesktopOverviewPage = observer(() => {
  const { isPenumbraConnected, isCosmosConnected } = useUnifiedAssets();

  return (
    <div className='sm:container mx-auto py-8 flex flex-col gap-4'>
      <WalletConnect />

      {/* Asset Allocation Bars */}
      {isPenumbraConnected ||
        (isCosmosConnected && (
          <div className='mb-8'>
            <AssetBars />
          </div>
        ))}

      <AssetsTable />
      <OverviewTabs />
    </div>
  );
});

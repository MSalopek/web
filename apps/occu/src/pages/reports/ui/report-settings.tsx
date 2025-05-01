import React, { useState } from 'react';
import { Text } from '@penumbra-zone/ui/Text';
import { Toggle } from '@penumbra-zone/ui/Toggle';
import { Cog, FileChartLine } from 'lucide-react';
import { ConnectButton } from '@/features/connect/connect-button';
import { observer } from 'mobx-react-lite';
import { useUnifiedAssets } from '../api/use-unified-assets.ts';
import { SegmentedControl } from '@penumbra-zone/ui/SegmentedControl';
import { TextInput } from '@penumbra-zone/ui/TextInput';
import { DropdownMenu } from '@penumbra-zone/ui/DropdownMenu';
import { Button } from '@penumbra-zone/ui/Button';

interface TaxSettings {
  year: number;
  shortRate: number;
  longRate: number;
  longDuration: '1Y' | '2Y' | '5Y' | 'None';
  incomeRate: number;
  costBasis: 'FIFO' | 'LIFO' | 'HIFO' | 'ACB';
  feesAreCapitalGains: boolean;
  ibcWithdrawalAsDisposal: boolean;
  ibcReceiveAsIncome: boolean;
}

// Add this custom hook
export const useTaxSettings = () => {
  const [settings, setSettings] = useState<TaxSettings>(() => {
    const stored = localStorage.getItem('occu-tax-settings');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as TaxSettings;
        // Validate the parsed data has the correct shape
        if (
          typeof parsed === 'object' &&
          typeof parsed.year === 'number' &&
          typeof parsed.shortRate === 'number' &&
          typeof parsed.longRate === 'number' &&
          typeof parsed.longDuration === 'string' &&
          typeof parsed.incomeRate === 'number' &&
          typeof parsed.costBasis === 'string' &&
          ['1Y', '2Y', '5Y', 'None'].includes(parsed.longDuration) &&
          ['FIFO', 'LIFO', 'HIFO', 'ACB'].includes(parsed.costBasis) &&
          typeof parsed.feesAreCapitalGains === 'boolean'
        ) {
          return parsed;
        }
      } catch (e) {
        console.error('Failed to parse tax settings:', e);
      }
    }

    const defaultSettings: TaxSettings = {
      year: 2024,
      shortRate: 12,
      longRate: 0,
      longDuration: '1Y',
      incomeRate: 24,
      costBasis: 'FIFO',
      feesAreCapitalGains: false,
      ibcWithdrawalAsDisposal: false,
      ibcReceiveAsIncome: false,
    };
    localStorage.setItem('occu-tax-settings', JSON.stringify(defaultSettings));
    return defaultSettings;
  });

  const updateSettings = (updates: Partial<TaxSettings>) => {
    setSettings(prev => {
      const newSettings = { ...prev, ...updates };
      localStorage.setItem('occu-tax-settings', JSON.stringify(newSettings));
      return newSettings;
    });
  };

  return { settings, updateSettings };
};

export const ReportSettings = observer(() => {
  const { isPenumbraConnected } = useUnifiedAssets();
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSettings } = useTaxSettings();

  return (
    <>
      {isPenumbraConnected ? (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div className='relative bg-unshieldRadialBackground rounded-2xl p-6 flex space-between'>
            <div className='absolute top-6 right-6'>
              <Cog className='text-white opacity-10 w-8 h-8' />
            </div>
            <div className='flex flex-col gap-2 h-full justify-start w-full'>
              <Text color='text.secondary'>Tax Rates Settings</Text>

              <div className='flex flex-col gap-4 w-full mt-8'>
                <div className='grid grid-cols-2 gap-2 items-center'>
                  <Text color='text.primary'>Long-term capital gains duration</Text>
                  <SegmentedControl
                    value={settings.longDuration}
                    onChange={val =>
                      updateSettings({ longDuration: val as TaxSettings['longDuration'] })
                    }
                  >
                    <SegmentedControl.Item value='1Y'>1Y</SegmentedControl.Item>
                    <SegmentedControl.Item value='2Y'>2Y</SegmentedControl.Item>
                    <SegmentedControl.Item value='5Y'>5Y</SegmentedControl.Item>
                    <SegmentedControl.Item value='None'>None</SegmentedControl.Item>
                  </SegmentedControl>
                </div>
                <div className='grid grid-cols-2 gap-2 items-center'>
                  <Text color='text.primary'>Long-term capital gains tax rate</Text>
                  <div className='flex items-center gap-2'>
                    <TextInput
                      min={0}
                      max={100}
                      value={settings.longRate.toString()}
                      onChange={value => updateSettings({ longRate: Number(value) })}
                      type='number'
                    />
                    <Text color='text.primary'>%</Text>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-2 items-center'>
                  <Text color='text.primary'>Short-term capital gains tax rate</Text>
                  <div className='flex items-center gap-2'>
                    <TextInput
                      min={0}
                      max={100}
                      value={settings.shortRate.toString()}
                      onChange={value => updateSettings({ shortRate: Number(value) })}
                      type='number'
                    />
                    <Text color='text.primary'>%</Text>
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-2 items-center'>
                  <Text color='text.primary'>Income tax rate</Text>
                  <div className='flex items-center gap-2'>
                    <TextInput
                      min={0}
                      max={100}
                      value={settings.incomeRate.toString()}
                      onChange={value => updateSettings({ incomeRate: Number(value) })}
                      type='number'
                    />
                    <Text color='text.primary'>%</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative bg-unshieldRadialBackground rounded-2xl p-6 flex space-between'>
            <div className='absolute top-6 right-6'>
              <FileChartLine className='text-white opacity-10 w-8 h-8' />
            </div>
            <div className='flex flex-col gap-2 h-full justify-start w-full'>
              <Text color='text.secondary'>Generate Tax Report</Text>

              {/* eslint-disable-next-line no-nested-ternary -- no match expression */}
              <div className='flex flex-col gap-4 w-full mt-8 justify-between h-full'>
                <div className='flex flex-col gap-4'>
                  <div className='grid grid-cols-2 gap-2 items-center'>
                    <Text color='text.primary'>Tax Year</Text>
                    <DropdownMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                      <DropdownMenu.Trigger>
                        <Button onClick={() => setIsOpen(true)}>{settings.year}</Button>
                      </DropdownMenu.Trigger>

                      <DropdownMenu.Content>
                        <DropdownMenu.CheckboxItem
                          checked={settings.year === 2024}
                          onChange={() => updateSettings({ year: 2024 })}
                        >
                          2024
                        </DropdownMenu.CheckboxItem>
                        <DropdownMenu.CheckboxItem
                          checked={settings.year === 2025}
                          onChange={() => updateSettings({ year: 2025 })}
                        >
                          2025
                        </DropdownMenu.CheckboxItem>
                      </DropdownMenu.Content>
                    </DropdownMenu>
                  </div>
                  <div className='grid grid-cols-2 gap-2 items-center'>
                    <Text color='text.primary'>Cost basis method</Text>
                    <SegmentedControl
                      value={settings.costBasis}
                      onChange={val =>
                        updateSettings({ costBasis: val as TaxSettings['costBasis'] })
                      }
                    >
                      <SegmentedControl.Item value='FIFO'>FIFO</SegmentedControl.Item>
                      <SegmentedControl.Item disabled value='LIFO'>
                        LIFO
                      </SegmentedControl.Item>
                      <SegmentedControl.Item disabled value='HIFO'>
                        HIFO
                      </SegmentedControl.Item>
                      <SegmentedControl.Item disabled value='HIFO'>
                        ACB
                      </SegmentedControl.Item>
                    </SegmentedControl>
                  </div>
                  <div className='grid grid-cols-2 gap-2 items-center'>
                    <Text color='text.primary'>Count fees as capital gains</Text>
                    <Toggle
                      label='Count fees as capital gains'
                      value={settings.feesAreCapitalGains}
                      onChange={() =>
                        updateSettings({ feesAreCapitalGains: !settings.feesAreCapitalGains })
                      }
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-2 items-center'>
                    <Text color='text.primary'>Count IBC withdrawal as disposal</Text>
                    <Toggle
                      label='Count IBC withdrawal as disposal'
                      value={settings.ibcWithdrawalAsDisposal}
                      onChange={() =>
                        updateSettings({
                          ibcWithdrawalAsDisposal: !settings.ibcWithdrawalAsDisposal,
                        })
                      }
                    />
                  </div>
                  <div className='grid grid-cols-2 gap-2 items-center'>
                    <Text color='text.primary'>Count IBC receive as income</Text>
                    <Toggle
                      label='Count IBC receive as income'
                      value={settings.ibcReceiveAsIncome}
                      onChange={() =>
                        updateSettings({ ibcReceiveAsIncome: !settings.ibcReceiveAsIncome })
                      }
                    />
                  </div>
                </div>
                <Button actionType='accent'>Load Transactions</Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='space-y-2 text-3xl w-full bg-unshieldRadialBackground rounded-2xl p-6 inline-flex items-center justify-between'>
          <div className='space-y-2 text-3xl'>
            <Text xxl color='text.primary'>
              Connect your <span className='text-primary-light'>Prax Wallet </span>to access your
              reporting settings and transactions
            </Text>
          </div>
          <div className={'w-fit'}>
            <ConnectButton actionType='accent' />
          </div>
        </div>
      )}
    </>
  );
});

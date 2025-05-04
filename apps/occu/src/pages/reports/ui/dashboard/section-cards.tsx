import { Pill } from '@penumbra-zone/ui/Pill';
import { Text } from '@penumbra-zone/ui/Text';

export interface OverViewCardProps {
  title: string;
  value: string;
  pillText: string;
  footerText?: string;
}

export function ReportOverviewCard({ title, value, pillText, footerText }: OverViewCardProps) {
  return (
    <div className='bg-unshieldRadialBackground rounded-2xl'>
      <div className='relative p-6 pb-2'>
        <Text color='text.secondary' as={'h2'}>
          {title}
        </Text>
        <Text h3 as='span' color='text.primary'>
          {value}
        </Text>
        <div className='absolute right-4 top-4'>
          <Pill context='technical-default' priority='secondary'>
            {pillText}
          </Pill>
        </div>
      </div>
      {footerText && (
        <div className='px-6 pb-4'>
          <Text p as='span' color='text.secondary'>
            {footerText}
          </Text>
        </div>
      )}
    </div>
  );
}

export function ReportCardsSection() {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <ReportOverviewCard
        title='Income'
        value='$1,250.00'
        pillText='3 Txs'
        footerText='Taxable income amount'
      />
      <ReportOverviewCard
        title='Expenses'
        value='$1,250.00'
        pillText='7 Txs'
        footerText='Deductible expenses amount'
      />
      <ReportOverviewCard
        title='Disposals'
        value='$1,250.00'
        pillText='12 Txs'
        footerText='Taxable disposals amount'
      />
      <ReportOverviewCard
        title='Fees'
        value='$12.50'
        pillText='123 Txs'
        footerText='Fees paid (deductible)'
      />
    </div>
  );
}

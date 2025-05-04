import { Pill } from '@penumbra-zone/ui/Pill';
import { Text } from '@penumbra-zone/ui/Text';

export interface OverViewCardProps {
  title: string;
  value: string;
  pillText: string;
  footerText?: string;
  currency?: string;
}

export function ReportOverviewCard({
  title,
  value,
  pillText,
  footerText,
  currency = 'USD',
}: OverViewCardProps) {
  return (
    <div className='bg-unshieldRadialBackground rounded-2xl'>
      <div className='relative p-6 pb-2'>
        <Text color='text.secondary' as={'h2'}>
          {title}
        </Text>
        <Text h3 as='span' color='text.primary'>
          {value} {currency}
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

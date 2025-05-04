import { useEffect, useMemo, useState } from 'react';
import { Button } from '@penumbra-zone/ui/Button';

import { TableCell } from '@penumbra-zone/ui/TableCell';
import { Text } from '@penumbra-zone/ui/Text';
import { Density } from '@penumbra-zone/ui/Density';

import { observer } from 'mobx-react-lite';
import { Card } from '@penumbra-zone/ui/Card';
import { Cog, ExternalLink, Trash2 } from 'lucide-react';
import { TaxSettings } from './report-settings';
import { LocalStorageTaxReportData } from './events-table';
import Link from 'next/link';

export interface ReportProps {
  year: number;
  settings: TaxSettings;
  isLastRow: boolean;
}

export const useTaxReports = () => {
  const [reports, setReports] = useState<Record<string, LocalStorageTaxReportData>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localReportsData = localStorage.getItem('tax-reports-by-year');
    if (localReportsData) {
      try {
        const parsedReports = JSON.parse(localReportsData) as Record<
          string,
          LocalStorageTaxReportData
        >;
        setReports(parsedReports);
      } catch (error) {
        console.error('Error parsing tax reports:', error);
        setReports({});
      }
    }
    setIsLoading(false);
  }, []);

  return { reports, isLoading };
};

const ReportRow = ({ year, settings, isLastRow }: ReportProps) => {
  const variant = isLastRow ? 'lastCell' : 'cell';

  const onDeleteReport = () => {
    console.log('DELETE REPORT');
  };

  return (
    <div className='grid grid-cols-subgrid col-span-8 transition-colors hover:bg-action-hoverOverlay'>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {year}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {settings.costBasis}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Text variant={'smallTechnical'} color='text.secondary'>
          {`after ${settings.longDuration.split('Y')[0]} year`}
        </Text>
      </TableCell>
      <TableCell variant={variant}>
        <Link href={`/dashboard/${year}`}>
          <Button iconOnly icon={ExternalLink} actionType='accent'>
            View Report
          </Button>
        </Link>
        <Button iconOnly icon={Cog}>
          Settings
        </Button>
        <Button iconOnly icon={Trash2} actionType='destructive' onClick={onDeleteReport}>
          Delete
        </Button>
      </TableCell>
    </div>
  );
};

export const ReportsList = observer(() => {
  // const { isLoading } = useUnifiedAssets();
  const { reports, isLoading: isReportsLoading } = useTaxReports();

  // Transform the reports object into an array for rendering
  const reportsArray = useMemo(() => {
    return Object.entries(reports).map(([year, report]) => ({
      year: parseInt(year),
      report: report.report,
      settings: report.settings,
    }));
  }, [reports]);

  return (
    <Card>
      <div className='p-3'>
        <div className={'flex justify-between mb-4'}>
          <div className='flex flex-col w-2/3'>
            <Text as={'h4'} xxl color='text.primary'>
              Tax Reports
            </Text>
            <Text variant={'detail'} color='text.secondary' as={'p'}>
              List of generated tax reports.
            </Text>
          </div>
        </div>
        <Density compact>
          <div className='grid grid-cols-[1fr_1fr_1fr_auto] overflow-y-auto overflow-x-auto'>
            <TableCell heading>Year</TableCell>
            <TableCell heading>Cost Basis</TableCell>
            <TableCell heading>Long-term</TableCell>
            {/* empty cell for actions */}
            <TableCell> </TableCell>

            {isReportsLoading
              ? Array.from({ length: 2 }).map((_, index) => (
                  <div className='grid grid-cols-subgrid col-span-3' key={index}>
                    <TableCell loading>&nbsp;</TableCell>
                    <TableCell loading>&nbsp;</TableCell>
                    <TableCell loading>&nbsp;</TableCell>
                    <TableCell loading>&nbsp;</TableCell>
                  </div>
                ))
              : reportsArray.map((entry, index) => (
                  <ReportRow
                    key={`${entry.year}-${index}`}
                    report={entry.report}
                    year={entry.year}
                    settings={entry.settings}
                    isLastRow={index === reportsArray.length - 1}
                  />
                ))}
          </div>
        </Density>
      </div>
    </Card>
  );
});

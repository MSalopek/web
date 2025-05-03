import { Button } from '@penumbra-zone/ui/Button';

import { TableCell } from '@penumbra-zone/ui/TableCell';
import { Text } from '@penumbra-zone/ui/Text';
import { Density } from '@penumbra-zone/ui/Density';

import { observer } from 'mobx-react-lite';
import { Card } from '@penumbra-zone/ui/Card';
import { Cog, FileDown, FileSpreadsheet, Printer, Trash2 } from 'lucide-react';
import { useUnifiedAssets } from '../api/use-unified-assets';
import { useEffect, useMemo, useState } from 'react';
import { TaxReportData } from '@/calculate-tax/fifo';
import { TaxSettings } from './report-settings';
import { LocalStorageTaxReportData } from './events-table';

export interface ReportProps {
  year: number;
  report: TaxReportData;
  settings: TaxSettings;
  isLastRow: boolean;
}

export const useTaxReports = () => {
  const [reports, setReports] = useState<Record<string, LocalStorageTaxReportData>>({});

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
  }, []);

  return reports;
};

const ReportRow = ({ report, year, settings, isLastRow }: ReportProps) => {
  const variant = isLastRow ? 'lastCell' : 'cell';

  const onPrintReport = () => {
    console.log('PRINT REPORT');
  };

  const onDownloadCSV = () => {
    console.log('DOWNLOAD CSV');
  };

  const onDownloadPDF = () => {
    console.log('DOWNLOAD PDF');
  };

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
        <Button iconOnly icon={FileDown} actionType='accent' onClick={onDownloadPDF}>
          Download PDF
        </Button>
        <Button iconOnly icon={FileSpreadsheet} onClick={onDownloadCSV}>
          Download CSV
        </Button>
        <Button iconOnly icon={Printer} onClick={onPrintReport}>
          Print
        </Button>
        <Button iconOnly icon={Cog} onClick={onPrintReport}>
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
  const { isLoading } = useUnifiedAssets();
  const reports = useTaxReports();

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

            {isLoading
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

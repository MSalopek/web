import { ReportsPage } from '@/pages/reports';
import { headers } from 'next/headers';
import { userAgent } from 'next/server';

export default function Reports() {
  const headersList = headers();
  const { device } = userAgent({ headers: headersList });
  return <ReportsPage isMobile={device.type === 'mobile'} />;
}

import { OverviewPage } from '@/pages/overview';
import { headers } from 'next/headers';
import { userAgent } from 'next/server';

export default function Overview() {
  const headersList = headers();
  const { device } = userAgent({ headers: headersList });
  return <OverviewPage isMobile={device.type === 'mobile'} />;
}

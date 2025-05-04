'use client';

import { DashboardPage } from '@/pages/reports/ui/dashboard/dashboard';

export default function Page({ params }: { params: { year: string } }) {
  return <DashboardPage year={params.year} />;
}

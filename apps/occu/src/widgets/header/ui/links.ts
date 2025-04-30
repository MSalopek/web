import Link from 'next/link';
import { Coins, FileText } from 'lucide-react';
import { PagePath } from '@/shared/const/pages';

export const HEADER_LINKS = [
  {
    as: Link,
    tabProps: { href: PagePath.Overview },
    label: 'Overview',
    value: PagePath.Overview,
    icon: Coins,
  },
  {
    as: Link,
    tabProps: { href: PagePath.Reports },
    label: 'Reports',
    value: PagePath.Reports,
    icon: FileText,
  },
];

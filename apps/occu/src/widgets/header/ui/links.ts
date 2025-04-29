import Link from 'next/link';
import { MoonStar, Coins, FileText } from 'lucide-react';
import { PagePath } from '@/shared/const/pages';

export const HEADER_LINKS = [
  {
    as: Link,
    tabProps: { href: PagePath.Portfolio },
    label: 'Portfolio',
    value: PagePath.Portfolio,
    icon: Coins,
  },
  {
    as: Link,
    tabProps: { href: PagePath.Reports },
    label: 'Reports',
    value: PagePath.Reports,
    icon: FileText,
  },
  {
    as: Link,
    tabProps: { href: PagePath.Inspect },
    label: 'Inspect',
    value: PagePath.Inspect,
    icon: MoonStar,
  },
];

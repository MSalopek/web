import Link from 'next/link';
import Image from 'next/image';
import { PagePath } from '@/shared/const/pages';
import OccuLogo from '../assets/occu-logo-invert.png';

export const HeaderLogo = () => {
  return (
    <Link className='flex h-8 items-center' href={PagePath.Overview}>
      <Image src={OccuLogo} width={96} height={15} alt='Occu Logo' />
    </Link>
  );
};

'use client';

import Link from 'next/link';
import { PagePath } from '@/shared/const/pages';
import { Button } from '@penumbra-zone/ui/Button';

export const GoBackLink = () => {
  return (
    <div className='w-full desktop:w-48 desktop:mt-0'>
      <Link href={PagePath.Overview}>
        <Button>Go back</Button>
      </Link>
    </div>
  );
};

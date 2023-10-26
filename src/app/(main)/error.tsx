'use client';

import cn from 'classnames';
import { useEffect } from 'react';

import { GlobalError } from '@/components';
import blocksStyles from '@/styles/variables/blocks/blocks.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={cn('page-offset', blocksStyles.flexCentered)}>
      <GlobalError />
    </main>
  );
}

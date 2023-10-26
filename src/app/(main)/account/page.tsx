import cn from 'classnames';
import type { Metadata } from 'next';

import { Profile } from '@/features';
import blocksStyles from '@/styles/variables/blocks/blocks.module.scss';
import { getMetaTitle } from '@/utils';

export const metadata: Metadata = {
  title: getMetaTitle('Профіль'),
};

export default async function Account() {
  return (
    <main className={cn('container', 'page-offset', blocksStyles.flexCentered)}>
      <Profile />
    </main>
  );
}

import cn from 'classnames';
import type { Metadata } from 'next';

import { Favorites, Profile } from '@/features';
import { getMetaTitle, metaTexts } from '@/utils';

import styles from './user-page.module.scss';

export const metadata: Metadata = {
  title: getMetaTitle(metaTexts.account),
  openGraph: {
    title: getMetaTitle(metaTexts.account),
  },
};

export default async function MyList() {
  return (
    <main className={cn('container', 'page-offset', styles.container)}>
      <Profile />

      <Favorites />
    </main>
  );
}

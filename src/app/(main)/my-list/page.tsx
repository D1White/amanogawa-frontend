import type { Metadata } from 'next';

import { Favorites } from '@/features';
import { getMetaTitle, metaTexts } from '@/utils';

import styles from './my-list.module.scss';

export const metadata: Metadata = {
  title: getMetaTitle(metaTexts.myList),
  openGraph: {
    title: getMetaTitle(metaTexts.myList),
  },
};

export default async function MyList() {
  return (
    <main className="container page-offset">
      <h1 className={styles.title}>Обране</h1>

      <Favorites />
    </main>
  );
}

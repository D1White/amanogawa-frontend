import type { Metadata } from 'next';

import { Favorites } from '@/features';
import { getMetaTitle } from '@/utils';

import styles from './my-list.module.scss';

export const metadata: Metadata = {
  title: getMetaTitle('Обране'),
};

export default async function MyList() {
  return (
    <main className="container page-offset">
      <h1 className={styles.title}>My List</h1>

      <Favorites />
    </main>
  );
}

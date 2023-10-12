import { Favorites } from '@/features';

import styles from './my-list.module.scss';

export default async function MyList() {
  return (
    <main className="container page-offset">
      <h1 className={styles.title}>My List</h1>

      <Favorites />
    </main>
  );
}

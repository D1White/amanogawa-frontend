import cn from 'classnames';
import type { Metadata } from 'next';

import { Favorites, Profile } from '@/features';
import { PageParams } from '@/types';
import { getMetaTitle, metaTexts } from '@/utils';

import styles from '../user-page.module.scss';

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const username = params?.username;
  return {
    title: getMetaTitle(username),
    openGraph: {
      title: getMetaTitle(username),
    },
  };
}

export default async function User({ params }: PageParams) {
  const username = params?.username || '';

  return (
    <main className={cn('container', 'page-offset', styles.container)}>
      <Profile username={username} />

      <Favorites />
    </main>
  );
}

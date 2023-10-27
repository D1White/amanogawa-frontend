import cn from 'classnames';
import type { Metadata } from 'next';

import { Filter } from '@/features';
import { AnimeGrid } from '@/features/anime-grid';
import { SearchParams } from '@/types';
import { getMetaTitle, metaTexts } from '@/utils';
import { getAnime } from '@/utils/api';

export const metadata: Metadata = {
  title: getMetaTitle(metaTexts.anime),
  openGraph: {
    title: getMetaTitle(metaTexts.anime),
  },
};

export default async function AllAnime({ searchParams }: SearchParams) {
  const anime = await getAnime(searchParams);

  return (
    <main className={cn('container', 'page-offset')}>
      <Filter />

      {anime?.items && <AnimeGrid data={anime} />}
    </main>
  );
}

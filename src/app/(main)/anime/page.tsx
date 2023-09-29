import cn from 'classnames';

import { AnimeGrid, Filter } from '@/features';
import { SearchParams } from '@/types';
import { getAnime } from '@/utils/api';

export default async function AllAnime({ searchParams }: SearchParams) {
  const anime = await getAnime(searchParams);

  return (
    <main className={cn('container', 'page-offset')}>
      <Filter />

      {anime?.items && <AnimeGrid data={anime} />}
    </main>
  );
}

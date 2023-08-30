import cn from 'classnames';

import { Filter } from '@/features';
import { AnimeGrid } from '@/features/anime-grid';
import { getAnime } from '@/utils/api';

export default async function AllAnime() {
  const anime = await getAnime();

  return (
    <main className={cn('container', 'page-offset')}>
      <Filter />

      {anime?.items && <AnimeGrid data={anime} />}
    </main>
  );
}

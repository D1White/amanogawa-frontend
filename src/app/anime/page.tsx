import cn from 'classnames';

import { Filter } from '@/features';
import { AnimeGrid } from '@/features/anime-grid';
import { AnimeTypeEnum } from '@/types';
import { getAnime } from '@/utils/api';

export default async function AllAnime({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const anime = await getAnime(searchParams);

  return (
    <main className={cn('container', 'page-offset')}>
      <Filter />

      {anime?.items && <AnimeGrid data={anime} />}
    </main>
  );
}

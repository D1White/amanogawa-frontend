import type { Metadata, ResolvingMetadata } from 'next';

import { AnimeGroup, AnimeHero } from '@/features';
import type { MetadataProps, PageParams } from '@/types';
import { getMetaTitle } from '@/utils';
import { getOneAnime } from '@/utils/api';

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const anime = await getOneAnime(params.slug);

  return {
    title: getMetaTitle(anime.title),
    description: anime.synopsis,
  };
}

export default async function AnimePage({ params }: PageParams) {
  const anime = await getOneAnime(params.slug);

  return (
    <main className="container">
      <AnimeHero anime={anime} />

      {anime?.group && <AnimeGroup groupName={anime.group} animeId={anime._id} />}
    </main>
  );
}

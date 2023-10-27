import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

import { AnimeGroup, AnimeHero, Episodes } from '@/features';
import type { MetadataProps, PageParams } from '@/types';
import { getMetaTitle } from '@/utils';
import { getOneAnime } from '@/utils/api';

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const anime = await getOneAnime(params.slug);

  return {
    title: getMetaTitle(anime?.title),
    openGraph: {
      title: getMetaTitle(anime?.title),
    },
  };
}

export default async function AnimePage({ params }: PageParams) {
  const anime = await getOneAnime(params.slug);

  if (!anime) {
    notFound();
  }

  return (
    <main className="container">
      <AnimeHero anime={anime} />

      {anime?.group && <AnimeGroup groupName={anime.group} animeId={anime._id} />}

      {!!anime?.episodes && <Episodes data={anime.episodes} anime_slug={anime.slug} />}
    </main>
  );
}

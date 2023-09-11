import cn from 'classnames';
import type { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';

import { Episode } from '@/components';
import { type MetadataProps, type PageParams, PagesPath } from '@/types';
import { getMetaTitle } from '@/utils';
import { getOneAnime } from '@/utils/api';

import styles from './episode_page.module.scss';

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const anime = await getOneAnime(params.slug);

  return {
    title: getMetaTitle(anime?.title),
    description: anime?.synopsis,
  };
}

export default async function EpisodePage({ params }: PageParams) {
  const redirectPath = params?.slug ? `${PagesPath.anime}/${params.slug}` : PagesPath.anime;

  const anime = await getOneAnime(params.slug);
  if (!anime || !anime?.episodes) redirect(redirectPath);

  const episode = anime.episodes.find((episode) => episode._id === params?.episode_id);

  if (!episode || !params?.episode_id) redirect(redirectPath);

  const episodeIndex = anime.episodes.map((ep) => ep._id).indexOf(params.episode_id);
  const prevEpisode = anime.episodes?.[episodeIndex - 1];
  const nextEpisode = anime.episodes?.[episodeIndex + 1];

  return (
    <main className="container page-offset">
      <div className={styles.playerWrapper}></div>

      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.animeTitle}>{anime.title}</h2>
          <h1 className={styles.episodeTitle}>
            {episode?.custom_name || `Episode ${episode.order}`}
          </h1>
        </div>

        {typeof episodeIndex !== 'undefined' && (
          <div className={styles.episodes}>
            {prevEpisode && (
              <div className={styles.episode}>
                <p className={styles.navigateText}>Prev Episode</p>
                <Episode data={prevEpisode} anime_slug={params.slug} />
              </div>
            )}

            {nextEpisode && (
              <div className={cn(styles.episode, { [styles.end]: !!prevEpisode })}>
                <p className={styles.navigateText}>Next Episode</p>
                <Episode data={nextEpisode} anime_slug={params.slug} />
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

import cn from 'classnames';
import type { Metadata, ResolvingMetadata } from 'next';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';

import { Episode } from '@/components';
import { EpisodeBackButton } from '@/components/Header/EpisodeBackButton';
import { type MetadataProps, type PageParams } from '@/types';
import { getMetaTitle, PagesPath } from '@/utils';
import { getEpisode } from '@/utils/api';

import styles from './episode_page.module.scss';

const Player = dynamic(() => import('@/components/Player'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const episode = await getEpisode(params.episode_id);

  return {
    title: getMetaTitle(episode?.anime?.title),
    description: episode?.anime?.synopsis,
  };
}

export default async function EpisodePage({ params }: PageParams) {
  const redirectPath = params?.slug ? `${PagesPath.anime}/${params.slug}` : PagesPath.anime;

  const episode = await getEpisode(params.episode_id);
  if (!episode?.anime?.episodes) redirect(redirectPath);

  const episodeIndex = episode.anime.episodes.map((ep) => ep._id).indexOf(params.episode_id);
  const prevEpisode = episode.anime.episodes?.[episodeIndex - 1];
  const nextEpisode = episode.anime.episodes?.[episodeIndex + 1];

  return (
    <main className="container page-offset">
      <EpisodeBackButton className={styles.backButton} />

      <div className={styles.playerWrapper}>
        <Player data={episode} />
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.animeTitle}>{episode.anime.title}</h2>
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

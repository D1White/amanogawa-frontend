import cn from 'classnames';
import type { Metadata, ResolvingMetadata } from 'next';
import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';
import { notFound } from 'next/navigation';

import { Episode } from '@/components';
import { PlayerLoader } from '@/components/Player/PlayerLoader';
import { type MetadataProps, type PageParams } from '@/types';
import { getMetaTitle, PagesPath } from '@/utils';
import { getEpisode } from '@/utils/api';

import styles from './episode_page.module.scss';
import { EpisodeBackButton } from './EpisodeBackButton';

const Player = dynamic(() => import('@/components/Player'), {
  ssr: false,
  loading: () => <PlayerLoader />,
});

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const episode = await getEpisode(params.episode_id);

  return {
    title: getMetaTitle(episode?.anime?.title),
    openGraph: {
      title: getMetaTitle(episode?.anime?.title),
    },
  };
}

export default async function EpisodePage({ params }: PageParams) {
  const redirectPath = params?.slug ? `${PagesPath.anime}/${params.slug}` : PagesPath.anime;

  const episode = await getEpisode(params.episode_id);

  if (!episode) notFound();
  if (!episode?.anime?.episodes) redirect(redirectPath);

  const episodeIndex = episode.anime.episodes.map((ep) => ep._id).indexOf(params.episode_id);
  const prevEpisode = episode.anime.episodes?.[episodeIndex - 1];
  const nextEpisode = episode.anime.episodes?.[episodeIndex + 1];

  return (
    <main className="container page-offset">
      <EpisodeBackButton />

      <div className={styles.playerWrapper}>
        <Player data={episode} />
      </div>

      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.animeTitle}>{episode.anime.title}</h2>
          <h1 className={styles.episodeTitle}>
            {episode?.custom_name || `Серія ${episode.order}`}
          </h1>
        </div>

        {typeof episodeIndex !== 'undefined' && (
          <div className={styles.episodes}>
            {prevEpisode && (
              <div className={styles.episode}>
                <p className={styles.navigateText}>Попередня серія</p>
                <Episode data={prevEpisode} anime_slug={params.slug} />
              </div>
            )}

            {nextEpisode && (
              <div className={cn(styles.episode, { [styles.end]: !!prevEpisode })}>
                <p className={styles.navigateText}>Наступна серія</p>
                <Episode data={nextEpisode} anime_slug={params.slug} />
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

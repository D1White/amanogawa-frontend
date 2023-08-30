import cn from 'classnames';

import { AnimeCard } from '@/components';
import { Filter } from '@/features';
import { getAnime } from '@/utils/api';

import styles from './anime-page.module.scss';

export default async function AllAnime() {
  const anime = await getAnime();

  return (
    <main className={cn('container', 'page-offset')}>
      <Filter />

      <section className={styles.animeGrid}>
        {anime?.items?.map((anime) => (
          <AnimeCard
            title={anime.title}
            image={anime.image}
            status={anime.status}
            rating={anime?.rating}
            slug={anime.slug}
            episodes={anime?.episodes?.length}
            key={anime.slug}
          />
        ))}
      </section>
    </main>
  );
}

import Link from 'next/link';
import React from 'react';

import { ArrowRightIcon } from '@/assets/jsx-icons';
import { AnimeCard } from '@/components';
import { PagesPath } from '@/types';
import { getAnime } from '@/utils/api';

import styles from './TrendingAnime.module.scss';

export const TrendingAnime = async () => {
  const anime = await getAnime({
    limit: 5,
  });

  if (!anime?.items) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>Trending Now</h3>

        <Link
          href={`${PagesPath.anime}?sort_field=views&sort_direction=DESC`}
          className={styles.button}
        >
          <span className={styles.button__text}>See All</span>
          <ArrowRightIcon />
        </Link>
      </div>

      <div className={styles.cards}>
        {anime.items.map((item) => (
          <AnimeCard
            title={item.title}
            episodes={item.episodes?.length || 0}
            image={item.image}
            status={item.status}
            slug={item.slug}
            rating={item?.rating}
            key={item.slug}
          />
        ))}
      </div>
    </section>
  );
};

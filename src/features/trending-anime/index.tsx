import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import { ArrowRightIcon } from '@/assets/jsx-icons';
import { AnimeCard } from '@/components';
import { PagesPath } from '@/utils';
import { AnimeSortField, getAnime } from '@/utils/api';

import styles from './TrendingAnime.module.scss';

export const TrendingAnime = async () => {
  const anime = await getAnime({
    limit: 5,
    sort_field: AnimeSortField.views,
  });

  if (!anime?.items) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3 className={styles.title}>Популярне зараз</h3>

        <Link
          href={`${PagesPath.anime}?sort_field=views&sort_direction=DESC`}
          className={cn(styles.button, styles.buttonTop)}
        >
          <span className={styles.button__text}>Переглянути всі</span>
          <ArrowRightIcon />
        </Link>
      </div>

      <div className={styles.cards}>
        {anime.items.map((item) => (
          <AnimeCard
            id={item._id}
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

      <Link
        href={`${PagesPath.anime}?sort_field=views&sort_direction=DESC`}
        className={cn(styles.button, styles.buttonBottom)}
      >
        <span className={styles.button__text}>Переглянути всі</span>
        <ArrowRightIcon />
      </Link>
    </section>
  );
};

import Link from 'next/link';
import React from 'react';

import { ArrowRightIcon } from '@/assets/jsx-icons';
import { AnimeCard } from '@/components';
import { AnimeStatusEnum, PagesPath } from '@/types';

import styles from './TrendingAnime.module.scss';

export const TrendingAnime = () => {
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
        {new Array(5).fill(null).map((_, idx) => (
          <AnimeCard
            title="Doctor Stone: New World"
            episodes={40}
            image="https://amanogawa.fra1.cdn.digitaloceanspaces.com/chainsaw-man/poster.jpg"
            status={AnimeStatusEnum.ongoing}
            slug="test"
            score={4.7}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

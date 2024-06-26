'use client';

import React, { FC } from 'react';

import { AnimeCard, Pagination } from '@/components';
import { IAnimeResponse } from '@/utils/api/types';

import styles from './anime-grid.module.scss';

export const AnimeGrid: FC<{ data: IAnimeResponse }> = ({ data }) => {
  return (
    <>
      <section className={styles.animeGrid}>
        {data?.items?.map((anime) => (
          <AnimeCard
            id={anime._id}
            title={anime.title}
            image={anime.image}
            status={anime.status}
            rating={anime?.rating}
            slug={anime.slug}
            episodes={anime?.episodes?.length}
            size="small"
            key={anime.slug}
          />
        ))}
      </section>

      {data?.pages > 1 && (
        <Pagination activePage={data.page} pages={data.pages} setPage={() => {}} />
      )}
    </>
  );
};

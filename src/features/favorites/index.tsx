'use client';

import React from 'react';

import { useGetFavorites } from '@/hooks';

import { FavoriteAnime } from './components';
import styles from './favorites.module.scss';

export const Favorites = () => {
  const { data } = useGetFavorites();

  return (
    <section className={styles.container}>
      {data?.map((anime) => <FavoriteAnime anime={anime} key={anime._id} />)}
    </section>
  );
};

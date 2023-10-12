'use client';

import React from 'react';
import useSWR from 'swr';

import { IAnime } from '@/types';
import { SWRKeys } from '@/utils';
import { getFavorites } from '@/utils/api';

import { FavoriteAnime } from './components';
import styles from './favorites.module.scss';

export const Favorites = () => {
  const { data } = useSWR<IAnime[]>(SWRKeys.favorites, getFavorites);

  return (
    <section className={styles.container}>
      {data?.map((anime) => <FavoriteAnime anime={anime} key={anime._id} />)}
    </section>
  );
};

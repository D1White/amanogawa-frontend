'use client';

import React from 'react';

import { useGetFavorites } from '@/hooks';

import { FavoriteAnime } from './components';
import styles from './favorites.module.scss';

export const Favorites = () => {
  const { data } = useGetFavorites();

  return (
    <section className={styles.container}>
      {!!data && data?.length > 0 ? (
        data?.map((anime) => <FavoriteAnime anime={anime} key={anime._id} />)
      ) : (
        <p className={styles.noDataText}>
          Жодне аніме не додано до обраного
          <br />
          <br />( ﾉ^.^)ﾉﾟ
        </p>
      )}
    </section>
  );
};

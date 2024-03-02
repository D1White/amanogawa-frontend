'use client';

import React, { FC } from 'react';

import { useGetFavoritesByUsername } from '@/hooks';

import { FavoriteAnime } from './components';
import styles from './favorites.module.scss';

interface FavoritesProps {
  username: string;
}

export const Favorites: FC<FavoritesProps> = ({ username }) => {
  const { data, isFetching } = useGetFavoritesByUsername(username);

  return (
    <section className={styles.container}>
      {!!data && data?.length > 0 ? (
        data?.map((anime) => <FavoriteAnime anime={anime} key={anime._id} />)
      ) : isFetching ? null : (
        <p className={styles.noDataText}>
          Жодне аніме не додано до обраного
          <br />
          <br />( ﾉ^.^)ﾉﾟ
        </p>
      )}
    </section>
  );
};

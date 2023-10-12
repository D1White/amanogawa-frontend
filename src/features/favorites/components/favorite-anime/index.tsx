import cn from 'classnames';
import Link from 'next/link';
import React, { FC } from 'react';
import { useSWRConfig } from 'swr';

import { TrashIcon } from '@/assets/jsx-icons';
import blocksStyles from '@/styles/variables/blocks/blocks.module.scss';
import { IAnime } from '@/types';
import { PagesPath, SWRKeys } from '@/utils';
import { removeFavorite } from '@/utils/api';

import styles from './favorite-anime.module.scss';

interface FavoriteAnimeProps {
  anime: IAnime;
}

export const FavoriteAnime: FC<FavoriteAnimeProps> = ({ anime }) => {
  const { mutate } = useSWRConfig();

  const animeLink = `${PagesPath.anime}/${anime.slug}`;

  const handleRemove = async () => {
    try {
      await removeFavorite(anime._id);
      mutate(SWRKeys.favorites);
    } catch (error) {}
  };

  return (
    <div className={styles.wrapper}>
      <Link href={animeLink} className={styles.posterWrapper}>
        <img src={anime.image} alt={anime.title} className={styles.poster} />
      </Link>

      <div className={styles.info}>
        <Link href={animeLink} className={cn(styles.textInfo, styles.link)}>
          {anime.title}
        </Link>
        <p className={cn(styles.textInfo, styles.subtitle)}>{anime.status}</p>
      </div>

      <div className={blocksStyles.flexCentered} onClick={handleRemove}>
        <button className={styles.deleteButton}>
          <TrashIcon />
          Remove
        </button>
      </div>
    </div>
  );
};

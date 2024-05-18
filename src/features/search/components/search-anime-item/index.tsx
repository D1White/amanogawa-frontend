import cn from 'classnames';
import Link from 'next/link';
import React, { FC } from 'react';

import { IAnime } from '@/types';
import { PagesPath } from '@/utils';

import styles from './search-anime-item.module.scss';

interface SearchAnimeItemProps {
  anime: IAnime;
  onClose: () => void;
}

export const SearchAnimeItem: FC<SearchAnimeItemProps> = ({ anime, onClose }) => {
  return (
    <Link href={`${PagesPath.anime}/${anime.slug}`} onClick={onClose} className={styles.result}>
      <img src={anime.image} alt="Аніме постер" className={styles.resultPoster} />

      <div className={styles.resultInfo}>
        <p className={styles.resultText}>{anime.title}</p>
        <p className={cn(styles.resultText, styles.subtitle)}>{`${
          anime.year
        } · ${anime.type.toUpperCase()}`}</p>
      </div>
    </Link>
  );
};

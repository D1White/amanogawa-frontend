import React, { FC } from 'react';

import { IAnimeFull } from '@/types';

import styles from './details.module.scss';

interface DetailsProps {
  anime: IAnimeFull;
}

export const Details: FC<DetailsProps> = ({ anime }) => {
  return (
    <div className={styles.details}>
      <div className={styles.row}>
        <span className={styles.detail}>
          Рік:<mark>{anime.year}</mark>
        </span>
        <span className={styles.detail}>
          Сезон:<mark>{anime.season}</mark>
        </span>
        <span className={styles.detail}>
          Тип:<mark>{anime.type}</mark>
        </span>

        {anime?.episodes_total && anime.episodes?.length ? (
          <span className={styles.detail}>
            Епізоди:
            <mark>{`${anime.episodes?.length}/${anime.episodes_total}`}</mark>
          </span>
        ) : null}

        <span className={styles.detail}>
          Статус:<mark>{anime.status}</mark>
        </span>
      </div>

      <div className={styles.row}>
        <span className={styles.detail}>
          Жанри:<mark>{anime.genres.map((genre) => genre.name).join(', ')}</mark>
        </span>
      </div>
    </div>
  );
};

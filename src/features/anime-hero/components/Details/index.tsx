import Link from 'next/link';
import React, { FC } from 'react';

import { IAnimeFull } from '@/types';
import { PagesPath } from '@/utils';

import styles from './details.module.scss';

interface DetailsProps {
  anime: IAnimeFull;
}

export const Details: FC<DetailsProps> = ({ anime }) => {
  return (
    <div className={styles.details}>
      <div className={styles.row}>
        <span className={styles.detail}>
          Рік:
          <Link href={`${PagesPath.anime}?min_year=${anime.year}&max_year=${anime.year}`}>
            {anime.year}
          </Link>
        </span>
        <span className={styles.detail}>
          Сезон: <Link href={`${PagesPath.anime}?season=${anime.season}`}>{anime.season}</Link>
        </span>
        <span className={styles.detail}>
          Тип: <Link href={`${PagesPath.anime}?type=${anime.type}`}>{anime.type}</Link>
        </span>

        {anime?.episodes_total && anime.episodes?.length ? (
          <span className={styles.detail}>
            Епізоди:
            <mark>{`${anime.episodes?.length}/${anime.episodes_total}`}</mark>
          </span>
        ) : null}

        <span className={styles.detail}>
          Статус: <Link href={`${PagesPath.anime}?status=${anime.status}`}>{anime.status}</Link>
        </span>
      </div>

      <div className={styles.row}>
        <span className={styles.detail}>
          Жанри:{' '}
          {anime.genres.map((genre, idx) => (
            <>
              <Link href={`${PagesPath.anime}?genres[]=${genre.slug}`} key={genre.slug}>
                {genre.name}
                {idx + 1 !== anime.genres.length && ','}
              </Link>
            </>
          ))}
        </span>
      </div>
    </div>
  );
};

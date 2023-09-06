import cn from 'classnames';
import React, { FC } from 'react';

import { IAnimeFull } from '@/types';

import { ActionButtons } from './ActionButtons';
import styles from './anime-hero.module.scss';

interface AnimeHeroProps {
  anime: IAnimeFull;
}

export const AnimeHero: FC<AnimeHeroProps> = ({ anime }) => {
  return (
    <section className={styles.wrapper}>
      <img src={anime.image} alt={anime.title} className={cn(styles.background, styles.bgImage)} />
      <div className={cn(styles.background, styles.gradient)}></div>

      <img src={anime.image} alt={anime.title} className={styles.poster} />

      <div className={styles.content}>
        <h1 className={styles.title}>{anime.title}</h1>

        <p className={styles.synopsis}>{anime.synopsis}</p>

        <ActionButtons />

        <div className={styles.details}>
          {anime?.rating && (
            <span className={styles.detail}>
              Rating:<mark>{anime.rating}</mark>
            </span>
          )}
          {anime?.views && (
            <span className={styles.detail}>
              Views:<mark>{anime.views}</mark>
            </span>
          )}
          <span className={styles.detail}>
            Year:<mark>{anime.year}</mark>
          </span>
          <span className={styles.detail}>
            Season:<mark>{anime.season}</mark>
          </span>
          {anime?.episodes_total && anime.episodes?.length ? (
            <span className={styles.detail}>
              Episodes:
              <mark>{`${anime.episodes?.length} / ${anime.episodes_total}`}</mark>
            </span>
          ) : null}
          <span className={styles.detail}>
            Type:<mark>{anime.type}</mark>
          </span>
          <span className={styles.detail}>
            Status:<mark>{anime.status}</mark>
          </span>
          <span className={styles.detail}>
            Genres:<mark>{anime.genres.map((genre) => genre.name).join(', ')}</mark>
          </span>
        </div>
      </div>
    </section>
  );
};

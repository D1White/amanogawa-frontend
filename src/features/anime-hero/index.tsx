import cn from 'classnames';
import React, { FC } from 'react';

import { IAnimeFull } from '@/types';

import styles from './anime-hero.module.scss';
import { ActionButtons, Details, Rating, Synopsis } from './components';

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

        <hr className={styles.divider} />

        <Rating animeId={anime._id} rating={anime?.rating} ratingCount={anime?.rating_count} />

        <Details anime={anime} />

        <ActionButtons />

        <Synopsis data={anime.synopsis} />

        <hr className={styles.divider} />
      </div>
    </section>
  );
};

import React, { FC } from 'react';

import { Episode } from '@/components';
import { IEpisode } from '@/types';

import styles from './episodes.module.scss';

interface EpisodesProps {
  data: IEpisode[];
  anime_slug: string;
}

export const Episodes: FC<EpisodesProps> = ({ data, anime_slug }) => {
  return (
    <section className={styles.episodes}>
      {data.map((episode) => (
        <Episode data={episode} anime_slug={anime_slug} key={episode._id} />
      ))}
    </section>
  );
};

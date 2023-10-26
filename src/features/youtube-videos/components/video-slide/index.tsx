import Link from 'next/link';
import React, { FC } from 'react';

import styles from './VideoSlide.module.scss';

interface VideoSlideProps {
  id: string;
  poster: string;
  title: string;
}

export const VideoSlide: FC<VideoSlideProps> = ({ id, poster, title }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.slide}
    >
      <img src={poster} alt="Постер відео" className={styles.poster} />

      <p className={styles.title}>{title}</p>
    </a>
  );
};

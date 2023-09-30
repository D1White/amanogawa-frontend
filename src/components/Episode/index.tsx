import Link from 'next/link';
import React, { FC } from 'react';

import defaultEpisodePreview from '@/assets/img/default-episode-preview.png';
import { PlayIcon } from '@/assets/jsx-icons';
import { IEpisode, PagesPath } from '@/types';

import styles from './episode.module.scss';

interface EpisodeProps {
  data: IEpisode;
  anime_slug: string;
}

export const Episode: FC<EpisodeProps> = ({ data, anime_slug }) => {
  const { name, custom_name, order, thumbnail, _id } = data;
  const episodeLink = `${PagesPath.anime}/${anime_slug}/${_id}`;
  const episodeNumber = `Episode ${order}`;

  return (
    <Link href={episodeLink} className={styles.episode}>
      <div className={styles.previewBlock}>
        <picture>
          <source type="image/webp" srcSet={thumbnail} />
          <img
            src={defaultEpisodePreview.src}
            alt={custom_name || name}
            className={styles.preview}
          />
        </picture>

        <div className={styles.hoverBg}></div>
        <div className={styles.play}>
          <PlayIcon />
        </div>
      </div>

      <p className={styles.title}>{episodeNumber}</p>
      {/* [INFO] temporarily hidden */}
      {/* <p className={styles.subtitle}>{custom_name}</p> */}
    </Link>
  );
};

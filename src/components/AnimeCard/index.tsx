import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { PlayIcon, SaveIcon } from '@/assets/jsx-icons';
import { IAnime, PagesPath } from '@/types';

import { Badge } from '../Badge';
import styles from './AnimeCard.module.scss';

interface AnimeCardProps extends Pick<IAnime, 'title' | 'image' | 'status' | 'score' | 'slug'> {
  episodes?: number;
}

export const AnimeCard: FC<AnimeCardProps> = (props) => {
  const { title, image, status, score, slug, episodes } = props;

  return (
    <Link href={`${PagesPath.anime}/${slug}`} className={styles.card}>
      <div className={styles.posterBlock}>
        <Image src={image} alt={title} fill objectFit="cover" />

        <div className={styles.hoverBlock} />

        <div className={styles.actionButtons}>
          <div className={cn(styles.actionButton, styles.actionButton__play)}>
            <PlayIcon />
          </div>

          <div className={cn(styles.actionButton, styles.actionButton__save)}>
            <SaveIcon />
          </div>
        </div>

        <Badge text={status} className={cn(styles.badge, styles.badge__type)} />

        {score && <Badge text={score} className={cn(styles.badge, styles.badge__score)} withStar />}
      </div>

      <p className={styles.title}>{title}</p>

      {episodes && <p className={styles.subtitle}>{`${episodes} episodes`}</p>}
    </Link>
  );
};

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { PlayIcon, SaveIcon } from '@/assets/jsx-icons';
import { IAnime } from '@/types';
import { PagesPath, statusTranslate } from '@/utils';

import { Badge } from '../Badge';
import styles from './AnimeCard.module.scss';
import { SaveButton } from './SaveButton';

interface AnimeCardProps extends Pick<IAnime, 'title' | 'image' | 'status' | 'rating' | 'slug'> {
  id: string;
  episodes?: number;
  size?: 'default' | 'small';
}

export const AnimeCard: FC<AnimeCardProps> = (props) => {
  const { id, title, image, status, rating, slug, episodes, size = 'default' } = props;

  return (
    <Link href={`${PagesPath.anime}/${slug}`} className={cn(styles.card, size)}>
      <div className={cn(styles.posterBlock, size)}>
        <Image src={image} alt="Постер аніме" fill objectFit="cover" />

        <div className={styles.hoverBlock} />

        <div className={styles.actionButtons}>
          <div className={cn(styles.actionButton, styles.actionButton__play)}>
            <PlayIcon />
          </div>

          <SaveButton animeId={id} />
        </div>

        <Badge text={statusTranslate[status]} className={cn(styles.badge, styles.badge__type)} />

        {!!rating && (
          <Badge text={rating} className={cn(styles.badge, styles.badge__score)} withStar />
        )}
      </div>

      <p className={styles.title}>{title}</p>

      {!!episodes && (
        <p className={styles.subtitle}>{`${episodes} ${
          episodes === 1 ? 'епізод' : episodes <= 4 ? 'епізоди' : 'епізодів'
        }`}</p>
      )}
    </Link>
  );
};

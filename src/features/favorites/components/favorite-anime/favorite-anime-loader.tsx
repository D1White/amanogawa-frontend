import 'react-loading-skeleton/dist/skeleton.css';

import cn from 'classnames';
import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { skeletonDefaultProps } from '@/utils';

import styles from './favorite-anime.module.scss';

export const FavoriteAnimeLoader: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.posterWrapper}>
        <Skeleton containerClassName={styles.posterLoader} {...skeletonDefaultProps} />
      </div>

      <div className={styles.info}>
        <span className={cn(styles.textInfo)}>
          <Skeleton width="60%" {...skeletonDefaultProps} />
        </span>

        <p className={cn(styles.textInfo, styles.subtitle)}>
          <Skeleton width="40%" {...skeletonDefaultProps} />
        </p>
      </div>
    </div>
  );
};

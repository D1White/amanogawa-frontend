import React from 'react';
import ContentLoader from 'react-content-loader';

import { contentLoaderDefaultProps } from '@/utils';

import styles from './player.module.scss';

export const PlayerLoader = () => {
  return (
    <div className={styles.playerLoader}>
      <ContentLoader
        width="100%"
        height="100%"
        viewBox="0 0 1400 787.5"
        {...contentLoaderDefaultProps}
      >
        <rect x="0" y="0" rx="58" ry="58" width="100%" height="100%" />
      </ContentLoader>
    </div>
  );
};

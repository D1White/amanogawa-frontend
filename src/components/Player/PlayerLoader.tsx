import React from 'react';
import ContentLoader from 'react-content-loader';

import colors from '@/styles/variables/colors/colors.module.scss';

import styles from './player.module.scss';

export const PlayerLoader = () => {
  return (
    <div className={styles.playerLoader}>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 1400 787.5"
        backgroundColor={colors.black}
        foregroundColor={colors.grayDark}
      >
        <rect x="0" y="0" rx="58" ry="58" width="100%" height="100%" />
      </ContentLoader>
    </div>
  );
};

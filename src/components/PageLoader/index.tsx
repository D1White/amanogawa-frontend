import cn from 'classnames';
import React from 'react';

import { AmanogawaLogoIcon } from '@/assets/jsx-icons';

import styles from './page-loader.module.scss';

export const PageLoader = () => {
  return (
    <main className={cn(styles.container, 'page-offset')}>
      <div className={styles.wrapper}>
        <span className={styles.loader}></span>

        <AmanogawaLogoIcon className={styles.logo} />
      </div>
    </main>
  );
};

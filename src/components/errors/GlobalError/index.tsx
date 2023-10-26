import React from 'react';

import { BackLink } from '@/components';
import { PagesPath } from '@/utils';

import styles from './global-error.module.scss';

export const GlobalError = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.emoji}>╥﹏╥</p>
      <p className={styles.text}>Йой, щось пішло не так</p>

      <BackLink href={PagesPath.home}>На головну</BackLink>
    </div>
  );
};

'use client';

import React, { FC, memo } from 'react';

import { useFilterStore } from '@/store';

import styles from './clear-filter-button.module.scss';

export const ClearFilterButton: FC = memo(() => {
  const { resetFilter } = useFilterStore();

  return (
    <button className={styles.wrapper} onClick={resetFilter}>
      Clear
    </button>
  );
});

ClearFilterButton.displayName = 'ClearFilterButton';

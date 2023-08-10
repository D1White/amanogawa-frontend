'use client';

import cn from 'classnames';
import React, { FC, useState } from 'react';

import { SettingsIcon } from '@/assets/jsx-icons';

import { FilterModal, SelectedFilters, SortBy } from '../index';
import styles from './FilterContent.module.scss';

export const FilterContent: FC = () => {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const handleFiltersOpenSwitch = () => setIsFiltersModalOpen((prev) => !prev);

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.actions}>
          <button
            className={cn(styles.filterButton, { [styles.open]: isFiltersModalOpen })}
            onClick={handleFiltersOpenSwitch}
          >
            <SettingsIcon />
            {isFiltersModalOpen ? 'Close Filter' : 'Filter'}
          </button>

          <SortBy />
        </div>

        <SelectedFilters />
      </div>

      {isFiltersModalOpen && <FilterModal />}
    </>
  );
};

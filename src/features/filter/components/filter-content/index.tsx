'use client';

import cn from 'classnames';
import React, { FC, useContext } from 'react';

import { SettingsIcon } from '@/assets/jsx-icons';
import { FilterContext } from '@/features/filter/filter-context';

import { FilterModal, SelectedFilters, SortBy } from '../index';
import styles from './FilterContent.module.scss';

export const FilterContent: FC = () => {
  const { isFilterOpen, setIsFilterOpen } = useContext(FilterContext);

  const handleFiltersOpenSwitch = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.actions}>
          <button
            className={cn(styles.filterButton, { [styles.open]: isFilterOpen })}
            onClick={handleFiltersOpenSwitch}
          >
            <SettingsIcon />
            {isFilterOpen ? 'Close Filter' : 'Filter'}
          </button>

          <SortBy />
        </div>

        <SelectedFilters />
      </div>

      {isFilterOpen && <FilterModal />}
    </>
  );
};

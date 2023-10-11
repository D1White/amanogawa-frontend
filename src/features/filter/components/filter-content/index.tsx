'use client';

import cn from 'classnames';
import React, { FC } from 'react';

import { CloseIcon, SettingsIcon } from '@/assets/jsx-icons';
import { useTogglePageNoScroll } from '@/hooks';
import { useFilterStore } from '@/store';

import { FilterModal, SelectedFilters, SortBy } from '../index';
import styles from './FilterContent.module.scss';

export const FilterContent: FC = () => {
  const { isFilterOpen, setIsFilterOpen } = useFilterStore();

  const handleFiltersOpenSwitch = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useTogglePageNoScroll(isFilterOpen);

  return (
    <>
      <div className={styles.filter}>
        <div className={styles.actions}>
          <button
            className={cn(styles.filterButton, { [styles.open]: isFilterOpen })}
            onClick={handleFiltersOpenSwitch}
          >
            {isFilterOpen ? <CloseIcon /> : <SettingsIcon />}
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

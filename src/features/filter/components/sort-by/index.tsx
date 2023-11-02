'use client';

import React from 'react';

import { Select, SelectOption, SelectValue } from '@/components/Select';
import { useFilterStore } from '@/store';
import { AnimeSortField } from '@/utils/api';

import styles from './sort-by.module.scss';

const sortOptions: SelectOption[] = [
  { label: 'Датою релізу', value: AnimeSortField.createdAt },
  { label: 'Переглядами', value: AnimeSortField.views },
];

export const SortBy = () => {
  const { sortField, setSortField } = useFilterStore();

  const handleSortChange = (value: SelectValue) => {
    setSortField(value as AnimeSortField);
  };

  return (
    <Select
      value={sortField}
      options={sortOptions}
      onChange={handleSortChange}
      label="Сортувати за:"
      className={styles.select}
    />
  );
};

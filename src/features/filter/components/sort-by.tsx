'use client';

import React, { useContext } from 'react';

import { Select, SelectOption, SelectValue } from '@/components/Select';
import { AnimeSortField } from '@/utils/api';

import { FilterContext } from '../filter-context';

const sortOptions: SelectOption[] = [
  { label: 'Release Date', value: AnimeSortField.createdAt },
  { label: 'Views', value: AnimeSortField.views },
];

export const SortBy = () => {
  const { sortFiled, setSortFiled } = useContext(FilterContext);

  const handleSortChange = (value: SelectValue) => {
    setSortFiled(value as AnimeSortField);
  };

  return (
    <Select value={sortFiled} options={sortOptions} onChange={handleSortChange} label="Sort by:" />
  );
};

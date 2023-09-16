'use client';

import React from 'react';

import { Select, SelectOption, SelectValue } from '@/components/Select';
import { useFilterStore } from '@/store';
import { AnimeSortField } from '@/utils/api';

const sortOptions: SelectOption[] = [
  { label: 'Release Date', value: AnimeSortField.createdAt },
  { label: 'Views', value: AnimeSortField.views },
];

export const SortBy = () => {
  const { sortField, setSortField } = useFilterStore();

  const handleSortChange = (value: SelectValue) => {
    setSortField(value as AnimeSortField);
  };

  return (
    <Select value={sortField} options={sortOptions} onChange={handleSortChange} label="Sort by:" />
  );
};

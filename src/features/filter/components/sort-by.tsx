'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

import { Select, SelectOption, SelectValue } from '@/components/Select';
import { AnimeSortField } from '@/utils/api';

const sortOptions: SelectOption[] = [
  { label: 'Release Date', value: AnimeSortField.createdAt },
  { label: 'Views', value: AnimeSortField.views },
];

export const SortBy = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const sortFiled = useMemo(() => {
    const searchSortBy = searchParams.get('sort_by');
    return searchSortBy && sortOptions.some((option) => option.value === searchSortBy)
      ? searchSortBy
      : AnimeSortField.createdAt;
  }, [searchParams]);

  const handleSortChange = (value: SelectValue) => {
    router.push(`${pathname}?sort_by=${value}`);
  };

  return (
    <Select value={sortFiled} options={sortOptions} onChange={handleSortChange} label="Sort by:" />
  );
};

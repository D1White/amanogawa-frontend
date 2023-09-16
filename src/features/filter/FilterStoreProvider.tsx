'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { FC, PropsWithChildren, useEffect } from 'react';

import { filtersUrlParamsSelector, useFilterStore } from '@/store';
import { IGenre } from '@/types';
import { IAnimeYearsResponse } from '@/utils/api';

interface Props extends PropsWithChildren {
  genresData: IGenre[];
  yearsData: IAnimeYearsResponse;
}

export const FilterStoreProvider: FC<Props> = ({ children, genresData, yearsData }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { setGenresData, setDefaultYearLimit, isFilterOpen } = useFilterStore();
  const urlParams = useFilterStore(filtersUrlParamsSelector);

  useEffect(() => {
    if (genresData) {
      setGenresData(genresData);
    }
  }, [genresData]);

  useEffect(() => {
    if (yearsData) {
      setDefaultYearLimit({ min: yearsData.min_year, max: yearsData.max_year });
    }
  }, [yearsData]);

  useEffect(() => {
    if (!isFilterOpen) {
      router.push(`${pathname}${urlParams ? '?' + urlParams : ''}`);
    }
  }, [urlParams, isFilterOpen]);

  return children;
};

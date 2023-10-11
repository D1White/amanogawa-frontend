'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import React, { FC, PropsWithChildren, useEffect } from 'react';

import { filtersUrlParamsSelector, useFilterStore } from '@/store';
import { IGenre } from '@/types';
import { IAnimeYearsResponse } from '@/utils/api';

import { yearOptions } from './filter-data';

interface Props extends PropsWithChildren {
  genresData: IGenre[];
  yearsData: IAnimeYearsResponse;
}

export const FilterStoreProvider: FC<Props> = ({ children, genresData, yearsData }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    setGenresData,
    setDefaultYearLimit,
    isFilterOpen,
    setType,
    setStatus,
    setSeason,
    setYearLimit,
    setGenres,
  } = useFilterStore();
  const urlParams = useFilterStore(filtersUrlParamsSelector);

  useEffect(() => {
    const urlParams = qs.parse(searchParams.toString(), { arrayFormat: 'bracket' });

    if (urlParams?.genres && urlParams?.genres?.length > 0) {
      setGenres(urlParams.genres as string[]);
    }
    if (urlParams?.type) {
      setType(urlParams.type as string);
    }
    if (urlParams?.status) {
      setStatus(urlParams.status as string);
    }
    if (urlParams?.season) {
      setSeason(urlParams.season as string);
    }

    setYearLimit({
      min: urlParams?.min_year ? +urlParams.min_year : yearOptions.min,
      max: urlParams?.max_year ? +urlParams.max_year : yearOptions.max,
    });
  }, [searchParams]);

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

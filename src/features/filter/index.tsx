import React, { FC } from 'react';

import { getAnimeYears, getGenres } from '@/utils/api';

import { FilterContent } from './components/filter-content';
import { FilterContextProvider } from './filter-context';

export const Filter: FC = async () => {
  const genres = await getGenres();
  const years = await getAnimeYears();

  return (
    <FilterContextProvider genresData={genres} yearsData={years}>
      <FilterContent />
    </FilterContextProvider>
  );
};

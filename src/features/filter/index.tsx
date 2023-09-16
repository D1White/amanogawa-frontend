import React, { FC } from 'react';

import { getAnimeYears, getGenres } from '@/utils/api';

import { FilterContent } from './components/filter-content';
import { FilterStoreProvider } from './FilterStoreProvider';

export const Filter: FC = async () => {
  const genres = await getGenres();
  const years = await getAnimeYears();

  return (
    <FilterStoreProvider genresData={genres} yearsData={years}>
      <FilterContent />
    </FilterStoreProvider>
  );
};

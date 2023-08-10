import React, { FC } from 'react';

import { getGenres } from '@/utils/api';

import { FilterContent } from './components/filter-content';
import { FilterContextProvider } from './filter-context';

export const Filter: FC = async () => {
  const genres = await getGenres();

  return (
    <FilterContextProvider genresData={genres}>
      <FilterContent />
    </FilterContextProvider>
  );
};

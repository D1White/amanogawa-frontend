import { SelectValue, SelectValueOrNull } from '@/components/Select';
import { yearOptions } from '@/features/filter/filter-data';
import { IGenre } from '@/types';
import { AnimeSortField } from '@/utils/api';

export type FilterState = {
  type: SelectValueOrNull;
  genres: SelectValue[];
  status: SelectValueOrNull;
  yearLimit: typeof yearOptions;
  defaultYearLimit: typeof yearOptions;
  sortField: AnimeSortField;
  genresData: IGenre[];
  isFilterOpen: boolean;
};

type FilterAction = {
  setType: (type: FilterState['type']) => void;
  removeType: () => void;

  setGenres: (genres: FilterState['genres']) => void;
  removeGenre: (genre: SelectValue) => void;

  setStatus: (status: FilterState['status']) => void;
  removeStatus: () => void;

  setYearLimit: (yearLimit: FilterState['yearLimit']) => void;
  setDefaultYearLimit: (defaultYearLimit: FilterState['defaultYearLimit']) => void;
  resetFromYearLimit: () => void;
  resetToYearLimit: () => void;

  setSortField: (sortField: FilterState['sortField']) => void;

  setGenresData: (genresData: FilterState['genresData']) => void;

  setIsFilterOpen: (isFilterOpen: FilterState['isFilterOpen']) => void;

  resetFilter: () => void;
};

export type FilterStore = FilterState & FilterAction;

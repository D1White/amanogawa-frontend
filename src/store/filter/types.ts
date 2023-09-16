import { SelectValue, SelectValueOrNull } from '@/components/Select';
import { yearOptions } from '@/features/filter/filter-data';
import { IGenre } from '@/types';
import { AnimeSortField } from '@/utils/api';

type State = {
  type: SelectValueOrNull;
  genres: SelectValue[];
  status: SelectValueOrNull;
  yearLimit: typeof yearOptions;
  defaultYearLimit: typeof yearOptions;
  sortField: AnimeSortField;
  genresData: IGenre[];
  isFilterOpen: boolean;
};

type Action = {
  setType: (type: State['type']) => void;
  removeType: () => void;

  setGenres: (genres: State['genres']) => void;
  removeGenre: (genre: SelectValue) => void;

  setStatus: (status: State['status']) => void;
  removeStatus: () => void;

  setYearLimit: (yearLimit: State['yearLimit']) => void;
  setDefaultYearLimit: (defaultYearLimit: State['defaultYearLimit']) => void;
  resetFromYearLimit: () => void;
  resetToYearLimit: () => void;

  setSortField: (sortField: State['sortField']) => void;

  setGenresData: (genresData: State['genresData']) => void;

  setIsFilterOpen: (isFilterOpen: State['isFilterOpen']) => void;
};

export type FilterStore = State & Action;

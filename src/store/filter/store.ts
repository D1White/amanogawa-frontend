import { create } from 'zustand';

import { yearOptions } from '@/features/filter/filter-data';
import { AnimeSortField } from '@/utils/api';

import { FilterStore } from './types';

export const useFilterStore = create<FilterStore>((set, get) => ({
  type: null,
  setType: (type) => set({ type }),
  removeType: () => set({ type: null }),

  genres: [],
  setGenres: (genres) => set({ genres }),
  removeGenre: (value) => set({ genres: get().genres.filter((genre) => genre !== value) }),

  status: null,
  setStatus: (status) => set({ status }),
  removeStatus: () => set({ status: null }),

  season: null,
  setSeason: (season) => set({ season }),
  removeSeason: () => set({ season: null }),

  yearLimit: yearOptions,
  defaultYearLimit: yearOptions,
  setYearLimit: (yearLimit) => set({ yearLimit }),
  setDefaultYearLimit: (defaultYearLimit) => set({ defaultYearLimit }),
  resetFromYearLimit: () =>
    set({
      yearLimit: { max: get().yearLimit.max, min: get().defaultYearLimit.min },
    }),
  resetToYearLimit: () =>
    set({
      yearLimit: { min: get().yearLimit.min, max: get().defaultYearLimit.max },
    }),

  sortField: AnimeSortField.createdAt,
  setSortField: (sortField) => set({ sortField }),

  genresData: [],
  setGenresData: (genresData) => set({ genresData }),

  isFilterOpen: false,
  setIsFilterOpen: (isFilterOpen) => set({ isFilterOpen }),

  resetFilter: () =>
    set({
      type: null,
      genres: [],
      status: null,
      season: null,
      yearLimit: get().defaultYearLimit,
    }),
}));

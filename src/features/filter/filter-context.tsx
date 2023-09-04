'use client';

import { usePathname, useRouter } from 'next/navigation';
import qs from 'query-string';
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { SelectValue, SelectValueOrNull } from '@/components/Select';
import { IGenre } from '@/types';
import { AnimeSortField } from '@/utils/api';

import { yearOptions } from './filter-data';

type FilterContextType = {
  type: SelectValueOrNull;
  setType: Dispatch<SelectValueOrNull>;
  removeType: () => void;

  genres: SelectValue[];
  setGenres: Dispatch<SelectValue[]>;
  removeGenre: (value: SelectValue) => void;

  status: SelectValueOrNull;
  setStatus: Dispatch<SelectValueOrNull>;
  removeStatus: () => void;

  yearLimit: typeof yearOptions;
  setYearLimit: Dispatch<typeof yearOptions>;
  resetFromYearLimit: () => void;
  resetToYearLimit: () => void;

  sortFiled: AnimeSortField;
  setSortFiled: Dispatch<AnimeSortField>;

  genresData: IGenre[];

  isFilterOpen: boolean;
  setIsFilterOpen: Dispatch<boolean>;
};

const defaultContextState: FilterContextType = {
  type: null,
  setType: () => {},
  removeType: () => {},

  genres: [],
  setGenres: () => {},
  removeGenre: () => {},

  status: null,
  setStatus: () => {},
  removeStatus: () => {},

  yearLimit: yearOptions,
  setYearLimit: () => {},
  resetFromYearLimit: () => {},
  resetToYearLimit: () => {},

  sortFiled: AnimeSortField.createdAt,
  setSortFiled: () => {},

  genresData: [],

  isFilterOpen: false,
  setIsFilterOpen: () => {},
};

export const FilterContext = createContext<FilterContextType>(defaultContextState);

interface FilterContextProviderProps extends PropsWithChildren {
  genresData: IGenre[];
}

export const FilterContextProvider: FC<FilterContextProviderProps> = ({ children, genresData }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [type, setType] = useState<SelectValueOrNull>(defaultContextState.type);
  const [status, setStatus] = useState<SelectValueOrNull>(defaultContextState.status);
  const [genres, setGenres] = useState<SelectValue[]>(defaultContextState.genres);
  const [yearLimit, setYearLimit] = useState(defaultContextState.yearLimit);
  const [sortFiled, setSortFiled] = useState(defaultContextState.sortFiled);
  const [isFilterOpen, setIsFilterOpen] = useState(defaultContextState.isFilterOpen);

  const removeType = useCallback(() => {
    setType(null);
  }, []);

  const removeStatus = useCallback(() => {
    setStatus(null);
  }, []);

  const removeGenre = useCallback(
    (value: SelectValue) => {
      const filterGenres = genres.filter((genre) => genre !== value);
      setGenres(filterGenres);
    },
    [genres],
  );

  const resetFromYearLimit = useCallback(() => {
    setYearLimit((prev) => ({ ...prev, min: yearOptions.min }));
  }, []);

  const resetToYearLimit = useCallback(() => {
    setYearLimit((prev) => ({ ...prev, max: yearOptions.max }));
  }, []);

  useEffect(() => {
    if (isFilterOpen) return;

    const params = {
      type,
      status,
      genres,
      min_year: yearLimit.min > yearOptions.min ? yearLimit.min : null,
      max_year: yearLimit.max < yearOptions.max ? yearLimit.max : null,
      sort_field: sortFiled !== defaultContextState.sortFiled ? sortFiled : null,
    };

    const urlParams = qs.stringify(params, {
      arrayFormat: 'bracket',
      skipNull: true,
      skipEmptyString: true,
    });

    if (urlParams) {
      router.push(`${pathname}?${urlParams}`);
    } else {
      router.push(pathname);
    }
  }, [type, status, genres, yearLimit, yearLimit, sortFiled, isFilterOpen]);

  return (
    <FilterContext.Provider
      value={{
        type,
        setType,
        removeType,
        genres,
        setGenres,
        removeGenre,
        status,
        setStatus,
        removeStatus,
        yearLimit,
        setYearLimit,
        resetFromYearLimit,
        resetToYearLimit,
        sortFiled,
        setSortFiled,
        genresData,
        isFilterOpen,
        setIsFilterOpen,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

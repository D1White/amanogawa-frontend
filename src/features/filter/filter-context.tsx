'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { SelectValue } from '@/components/Select';
import { IGenre } from '@/types';

import { yearOptions } from './filter-data';

type FilterContextType = {
  types: SelectValue[];
  setTypes: Dispatch<SelectValue[]>;
  removeType: (value: SelectValue) => void;

  genres: SelectValue[];
  setGenres: Dispatch<SelectValue[]>;
  removeGenre: (value: SelectValue) => void;

  status: SelectValue[];
  setStatus: Dispatch<SelectValue[]>;
  removeStatus: (value: SelectValue) => void;

  yearLimit: typeof yearOptions;
  setYearLimit: Dispatch<typeof yearOptions>;
  resetFromYearLimit: () => void;
  resetToYearLimit: () => void;

  genresData: IGenre[];

  isFilterOpen: boolean;
  setIsFilterOpen: Dispatch<boolean>;
};

export const FilterContext = createContext<FilterContextType>({
  types: [],
  setTypes: () => {},
  removeType: () => {},

  genres: [],
  setGenres: () => {},
  removeGenre: () => {},

  status: [],
  setStatus: () => {},
  removeStatus: () => {},

  yearLimit: yearOptions,
  setYearLimit: () => {},
  resetFromYearLimit: () => {},
  resetToYearLimit: () => {},

  genresData: [],

  isFilterOpen: false,
  setIsFilterOpen: () => {},
});

interface FilterContextProviderProps extends PropsWithChildren {
  genresData: IGenre[];
}

export const FilterContextProvider: FC<FilterContextProviderProps> = ({ children, genresData }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [types, setTypes] = useState<SelectValue[]>([]);
  const [status, setStatus] = useState<SelectValue[]>([]);
  const [genres, setGenres] = useState<SelectValue[]>([]);
  const [yearLimit, setYearLimit] = useState(yearOptions);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const removeType = useCallback(
    (value: SelectValue) => {
      const filterTypes = types.filter((type) => type !== value);
      setTypes(filterTypes);
    },
    [types],
  );

  const removeStatus = useCallback(
    (value: SelectValue) => {
      const filterStatus = status.filter((item) => item !== value);
      setStatus(filterStatus);
    },
    [status],
  );

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

    const typeUrlParams = types.length > 0 ? 'type=' + types.join(',') : '';
    const statusUrlParams = status.length > 0 ? 'status=' + status.join(',') : '';
    const genresUrlParams = genres.length > 0 ? 'genres=' + genres.join(',') : '';

    // [TO DO] update backend
    const yearMinUrlParams = yearLimit.min > yearOptions.min ? 'yearMin=' + yearLimit.min : '';
    const yearMaxUrlParams = yearLimit.max < yearOptions.max ? 'yearMax=' + yearLimit.max : '';

    const urlParams = [
      typeUrlParams,
      statusUrlParams,
      genresUrlParams,
      yearMinUrlParams,
      yearMaxUrlParams,
    ]
      .filter((param) => !!param)
      .join('&');

    if (urlParams) {
      router.push(`${pathname}?${urlParams}`);
    } else {
      router.push(pathname);
    }
  }, [types, status, genres, yearLimit, yearLimit, isFilterOpen]);

  return (
    <FilterContext.Provider
      value={{
        types,
        setTypes,
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
        genresData,
        isFilterOpen,
        setIsFilterOpen,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

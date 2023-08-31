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

  genresData: IGenre[];

  isFilterOpen: boolean;
  setIsFilterOpen: Dispatch<boolean>;
};

export const FilterContext = createContext<FilterContextType>({
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

  const [type, setType] = useState<SelectValueOrNull>(null);
  const [status, setStatus] = useState<SelectValueOrNull>(null);
  const [genres, setGenres] = useState<SelectValue[]>([]);
  const [yearLimit, setYearLimit] = useState(yearOptions);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      yearMin: yearLimit.min > yearOptions.min ? yearLimit.min : null,
      yearMax: yearLimit.max < yearOptions.max ? yearLimit.max : null,
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
  }, [type, status, genres, yearLimit, yearLimit, isFilterOpen]);

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
        genresData,
        isFilterOpen,
        setIsFilterOpen,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

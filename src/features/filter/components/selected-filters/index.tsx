'use client';

import React, { FC, useMemo } from 'react';

import { CloseSmallIcon } from '@/assets/jsx-icons';
import { SelectValue } from '@/components/Select';
import {
  animeSeasonOptions,
  animeStatusOptions,
  animeTypesOptions,
} from '@/features/filter/filter-data';
import { filtersUrlParamsSelector, useFilterStore } from '@/store';

import { ClearFilterButton } from '../clear-filter-button';
import styles from './SelectedFilters.module.scss';

interface FilterChipsProps {
  label: string;
  value: SelectValue;
  onClick: (value: SelectValue) => void;
}

const FilterChips: FC<FilterChipsProps> = ({ label, value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <div className={styles.filter}>
      <p>{label}</p>

      <button className={styles.removeButton} onClick={handleClick}>
        <CloseSmallIcon />
      </button>
    </div>
  );
};

export const SelectedFilters = () => {
  const {
    type,
    genres,
    genresData,
    status,
    season,
    yearLimit,
    removeType,
    removeGenre,
    removeStatus,
    removeSeason,
    resetFromYearLimit,
    resetToYearLimit,
    defaultYearLimit,
  } = useFilterStore();
  const urlParams = useFilterStore(filtersUrlParamsSelector);

  const typesFilters = useMemo(
    () => animeTypesOptions.filter((option) => type === option.value),
    [type],
  );

  const statusFilters = useMemo(
    () => animeStatusOptions.filter((option) => status === option.value),
    [status],
  );

  const seasonFilters = useMemo(
    () => animeSeasonOptions.filter((option) => season === option.value),
    [season],
  );

  const genresFilters = useMemo(
    () => genresData.filter((genre) => genres.includes(genre.slug)),
    [genresData, genres],
  );

  return (
    <div className={styles.wrapper}>
      {!!urlParams && <ClearFilterButton />}

      {typesFilters.map((option) => (
        <FilterChips
          label={option.label}
          value={option.value}
          onClick={removeType}
          key={option.value}
        />
      ))}

      {statusFilters.map((option) => (
        <FilterChips
          label={option.label}
          value={option.value}
          onClick={removeStatus}
          key={option.value}
        />
      ))}

      {seasonFilters.map((option) => (
        <FilterChips
          label={option.label}
          value={option.value}
          onClick={removeSeason}
          key={option.value}
        />
      ))}

      {defaultYearLimit.min < yearLimit.min && (
        <FilterChips label={`From ${yearLimit.min}`} value="" onClick={resetFromYearLimit} />
      )}

      {defaultYearLimit.max > yearLimit.max && (
        <FilterChips label={`To ${yearLimit.max}`} value="" onClick={resetToYearLimit} />
      )}

      {genresFilters.map((genre) => (
        <FilterChips label={genre.name} value={genre.slug} onClick={removeGenre} key={genre._id} />
      ))}
    </div>
  );
};

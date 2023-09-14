'use client';

import React, { FC, useContext, useMemo } from 'react';

import { CloseIcon } from '@/assets/jsx-icons';
import { SelectValue } from '@/components/Select';
import { FilterContext } from '@/features/filter/filter-context';
import { animeStatusOptions, animeTypesOptions } from '@/features/filter/filter-data';

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
        <CloseIcon />
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
    yearLimit,
    removeType,
    removeGenre,
    removeStatus,
    resetFromYearLimit,
    resetToYearLimit,
    defaultYearLimit,
  } = useContext(FilterContext);

  const typesFilters = useMemo(
    () => animeTypesOptions.filter((option) => type === option.value),
    [type],
  );

  const statusFilters = useMemo(
    () => animeStatusOptions.filter((option) => status === option.value),
    [status],
  );

  const genresFilters = useMemo(
    () => genresData.filter((genre) => genres.includes(genre.slug)),
    [genresData, genres],
  );

  return (
    <div className={styles.wrapper}>
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

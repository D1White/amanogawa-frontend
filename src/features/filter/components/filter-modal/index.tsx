'use client';

import cn from 'classnames';
import React, { memo, useMemo } from 'react';

import { MultiRangeSlider, MultiRangeSliderOnChangeValue } from '@/components';
import { SelectOption, SelectValue, SelectValueOrNull } from '@/components/Select';
import { animeStatusOptions, animeTypesOptions } from '@/features/filter/filter-data';
import { useFilterStore } from '@/store';

import { MultipleFilterSelect, SingleFilterSelect } from '../filter-select';
import filterSelectStyles from '../filter-select/FilterSelect.module.scss';
import styles from './FilterModal.module.scss';

export const FilterModal = memo(() => {
  const {
    genresData,
    type,
    setType,
    genres,
    setGenres,
    status,
    setStatus,
    yearLimit,
    setYearLimit,
    defaultYearLimit,
  } = useFilterStore();

  const genresOptions: SelectOption[] = useMemo(
    () =>
      (genresData || []).map((genre) => ({
        label: genre.name,
        value: genre.slug,
      })),
    [genresData],
  );

  const handleTypesChange = (value: SelectValueOrNull) => {
    setType(value);
  };

  const handleGenreChange = (value: SelectValue[]) => {
    setGenres(value);
  };

  const handleStatusChange = (value: SelectValueOrNull) => {
    setStatus(value);
  };

  const handleYearChange = (value: MultiRangeSliderOnChangeValue) => {
    setYearLimit(value);
  };

  return (
    <div className={styles.modal}>
      <div className="container">
        <SingleFilterSelect
          title="Type"
          value={type}
          options={animeTypesOptions}
          onChange={handleTypesChange}
        />

        <MultipleFilterSelect
          title="Genre"
          values={genres}
          options={genresOptions}
          onChange={handleGenreChange}
        />

        <div className={styles.filtersRowBlock}>
          <SingleFilterSelect
            title="Status"
            value={status}
            options={animeStatusOptions}
            onChange={handleStatusChange}
            centered={false}
          />

          <div className={cn(filterSelectStyles.wrapper, filterSelectStyles.noSpacing)}>
            <p className={cn(filterSelectStyles.title, styles.yearTitle)}>Year</p>

            <MultiRangeSlider
              min={defaultYearLimit.min}
              max={defaultYearLimit.max}
              value={yearLimit}
              onChange={handleYearChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

FilterModal.displayName = 'FilterModal';

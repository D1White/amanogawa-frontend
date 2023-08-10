'use client';

import cn from 'classnames';
import React, { memo, useContext, useMemo } from 'react';

import { MultiRangeSlider, MultiRangeSliderOnChangeValue } from '@/components';
import { SelectOption, SelectValue } from '@/components/Select';
import { FilterContext } from '@/features/filter/filter-context';
import { animeStatusOptions, animeTypesOptions, yearOptions } from '@/features/filter/filter-data';

import { FilterSelect } from '../filter-select';
import filterSelectStyles from '../filter-select/FilterSelect.module.scss';
import styles from './FilterModal.module.scss';

export const FilterModal = memo(() => {
  const {
    genresData,
    types,
    setTypes,
    genres,
    setGenres,
    status,
    setStatus,
    yearLimit,
    setYearLimit,
  } = useContext(FilterContext);

  const genresOptions: SelectOption[] = useMemo(
    () =>
      (genresData || []).map((genre) => ({
        label: genre.name,
        value: genre.slug,
      })),
    [genresData],
  );

  const handleTypesChange = (value: SelectValue[]) => {
    setTypes(value);
  };

  const handleGenreChange = (value: SelectValue[]) => {
    setGenres(value);
  };

  const handleStatusChange = (value: SelectValue[]) => {
    setStatus(value);
  };

  const handleYearChange = (value: MultiRangeSliderOnChangeValue) => {
    setYearLimit(value);
  };

  return (
    <div className={styles.modal}>
      <div className="container">
        <FilterSelect
          title="Type"
          values={types}
          options={animeTypesOptions}
          onChange={handleTypesChange}
        />

        <FilterSelect
          title="Genre"
          values={genres}
          options={genresOptions}
          onChange={handleGenreChange}
        />

        <div className={styles.filtersRowBlock}>
          <FilterSelect
            title="Status"
            values={status}
            options={animeStatusOptions}
            onChange={handleStatusChange}
            centered={false}
          />

          <div className={cn(filterSelectStyles.wrapper, filterSelectStyles.noSpacing)}>
            <p className={cn(filterSelectStyles.title, styles.yearTitle)}>Year</p>

            <MultiRangeSlider
              min={yearOptions.min}
              max={yearOptions.max}
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

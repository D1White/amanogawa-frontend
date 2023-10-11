import qs from 'query-string';

import { AnimeSortField } from '@/utils/api';

import { FilterStore } from './types';

export const filtersUrlParamsSelector = (store: FilterStore) => {
  const { type, status, season, genres, yearLimit, defaultYearLimit, sortField } = store;

  const params = {
    type,
    status,
    season,
    genres,
    min_year: yearLimit.min > defaultYearLimit.min ? yearLimit.min : null,
    max_year: yearLimit.max < defaultYearLimit.max ? yearLimit.max : null,
    sort_field: sortField !== AnimeSortField.createdAt ? sortField : null,
  };

  return qs.stringify(params, {
    arrayFormat: 'bracket',
    skipNull: true,
    skipEmptyString: true,
  });
};

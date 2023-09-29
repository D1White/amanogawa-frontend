import React, { FC } from 'react';

import { AnimeSortField, getAnime, SortDirection } from '@/utils/api';

import { NewAnimeSlider } from './NewAnimeSlider';

export const NewAnime: FC = async () => {
  const anime = await getAnime({
    limit: 5,
    sort_field: AnimeSortField.createdAt,
    sort_direction: SortDirection.DESC,
  });

  if (!anime?.items) {
    return null;
  }

  return <NewAnimeSlider data={anime?.items} />;
};

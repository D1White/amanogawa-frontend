import React, { FC } from 'react';

import { AnimeSortField, getAnime, SortDirection } from '@/utils/api';

import { NewAnimeDesktop } from './components';
import { NewAnimeSliderContextProvider } from './new-anime-context';

export const NewAnime: FC = async () => {
  const anime = await getAnime({
    limit: 5,
    sort_field: AnimeSortField.createdAt,
    sort_direction: SortDirection.DESC,
  });

  if (!anime?.items) {
    return null;
  }

  return (
    <NewAnimeSliderContextProvider>
      <NewAnimeDesktop data={anime?.items} />
    </NewAnimeSliderContextProvider>
  );
};

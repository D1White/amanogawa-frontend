import React, { useCallback, useMemo } from 'react';
import useSWR, { useSWRConfig } from 'swr';

import { SWRKeys } from '@/utils';
import { addFavorite, getFavorites, removeFavorite } from '@/utils/api';

export const useFavorites = (
  animeId: string,
): { onFavorites: boolean; favoriteAction: () => Promise<void> } => {
  const { mutate } = useSWRConfig();

  const { data: favorites } = useSWR(SWRKeys.favorites, getFavorites);

  const onFavorites = useMemo(
    () => !!(favorites && favorites?.some((anime) => anime._id === animeId)),
    [favorites, animeId],
  );

  const favoriteAction = useCallback(async () => {
    if (!favorites) {
      return;
    }

    try {
      if (onFavorites) {
        await removeFavorite(animeId);
      } else {
        await addFavorite(animeId);
      }

      mutate(SWRKeys.favorites);
    } catch (error) {}
  }, [animeId, onFavorites]);

  return { onFavorites, favoriteAction };
};

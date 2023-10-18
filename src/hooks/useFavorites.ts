import React, { useCallback, useMemo } from 'react';

import { useAddFavorite, useGetFavorites, useRemoveFavorite } from './queries';

export const useFavorites = (
  animeId: string,
): { isFavorite: boolean; favoriteAction: () => void } => {
  const { data: favorites } = useGetFavorites();
  const { mutate: addFavorite } = useAddFavorite();
  const { mutate: removeFavorite } = useRemoveFavorite();

  const isFavorite = useMemo(
    () => !!(favorites && favorites?.some((anime) => anime._id === animeId)),
    [favorites, animeId],
  );

  const favoriteAction = useCallback(() => {
    if (!favorites) {
      return;
    }

    if (isFavorite) {
      removeFavorite(animeId);
    } else {
      addFavorite(animeId);
    }
  }, [animeId, isFavorite]);

  return { isFavorite, favoriteAction };
};

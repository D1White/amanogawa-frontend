import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Cookie from 'js-cookie';

import { IAnime, IRating } from '@/types';
import { QueryKeys } from '@/utils';
import {
  addFavorite,
  getAnime,
  getAnimeRating,
  getFavorites,
  getUser,
  removeFavorite,
  updateAnimeRating,
} from '@/utils/api';

export const useGetUser = () => useQuery({ queryKey: [QueryKeys.user], queryFn: getUser });

export const useIsUserAuthorized = () => {
  const accessToken = Cookie.get('access-token');
  const { data: user } = useGetUser();

  return Boolean(user && accessToken);
};

export const useGetRating = (animeId: string) => {
  const isUserAuthorized = useIsUserAuthorized();

  return useQuery({
    queryKey: [QueryKeys.rating, animeId],
    queryFn: () => getAnimeRating(animeId),
    enabled: isUserAuthorized,
  });
};

export const useUpdateRating = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Pick<IRating, 'anime_id' | 'rating'>) => updateAnimeRating(data),
    onSuccess: (data, variables) =>
      queryClient.setQueryData([QueryKeys.rating, variables.anime_id], data),
  });
};

export const useGetFavorites = () => {
  const isUserAuthorized = useIsUserAuthorized();

  return useQuery({
    queryKey: [QueryKeys.favorites],
    queryFn: getFavorites,
    enabled: isUserAuthorized,
  });
};

export const useRemoveFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (animeId: string) => removeFavorite(animeId),
    onSuccess: (_, animeId) =>
      queryClient.setQueryData(
        [QueryKeys.favorites],
        (old?: IAnime[]) => old?.filter((anime) => anime._id !== animeId),
      ),
  });
};
export const useAddFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (animeId: string) => addFavorite(animeId),
    onSuccess: () => queryClient.refetchQueries({ queryKey: [QueryKeys.favorites] }),
  });
};

export const useSearch = (value: string) =>
  useQuery({
    queryKey: [QueryKeys.search, value],
    queryFn: () => getAnime({ search: value, limit: 5 }),
    enabled: !!value,
  });

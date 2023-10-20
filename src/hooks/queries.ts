import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Cookie from 'js-cookie';

import { IAnime, IRating } from '@/types';
import { ACCESS_TOKEN_COOKIE, QueryKeys, REFRESH_TOKEN_COOKIE } from '@/utils';
import {
  addFavorite,
  getAnime,
  getAnimeRating,
  getFavorites,
  getUser,
  login,
  LoginReq,
  logout,
  removeFavorite,
  updateAnimeRating,
} from '@/utils/api';

export const useGetUser = () => {
  const accessToken = Cookie.get(ACCESS_TOKEN_COOKIE);
  const refreshToken = Cookie.get(REFRESH_TOKEN_COOKIE);

  return useQuery({
    queryKey: [QueryKeys.user],
    queryFn: getUser,
    enabled: Boolean(accessToken || refreshToken),
  });
};

export const useIsUserAuthorized = () => {
  const accessToken = Cookie.get(ACCESS_TOKEN_COOKIE);
  const { data: user } = useGetUser();

  return Boolean(user && accessToken);
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginReq) => login(data),
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [QueryKeys.favorites] });
      queryClient.removeQueries({ queryKey: [QueryKeys.rating] });
      queryClient.setQueryData([QueryKeys.user], null);
      queryClient.removeQueries({ queryKey: [QueryKeys.user] });
    },
  });
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

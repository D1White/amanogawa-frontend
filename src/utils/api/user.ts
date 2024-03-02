import axios from 'axios';
import Cookie from 'js-cookie';

import { IAnime, IPublicUser, IRating, IUser } from '@/types';

import { ACCESS_TOKEN_COOKIE } from '../constants';
import { clearAuthCookie } from '../cookie';
import { refreshAuthTokens } from './auth';

const axiosUserApiInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/user`,
});

axiosUserApiInstance.interceptors.request.use(
  async (config) => {
    const accessToken = Cookie.get(ACCESS_TOKEN_COOKIE);
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosUserApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      try {
        await refreshAuthTokens();
        originalRequest._retry = true;
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        return axiosUserApiInstance(originalRequest);
      } catch (refreshErr) {
        clearAuthCookie();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

export const getUser = async (): Promise<IUser> => {
  try {
    const { data } = await axiosUserApiInstance.get<IUser>('');

    return data;
  } catch (error) {
    throw error;
  }
};

export const getPublicUser = async (username: string): Promise<IPublicUser> => {
  try {
    const { data } = await axiosUserApiInstance.get<IPublicUser>(`/${username}`);

    return data;
  } catch (error) {
    throw error;
  }
};

// Rating
export const getAnimeRating = async (animeId: string): Promise<IRating> => {
  try {
    const { data } = await axiosUserApiInstance.get<IRating>(`/${animeId}`, {
      baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/rating`,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const updateAnimeRating = async (
  body: Pick<IRating, 'anime_id' | 'rating'>,
): Promise<IRating> => {
  try {
    const { data } = await axiosUserApiInstance.post<IRating>(``, body, {
      baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/rating`,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

// Favorites
export const getFavorites = async (): Promise<IAnime[]> => {
  try {
    const { data } = await axiosUserApiInstance.get<IAnime[]>('/favorites');

    return data;
  } catch (error) {
    throw error;
  }
};

export const getPublicFavorites = async (username: string): Promise<IAnime[]> => {
  try {
    const { data } = await axiosUserApiInstance.get<IAnime[]>(`/favorites/${username}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export const addFavorite = async (animeId: string): Promise<void> => {
  try {
    await axiosUserApiInstance.post('/favorites/add', { anime_id: animeId });
  } catch (error) {
    throw error;
  }
};

export const removeFavorite = async (animeId: string): Promise<void> => {
  try {
    await axiosUserApiInstance.post('/favorites/remove', { anime_id: animeId });
  } catch (error) {
    throw error;
  }
};

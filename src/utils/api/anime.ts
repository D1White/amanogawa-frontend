import { IAnimeParams, IAnimeResponse } from './types';

export const getAnime = async (params?: IAnimeParams): Promise<IAnimeResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime${params ? '?' : ''}` +
      new URLSearchParams(params as Record<string, string>),
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch anime data');
  }

  return res.json();
};

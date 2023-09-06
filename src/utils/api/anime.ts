import qs from 'query-string';

import { IAnime, IAnimeFull } from '@/types';

import { IAnimeParams, IAnimeResponse } from './types';

export const getAnime = async (params?: IAnimeParams): Promise<IAnimeResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime${params ? '?' : ''}` +
      (params ? qs.stringify(params, { arrayFormat: 'bracket', skipNull: true }) : ''),
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch anime data');
  }

  return res.json();
};

export const getOneAnime = async (slug: string): Promise<IAnimeFull> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${slug}/full`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch anime data');
  }

  return res.json();
};

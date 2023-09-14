import qs from 'query-string';

import { IAnimeFull, IAnimeGroup } from '@/types';

import { IAnimeParams, IAnimeResponse, IAnimeYearsResponse } from './types';

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

export const getAnimeByGroup = async (group: string): Promise<IAnimeGroup[]> => {
  const revalidateInSeconds = 3 * 60 * 60;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/group/${group}`, {
    next: { revalidate: revalidateInSeconds },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch anime data');
  }

  return res.json();
};

export const getAnimeYears = async (): Promise<IAnimeYearsResponse> => {
  const revalidateInSeconds = 6 * 60 * 60;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/years`, {
    next: { revalidate: revalidateInSeconds },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch anime data');
  }

  return res.json();
};

import qs from 'query-string';

import { IAnimeParams, IAnimeResponse } from './types';

export const getAnime = async (params?: IAnimeParams): Promise<IAnimeResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime${params ? '?' : ''}` +
      (params ? qs.stringify(params, { arrayFormat: 'bracket', skipNull: true }) : ''),
    {
      cache: 'no-store',
    },
  );

  console.log({ params });

  if (!res.ok) {
    console.log(res);

    throw new Error('Failed to fetch anime data');
  }

  return res.json();
};

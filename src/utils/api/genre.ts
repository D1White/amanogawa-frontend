import { IGenre } from '@/types';

export const getGenres = async (): Promise<IGenre[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/genre`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch anime data');
  }

  return res.json();
};

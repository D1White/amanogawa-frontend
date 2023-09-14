import { IEpisodeResponse } from './types';

export const getEpisode = async (id: string): Promise<IEpisodeResponse> => {
  const revalidateInSeconds = 1 * 60 * 60;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/episode/${id}`, {
    next: { revalidate: revalidateInSeconds },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch episode data');
  }

  return res.json();
};

import { IComment } from '@/types';

import { QueryKeys } from '../query-keys';
import { axiosUserApiInstance } from './user';

export const getComments = async (animeId: string): Promise<IComment[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/comment/anime/${animeId}`, {
    cache: 'no-store',
    next: { tags: [QueryKeys.comments] },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch comments');
  }

  return res.json();
};

export const addComment = async (body: Pick<IComment, 'anime' | 'text'>): Promise<IComment> => {
  try {
    const { data } = await axiosUserApiInstance.post<IComment>('', body, {
      baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/comment`,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (commentId: string): Promise<void> => {
  try {
    await axiosUserApiInstance.delete<IComment>(`/${commentId}`, {
      baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/comment`,
    });
  } catch (error) {
    throw error;
  }
};

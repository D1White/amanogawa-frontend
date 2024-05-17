import axios from 'axios';

import { SearchRes } from './types';

export const search = async (value: string) => {
  try {
    const { data } = await axios.get<SearchRes>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/search?search=${value}`,
    );

    return data;
  } catch (error) {
    throw error;
  }
};

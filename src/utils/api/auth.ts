import axios from 'axios';

import { AuthTokens } from '@/types';

import { ErrorRes, LoginReq } from './types';

export const login = async (body: LoginReq): Promise<AuthTokens> => {
  try {
    const { data } = await axios.post<AuthTokens>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      body,
      { withCredentials: true },
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const refreshAuthTokens = async (): Promise<AuthTokens> => {
  try {
    const { data } = await axios.get<AuthTokens>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`,
      { withCredentials: true },
    );

    return data;
  } catch (error) {
    throw error;
  }
};

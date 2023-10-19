import axios from 'axios';
import Cookie from 'js-cookie';

import { AuthTokens } from '@/types';

import { LoginReq, SignUpReq } from './types';

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

export const signUp = async (body: SignUpReq): Promise<AuthTokens> => {
  try {
    const { data } = await axios.post<AuthTokens>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
      body,
      { withCredentials: true },
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const validateEmail = async (email: string): Promise<boolean> => {
  try {
    const { data } = await axios.get<boolean>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/email/${email}`,
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const validateUsername = async (username: string): Promise<boolean> => {
  try {
    const { data } = await axios.get<boolean>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/email/${username}`,
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

export const logout = async (): Promise<void> => {
  const accessToken = Cookie.get('access-token');
  try {
    await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });
  } catch (error) {
    throw error;
  }
};

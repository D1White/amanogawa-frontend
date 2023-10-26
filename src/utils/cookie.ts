import Cookie from 'js-cookie';

import { AuthTokens } from '@/types';

import { ACCESS_TOKEN_COOKIE, REFRESH_TOKEN_COOKIE } from './constants';

export const setAuthCookie = (tokens: AuthTokens) => {
  if (!tokens) {
    return;
  }

  Cookie.set(ACCESS_TOKEN_COOKIE, tokens.access_token);
  Cookie.set(REFRESH_TOKEN_COOKIE, tokens.refresh_token);
};

export const clearAuthCookie = () => {
  Cookie.remove(ACCESS_TOKEN_COOKIE);
  Cookie.remove(REFRESH_TOKEN_COOKIE);
};

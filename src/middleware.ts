import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ACCESS_TOKEN_COOKIE, PagesPath, privateRoutes } from '@/utils';

export function middleware(req: NextRequest) {
  const isAccessToken = req.cookies.has(ACCESS_TOKEN_COOKIE);

  if (!isAccessToken) {
    return NextResponse.redirect(new URL(PagesPath.login, req.url));
  }
}

export const config = {
  matcher: ['/account', '/my-list'],
};

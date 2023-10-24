'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { FC, PropsWithChildren, useEffect } from 'react';

import { useGetUser } from '@/hooks';
import { PagesPath, privateRoutes } from '@/utils';

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { data: user, isFetching } = useGetUser();

  useEffect(() => {
    if (privateRoutes.includes(pathname) && !user && !isFetching) {
      router.push(PagesPath.login);
    }
  }, [pathname, user, isFetching]);

  return <>{children}</>;
};

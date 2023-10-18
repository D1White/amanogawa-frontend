'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { FC, PropsWithChildren } from 'react';

import { useGetUser } from '@/hooks';
import { PagesPath, privateRoutes } from '@/utils';

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { data: user, isFetching } = useGetUser();

  if (privateRoutes.includes(pathname) && !user && !isFetching) {
    router.push(PagesPath.login);
  }

  return <>{children}</>;
};

'use client';

import { AxiosError } from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import React, { FC, PropsWithChildren } from 'react';
import useSWR from 'swr';

import { IUser, PagesPath, privateRoutes } from '@/types';
import { SWRKeys } from '@/utils';
import { ErrorRes, getUser } from '@/utils/api';

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { data: user } = useSWR<IUser, AxiosError<ErrorRes>>(SWRKeys.user, getUser);

  if (privateRoutes.includes(pathname) && !user) {
    router.push(PagesPath.login);
  }

  return <>{children}</>;
};

'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

import { UserIcon } from '@/assets/jsx-icons';
import { PagesPath } from '@/types';
import { SWRKeys } from '@/utils';

import headerStyles from '../Header.module.scss';

export const HeaderUser = () => {
  const router = useRouter();
  const { data: user } = useSWR(SWRKeys.user);

  const handleClick = () => {
    router.push(user ? PagesPath.account : PagesPath.login);
  };

  return (
    <button className={headerStyles.userButton} onClick={handleClick}>
      <UserIcon />
    </button>
  );
};

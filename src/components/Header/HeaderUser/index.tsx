'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Blockies from 'react-blockies';
import useSWR from 'swr';

import { UserIcon } from '@/assets/jsx-icons';
import colors from '@/styles/variables/colors/colors.module.scss';
import { PagesPath, SWRKeys } from '@/utils';

import headerStyles from '../Header.module.scss';

export const HeaderUser = () => {
  const router = useRouter();
  const { data: user } = useSWR(SWRKeys.user);

  const handleClick = () => {
    router.push(user ? PagesPath.account : PagesPath.login);
  };

  return (
    <button className={headerStyles.userButton} onClick={handleClick}>
      {user?.username ? (
        <Blockies seed={user.username} size={8} scale={3} bgColor={colors.grayDark} />
      ) : (
        <UserIcon />
      )}
    </button>
  );
};

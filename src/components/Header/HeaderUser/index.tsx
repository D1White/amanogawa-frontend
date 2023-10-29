'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Blockies from 'react-blockies';

import { UserIcon } from '@/assets/jsx-icons';
import { useGetUser } from '@/hooks';
import colors from '@/styles/variables/colors/colors.module.scss';
import { PagesPath } from '@/utils';

import headerStyles from '../Header.module.scss';

const HeaderUser = () => {
  const router = useRouter();

  const { data: user } = useGetUser();

  const handleClick = () => {
    router.push(user ? PagesPath.account : PagesPath.login);
  };

  return (
    <button className={headerStyles.userButton} onClick={handleClick} aria-label="Акаунт">
      {user?.username ? (
        <Blockies seed={user.username} size={8} scale={3} bgColor={colors.grayDark} />
      ) : (
        <UserIcon />
      )}
    </button>
  );
};

export default HeaderUser;

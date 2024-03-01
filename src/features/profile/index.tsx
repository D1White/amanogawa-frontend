'use client';

import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import Blockies from 'react-blockies';

import NotFound from '@/app/not-found';
import { Badge } from '@/components';
import { useGetUserByUsername, useLogout } from '@/hooks';
import colors from '@/styles/variables/colors/colors.module.scss';
import { IUser } from '@/types';
import { PagesPath } from '@/utils';

import styles from './profile.module.scss';
import { daysDifference, daysFormat } from './utils';

interface ProfileProps {
  username: string;
}

export const Profile: FC<ProfileProps> = ({ username }) => {
  const router = useRouter();
  const user = useGetUserByUsername(username);
  const typedUser = user as IUser;

  const { mutate } = useLogout();

  if (!typedUser) return null;

  const daysOnService = typedUser?.created_at ? daysDifference(typedUser.created_at) : null;

  const logout = () => {
    router.push(PagesPath.home);
    mutate();
  };

  console.log(typedUser);

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Blockies seed={typedUser.username} size={8} scale={14} bgColor={colors.grayDark} />
      </div>

      <p className={styles.username}>{typedUser.username}</p>
      <p className={styles.email}>{typedUser.email}</p>

      {!!daysOnService && (
        <Badge
          text={`${daysOnService} ${daysFormat(daysOnService)} з нами`}
          uppercase={false}
          className={styles.badge}
        />
      )}

      <button className={styles.logoutButton} onClick={logout}>
        Вийти
      </button>
    </div>
  );
};

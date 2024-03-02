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
  const { data, isFetching, isCurrentUser } = useGetUserByUsername(username);
  const user = data as IUser;

  const { mutate } = useLogout();

  if (!user && !isFetching) {
    return null;
  }

  const daysOnService = user?.created_at ? daysDifference(user.created_at) : null;

  const logout = () => {
    router.push(PagesPath.home);
    mutate();
  };

  return (
    <div className={styles.wrapper}>
      {!isFetching && (
        <>
          <div className={styles.avatar}>
            <Blockies seed={user.username} size={8} scale={14} bgColor={colors.grayDark} />
          </div>

          <p className={styles.username}>{user.username}</p>
          <p className={styles.email}>{user.email}</p>

          {!!daysOnService && (
            <Badge
              text={`${daysOnService} ${daysFormat(daysOnService)} з нами`}
              uppercase={false}
              className={styles.badge}
            />
          )}

          {isCurrentUser && (
            <button className={styles.logoutButton} onClick={logout}>
              Вийти
            </button>
          )}
        </>
      )}
    </div>
  );
};

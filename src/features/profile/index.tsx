'use client';

import 'react-loading-skeleton/dist/skeleton.css';

import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import Blockies from 'react-blockies';
import Skeleton from 'react-loading-skeleton';

import { Badge } from '@/components';
import { useGetUserByUsername, useLogout } from '@/hooks';
import colors from '@/styles/variables/colors/colors.module.scss';
import { IUser } from '@/types';
import { PagesPath, skeletonDefaultProps } from '@/utils';

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

  const daysOnService = user?.created_at ? daysDifference(user.created_at) : null;

  const logout = () => {
    router.push(PagesPath.home);
    mutate();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        {user?.username ? (
          <Blockies seed={user.username} size={8} scale={14} bgColor={colors.grayDark} />
        ) : (
          <Skeleton containerClassName={styles.avatarLoader} circle {...skeletonDefaultProps} />
        )}
      </div>

      <p className={styles.username}>
        {isFetching ? <Skeleton width={140} {...skeletonDefaultProps} /> : user?.username}
      </p>
      <p className={styles.email}>
        {isFetching ? <Skeleton width={160} {...skeletonDefaultProps} /> : user?.email}
      </p>

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
    </div>
  );
};

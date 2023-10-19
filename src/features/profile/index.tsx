'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Blockies from 'react-blockies';

import { Badge } from '@/components';
import { useGetUser, useLogout } from '@/hooks';
import colors from '@/styles/variables/colors/colors.module.scss';
import { PagesPath } from '@/utils';

import styles from './profile.module.scss';
import { daysDifference, daysFormat } from './utils';

export const Profile = () => {
  const router = useRouter();
  const { data: user } = useGetUser();
  const { mutateAsync } = useLogout();

  if (!user) return null;

  const daysOnService = user?.created_at ? daysDifference(user.created_at) : null;

  const logout = async () => {
    await mutateAsync();
    router.push(PagesPath.home);
  };

  return (
    <div className={styles.wrapper}>
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

      <button className={styles.logoutButton} onClick={logout}>
        Вийти
      </button>
    </div>
  );
};

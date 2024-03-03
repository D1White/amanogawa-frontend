'use client';

import cn from 'classnames';
import React, { FC, memo, useCallback, useState } from 'react';

import { useGetUser, useUpdateUserPrivacy } from '@/hooks';

import styles from './privacy-toggle.module.scss';

export const PrivacyToggle: FC = memo(() => {
  const { data: user } = useGetUser();
  const isPublic = !!user?.isPublic;

  const { mutate } = useUpdateUserPrivacy();

  const handleClick = useCallback((isPublicClick: boolean) => {
    if (user) {
      mutate({ userId: user._id, isPublic: isPublicClick });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <button
        className={cn(styles.item, { [styles.checked]: !isPublic })}
        onClick={() => handleClick(false)}
      >
        Приватний
      </button>
      <button
        className={cn(styles.item, { [styles.checked]: isPublic })}
        onClick={() => handleClick(true)}
      >
        Публічний
      </button>
    </div>
  );
});

PrivacyToggle.displayName = 'PrivacyToggle';

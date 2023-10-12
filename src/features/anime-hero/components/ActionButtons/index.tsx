'use client';

import React, { FC, useCallback } from 'react';
import useSWR from 'swr';

import { SaveIcon } from '@/assets/jsx-icons';
import { BigButton } from '@/components';
import { useFavorites } from '@/hooks';
import colors from '@/styles/variables/colors/colors.module.scss';
import { IUser } from '@/types';
import { SWRKeys } from '@/utils';

import styles from './action-buttons.module.scss';

interface ActionButtonsProps {
  animeId: string;
}

export const ActionButtons: FC<ActionButtonsProps> = ({ animeId }) => {
  const { data: user } = useSWR<IUser>(SWRKeys.user);
  const { onFavorites, favoriteAction } = useFavorites(animeId);

  const icon = useCallback(
    () => (
      <SaveIcon
        fill={onFavorites ? colors.yellow : colors.white}
        stroke={onFavorites ? colors.yellow : colors.white}
      />
    ),
    [onFavorites],
  );

  if (!user) {
    return null;
  }

  return (
    <div className={styles.actionButtons}>
      <BigButton
        text={onFavorites ? 'Remove from list' : 'Add to list'}
        icon={icon}
        styling="black"
        onClick={favoriteAction}
      />
    </div>
  );
};

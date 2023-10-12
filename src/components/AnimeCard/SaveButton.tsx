'use client';

import cn from 'classnames';
import React, { FC, MouseEvent } from 'react';
import useSWR from 'swr';

import { SaveIcon } from '@/assets/jsx-icons';
import { useFavorites } from '@/hooks';
import colors from '@/styles/variables/colors/colors.module.scss';
import { SWRKeys } from '@/utils';

import styles from './AnimeCard.module.scss';

interface SaveButtonProps {
  animeId: string;
}

export const SaveButton: FC<SaveButtonProps> = ({ animeId }) => {
  const { data: user } = useSWR(SWRKeys.user);
  const { onFavorites, favoriteAction } = useFavorites(animeId);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    favoriteAction();
  };

  if (!user) {
    return null;
  }

  return (
    <div className={cn(styles.actionButton, styles.actionButton__save)} onClick={handleClick}>
      <SaveIcon
        fill={onFavorites ? colors.yellow : colors.white}
        stroke={onFavorites ? colors.yellow : colors.white}
      />
    </div>
  );
};

'use client';

import cn from 'classnames';
import React, { FC, MouseEvent } from 'react';

import { SaveIcon } from '@/assets/jsx-icons';
import { useFavorites } from '@/hooks';
import { useIsUserAuthorized } from '@/hooks';
import colors from '@/styles/variables/colors/colors.module.scss';

import styles from './AnimeCard.module.scss';

interface SaveButtonProps {
  animeId: string;
}

export const SaveButton: FC<SaveButtonProps> = ({ animeId }) => {
  const isUserAuthorized = useIsUserAuthorized();
  const { isFavorite, favoriteAction } = useFavorites(animeId);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    favoriteAction();
  };

  if (!isUserAuthorized) {
    return null;
  }

  return (
    <div className={cn(styles.actionButton, styles.actionButton__save)} onClick={handleClick}>
      <SaveIcon
        fill={isFavorite ? colors.yellow : colors.white}
        stroke={isFavorite ? colors.yellow : colors.white}
      />
    </div>
  );
};

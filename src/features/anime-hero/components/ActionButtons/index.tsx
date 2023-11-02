'use client';

import React, { FC, useCallback } from 'react';

import { SaveIcon } from '@/assets/jsx-icons';
import { BigButton } from '@/components';
import { useFavorites } from '@/hooks';
import { useIsUserAuthorized } from '@/hooks';
import colors from '@/styles/variables/colors/colors.module.scss';

import styles from './action-buttons.module.scss';

interface ActionButtonsProps {
  animeId: string;
}

export const ActionButtons: FC<ActionButtonsProps> = ({ animeId }) => {
  const isUserAuthorized = useIsUserAuthorized();
  const { isFavorite, favoriteAction } = useFavorites(animeId);

  const icon = useCallback(
    () => (
      <SaveIcon
        fill={isFavorite ? colors.yellow : colors.white}
        stroke={isFavorite ? colors.yellow : colors.white}
      />
    ),
    [isFavorite],
  );

  if (!isUserAuthorized) {
    return null;
  }

  return (
    <div className={styles.actionButtons}>
      <BigButton
        text={isFavorite ? 'Видалити з обраного' : 'Додати до обраного'}
        icon={icon}
        styling="black"
        onClick={favoriteAction}
      />
    </div>
  );
};

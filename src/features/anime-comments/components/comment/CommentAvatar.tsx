'use client';

import React, { FC } from 'react';
import Blockies from 'react-blockies';

import colors from '@/styles/variables/colors/colors.module.scss';

import styles from './comment.module.scss';

interface CommentAvatarProps {
  username: string;
}

export const CommentAvatar: FC<CommentAvatarProps> = ({ username }) => {
  return (
    <Blockies
      seed={username}
      size={8}
      scale={8}
      bgColor={colors.grayDark}
      className={styles.avatar}
    />
  );
};

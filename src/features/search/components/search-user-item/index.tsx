import Link from 'next/link';
import React, { FC } from 'react';
import Blockies from 'react-blockies';

import colors from '@/styles/variables/colors/colors.module.scss';
import { IUser } from '@/types';
import { PagesPath } from '@/utils';

import styles from './search-user-item.module.scss';

interface SearchAnimeItemProps {
  username: string;
  onClose: () => void;
}

export const SearchUserItem: FC<SearchAnimeItemProps> = ({ username, onClose }) => {
  return (
    <Link href={`${PagesPath.user}/${username}`} onClick={onClose} className={styles.result}>
      <Blockies
        seed={username}
        size={8}
        scale={6}
        bgColor={colors.grayDark}
        className={styles.avatar}
      />

      <p className={styles.username}>@{username}</p>
    </Link>
  );
};

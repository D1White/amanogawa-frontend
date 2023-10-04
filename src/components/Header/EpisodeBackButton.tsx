'use client';

import cn from 'classnames';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { FC } from 'react';

import { ArrowNarrowLeftIcon } from '@/assets/jsx-icons';
import { PagesPath } from '@/utils';

import styles from './Header.module.scss';

interface EpisodeBackButtonProps {
  className?: string;
}

export const EpisodeBackButton: FC<EpisodeBackButtonProps> = ({ className }) => {
  const params = useParams();

  const link = PagesPath.anime + `/${params?.slug}`;

  if (!params?.slug || !params?.episode_id) {
    return null;
  }

  return (
    <Link href={link} className={cn(styles.backButton, className)}>
      <ArrowNarrowLeftIcon />
      Back
    </Link>
  );
};

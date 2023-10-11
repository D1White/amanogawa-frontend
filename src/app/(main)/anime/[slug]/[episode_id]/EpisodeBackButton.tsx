'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { FC } from 'react';

import { ArrowNarrowLeftIcon } from '@/assets/jsx-icons';
import { PagesPath } from '@/utils';

import styles from './episode_page.module.scss';

export const EpisodeBackButton: FC = () => {
  const params = useParams();

  const link = PagesPath.anime + `/${params?.slug}`;

  return (
    <Link href={link} className={styles.backButton}>
      <ArrowNarrowLeftIcon />
      Назад до аніме
    </Link>
  );
};

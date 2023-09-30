'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import { ArrowNarrowLeftIcon } from '@/assets/jsx-icons';
import { PagesPath } from '@/utils';

import styles from './Header.module.scss';

export const EpisodeBackButton = () => {
  const params = useParams();

  const link = PagesPath.anime + `/${params?.slug}`;

  if (!params?.slug || !params?.episode_id) {
    return null;
  }

  return (
    <Link href={link} className={styles.backButton}>
      <ArrowNarrowLeftIcon />
      Back
    </Link>
  );
};

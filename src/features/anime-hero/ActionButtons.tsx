'use client';

import React from 'react';

import { PlayIcon, SaveIcon } from '@/assets/jsx-icons';
import { BigButton } from '@/components';

import styles from './anime-hero.module.scss';

export const ActionButtons = () => {
  return (
    <div className={styles.actionButtons}>
      <BigButton text="Watch" icon={PlayIcon} onClick={() => {}} />
      <BigButton text="Add to list" icon={SaveIcon} styling="black" onClick={() => {}} />
    </div>
  );
};

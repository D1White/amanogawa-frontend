'use client';

import React from 'react';

import { SaveIcon } from '@/assets/jsx-icons';
import { BigButton } from '@/components';

import styles from './action-buttons.module.scss';

export const ActionButtons = () => {
  return (
    <div className={styles.actionButtons}>
      <BigButton text="Add to list" icon={SaveIcon} styling="black" onClick={() => {}} />
    </div>
  );
};

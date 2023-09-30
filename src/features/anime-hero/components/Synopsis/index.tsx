'use client';

import cn from 'classnames';
import React, { FC, useState } from 'react';

import { ArrowRightIcon } from '@/assets/jsx-icons';

import styles from './synopsis.module.scss';

interface SynopsisProps {
  data: string;
}

export const Synopsis: FC<SynopsisProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <p className={cn(styles.text, { open: isOpen })}>{data}</p>

      <button className={cn(styles.button, { open: isOpen })} onClick={handleClick}>
        Read More
        <ArrowRightIcon />
      </button>
    </div>
  );
};

'use client';

import cn from 'classnames';
import React, { FC, useState } from 'react';

import { ArrowRightIcon } from '@/assets/jsx-icons';

import styles from './synopsis.module.scss';

interface SynopsisProps {
  data: string;
}

export const Synopsis: FC<SynopsisProps> = ({ data }) => {
  const enableReadMore = data.length > 350;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <p className={cn(styles.text, { open: enableReadMore ? isOpen : true })}>{data}</p>

      {enableReadMore && (
        <button className={cn(styles.button, { open: isOpen })} onClick={handleClick}>
          Детальніше
          <ArrowRightIcon />
        </button>
      )}
    </div>
  );
};

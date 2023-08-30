'use client';

import cn from 'classnames';
import React, { FC } from 'react';

import { ArrowRightPipeIcon } from '@/assets/jsx-icons';

import styles from './pagination.module.scss';

interface PaginationProps {
  activePage: number;
  pages: number;
  setPage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ activePage, pages, setPage = () => {} }) => {
  return (
    <div className={styles.pagination}>
      <button className={cn(styles.arrowButton, styles.rotate)} onClick={() => setPage(1)}>
        <ArrowRightPipeIcon />
      </button>

      {new Array(pages).fill(null).map((_, idx) => (
        <button
          className={cn(styles.pageButton, { [styles.active]: idx + 1 === activePage })}
          onClick={() => setPage(idx + 1)}
          key={idx}
        >
          {idx + 1}
        </button>
      ))}

      <button className={styles.arrowButton} onClick={() => setPage(pages)}>
        <ArrowRightPipeIcon />
      </button>
    </div>
  );
};

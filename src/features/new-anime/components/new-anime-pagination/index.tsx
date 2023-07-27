import React, { memo, useContext } from 'react';

import { PaginationActiveCircle, PaginationCircle } from '@/assets/jsx-icons';
import { NewAnimeSliderContext } from '@/features/new-anime/new-anime-context';

import styles from './NewAnimePagination.module.scss';

export const NewAnimePagination = memo(() => {
  const { slidesLength, activeSlide, setActiveSlide } = useContext(NewAnimeSliderContext);

  return (
    <div className={styles.pagination}>
      {new Array(slidesLength).fill(undefined).map((_, idx) => (
        <button className={styles.circle} onClick={() => setActiveSlide(idx + 1)} key={idx}>
          {activeSlide === idx + 1 ? <PaginationActiveCircle /> : <PaginationCircle />}
        </button>
      ))}
    </div>
  );
});

NewAnimePagination.displayName = 'NewAnimePagination';

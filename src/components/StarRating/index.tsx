'use client';

import React, { Dispatch, FC, useState } from 'react';

import { Star } from './Star';
import styles from './star-rating.module.scss';

interface StarRatingProps {
  rating: number;
  readOnly?: boolean;
  onChange: Dispatch<number>;
}

export const StarRating: FC<StarRatingProps> = ({ rating, readOnly, onChange }) => {
  const [hover, setHover] = useState<number | null>(null);

  const handleSetRating = (value: number) => {
    if (readOnly) return;

    onChange(value);
  };

  const handleHover = (value: number | null) => {
    if (readOnly) return;

    setHover(value);
  };

  return (
    <div className={styles.starList}>
      {[...Array(5)].map((_, idx) => (
        <Star
          rating={rating}
          setRating={handleSetRating}
          hover={hover}
          setHover={handleHover}
          value={idx + 1}
          key={idx}
        />
      ))}
    </div>
  );
};

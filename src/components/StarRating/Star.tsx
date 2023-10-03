import React, { Dispatch, FC } from 'react';

import { StarIcon } from '@/assets/jsx-icons';
import colors from '@/styles/variables/colors/colors.module.scss';

import styles from './star-rating.module.scss';

interface StarProps {
  value: number;
  hover: number | null;
  rating: number;
  setHover: Dispatch<number | null>;
  setRating: Dispatch<number>;
}

export const Star: FC<StarProps> = ({ value, hover, rating, setHover, setRating }) => {
  return (
    <button
      className={styles.star}
      onClick={() => setRating(value)}
      onMouseEnter={() => setHover(value)}
      onMouseLeave={() => setHover(null)}
    >
      <StarIcon
        width={28}
        height={28}
        fill={value <= (hover || rating) ? colors.yellow : colors.grayDark}
      />
    </button>
  );
};

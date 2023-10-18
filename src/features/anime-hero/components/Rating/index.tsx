'use client';

import cn from 'classnames';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

import { StarIcon } from '@/assets/jsx-icons';
import { StarRating } from '@/components/StarRating';
import { useGetRating, useIsUserAuthorized, useUpdateRating } from '@/hooks';
import blocksStyles from '@/styles/variables/blocks/blocks.module.scss';

import styles from './rating.module.scss';

interface RatingProps {
  animeId: string;
  rating?: number;
  ratingCount?: number;
}

export const Rating: FC<RatingProps> = ({ animeId, rating, ratingCount }) => {
  const router = useRouter();

  const isUserAuthorized = useIsUserAuthorized();
  const { data: userRating } = useGetRating(animeId);
  const { mutateAsync } = useUpdateRating();

  const changeRating = async (newRating: number) => {
    try {
      await mutateAsync({ anime_id: animeId, rating: newRating });
      router.refresh();
    } catch (error) {}
  };

  if (!rating && !isUserAuthorized) {
    return null;
  }

  return (
    <div className={styles.ratingWrapper}>
      <div className={blocksStyles.flexCenteredVertically}>
        {isUserAuthorized && (
          <StarRating rating={userRating?.rating || 0} onChange={changeRating} />
        )}

        {!!userRating && <p className={cn(styles.ratingText, styles.user)}>{userRating.rating}</p>}
      </div>

      {!!rating && (
        <>
          <hr className={styles.divider} />

          <div className={blocksStyles.flexCenteredVertically}>
            <p className={cn(styles.ratingText, styles.avg)}>Рейтинг:</p>

            <StarIcon width={28} height={28} />
            <p className={cn(styles.ratingText, styles.general)}>{rating}</p>

            {!!ratingCount && <p className={styles.ratingsCount}>({ratingCount})</p>}
          </div>
        </>
      )}
    </div>
  );
};

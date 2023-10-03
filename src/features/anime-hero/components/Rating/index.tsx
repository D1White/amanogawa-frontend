'use client';

import cn from 'classnames';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import useSWR from 'swr';

import { StarIcon } from '@/assets/jsx-icons';
import { StarRating } from '@/components';
import { IUser } from '@/types';
import { SWRKeys } from '@/utils';
import { getAnimeRating, updateAnimeRating } from '@/utils/api';

import styles from './rating.module.scss';

interface RatingProps {
  animeId: string;
  rating?: number;
  ratingCount?: number;
}

export const Rating: FC<RatingProps> = ({ animeId, rating, ratingCount }) => {
  const router = useRouter();

  const { data: user } = useSWR<IUser>(SWRKeys.user);
  const { data: userRating, mutate } = useSWR(
    !!user?._id ? [SWRKeys.rating, animeId] : null,
    ([key, animeId]) => getAnimeRating(animeId),
  );

  const changeRating = async (newRating: number) => {
    try {
      const updatedRating = await updateAnimeRating({ anime_id: animeId, rating: newRating });
      mutate(updatedRating);
      router.refresh();
    } catch (error) {}
  };

  if (!userRating && !rating) {
    return null;
  }

  return (
    <div className={styles.ratingWrapper}>
      {!!userRating && (
        <>
          <StarRating rating={userRating.rating} onChange={changeRating} />

          <p className={cn(styles.ratingText, styles.user)}>{userRating.rating}</p>

          <hr className={styles.divider} />
        </>
      )}

      {!!rating && (
        <>
          <StarIcon width={28} height={28} />
          <p className={cn(styles.ratingText, styles.general)}>{rating}</p>

          {!!ratingCount && <p className={styles.ratingsCount}>({ratingCount})</p>}
        </>
      )}
    </div>
  );
};

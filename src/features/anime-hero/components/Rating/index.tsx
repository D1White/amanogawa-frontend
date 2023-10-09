'use client';

import cn from 'classnames';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import useSWR from 'swr';

import { StarIcon } from '@/assets/jsx-icons';
import { StarRating } from '@/components/StarRating';
import blocksStyles from '@/styles/variables/blocks/blocks.module.scss';
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

  if (!rating && !user) {
    return null;
  }

  return (
    <div className={styles.ratingWrapper}>
      <div className={blocksStyles.flexCenteredVertically}>
        {!!user && <StarRating rating={userRating?.rating || 0} onChange={changeRating} />}

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

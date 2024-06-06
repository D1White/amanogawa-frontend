import React, { FC } from 'react';

import { IComment } from '@/types';

import styles from './anime-comments.module.scss';
import { Comment } from './components/comment';
import { CommentTextField } from './components/comment-text-field';

interface AnimeCommentsProps {
  data: IComment[];
  animeId: string;
}

export const AnimeComments: FC<AnimeCommentsProps> = ({ data, animeId }) => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.count}>{`${data.length} Коментар${data.length === 1 ? '' : 'і'}`}</p>

      <CommentTextField animeId={animeId} />

      <div className={styles.divider} />

      <div className={styles.comments}>
        {data.map((comment) => (
          <Comment data={comment} key={comment._id} />
        ))}
      </div>
    </section>
  );
};

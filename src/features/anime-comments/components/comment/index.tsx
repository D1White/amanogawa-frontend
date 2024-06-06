import React, { FC } from 'react';

import { IComment } from '@/types';
import { isToday } from '@/utils/is-today';

import { DeleteComment } from '../delete-comment';
import styles from './comment.module.scss';
import { CommentAvatar } from './CommentAvatar';

interface CommentProps {
  data: IComment;
}

export const Comment: FC<CommentProps> = ({ data }) => {
  const date = new Date(data.created_at).toLocaleDateString('uk-UA', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
  const time = new Date(data.created_at).toTimeString().slice(0, 5);

  return (
    <div className={styles.wrapper}>
      <CommentAvatar username={data.user.username} />

      <div className={styles.commentBlock}>
        <div className={styles.commentHeader}>
          <p className={styles.username}>{data.user.username}</p>

          <div className={styles.timestampBlock}>
            <p className={styles.timestamp}>
              {isToday(data.created_at) ? time : date.slice(0, date.length - 3)}
            </p>

            <DeleteComment commentId={data._id} username={data.user.username} />
          </div>
        </div>

        <p className={styles.comment}>{data.text}</p>
      </div>
    </div>
  );
};

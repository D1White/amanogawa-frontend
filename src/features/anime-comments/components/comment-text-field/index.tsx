'use client';

import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import Blockies from 'react-blockies';

import { customRevalidateTag } from '@/actions/revalidate-tag.action';
import { useAddComment, useGetUser } from '@/hooks/queries';
import colors from '@/styles/variables/colors/colors.module.scss';
import { QueryKeys } from '@/utils';

import commentStyles from '../comment/comment.module.scss';
import styles from './comment-text-field.module.scss';

interface CommentTextFieldProps {
  animeId: string;
}

export const CommentTextField: FC<CommentTextFieldProps> = ({ animeId }) => {
  const [comment, setComment] = useState('');

  const { data: user } = useGetUser();
  const { mutateAsync } = useAddComment();

  const handleChange = useCallback(({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(target.value);
  }, []);

  const addComment = useCallback(async () => {
    try {
      await mutateAsync({ anime: animeId, text: comment });
      customRevalidateTag(QueryKeys.comments);
      setComment('');
    } catch (err) {}
  }, [comment]);

  if (!user) {
    return null;
  }

  return (
    <div className={commentStyles.wrapper}>
      <Blockies
        seed={user.username}
        size={8}
        scale={8}
        bgColor={colors.grayDark}
        className={commentStyles.avatar}
      />

      <div className={styles.commentBlock}>
        <textarea
          className={styles.textarea}
          placeholder="Напиши свій коментар"
          value={comment}
          onChange={handleChange}
        />

        <button className={styles.button} disabled={comment.length === 0} onClick={addComment}>
          Коментувати
        </button>
      </div>
    </div>
  );
};

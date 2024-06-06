'use client';

import React, { FC } from 'react';

import { customRevalidateTag } from '@/actions/revalidate-tag.action';
import { TrashIcon } from '@/assets/jsx-icons';
import { useDeleteComment, useIsCurrentUser } from '@/hooks';
import { QueryKeys } from '@/utils/query-keys';

import styles from './delete-comment.module.scss';

interface DeleteCommentProps {
  commentId: string;
  username: string;
}

export const DeleteComment: FC<DeleteCommentProps> = ({ commentId, username }) => {
  const isCurrentUserComment = useIsCurrentUser(username);

  const { mutateAsync } = useDeleteComment();

  const deleteComment = async () => {
    try {
      await mutateAsync(commentId);
      customRevalidateTag(QueryKeys.comments);
    } catch (err) {}
  };

  if (!isCurrentUserComment) {
    return null;
  }

  return (
    <button className={styles.deleteButton} onClick={deleteComment}>
      <TrashIcon />
    </button>
  );
};

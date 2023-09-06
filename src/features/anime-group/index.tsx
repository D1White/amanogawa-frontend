import cn from 'classnames';
import Link from 'next/link';
import React, { FC } from 'react';

import { PagesPath } from '@/types';
import { getAnimeByGroup } from '@/utils/api';

import styles from './anime-group.module.scss';

interface AnimeGroupProps {
  groupName: string;
  animeId: string;
}

export const AnimeGroup: FC<AnimeGroupProps> = async ({ groupName, animeId }) => {
  const animeGroup = await getAnimeByGroup(groupName);

  if (!animeGroup) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      {animeGroup.map((anime) => (
        <Link
          href={`${PagesPath.anime}/${anime.slug}`}
          key={anime._id}
          className={cn(styles.link, { [styles.active]: anime._id === animeId })}
        >
          {anime.title}
        </Link>
      ))}
    </div>
  );
};

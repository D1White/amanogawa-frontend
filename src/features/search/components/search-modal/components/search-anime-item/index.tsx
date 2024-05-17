import React, { FC } from 'react';

import { IAnime } from '@/types';

interface SearchAnimeItemProps {
  anime: IAnime;
}

export const SearchAnimeItem: FC<SearchAnimeItemProps> = ({ anime }) => {
  return <div>search-anime-item</div>;
};

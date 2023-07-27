import React, { FC } from 'react';

import { NewAnimeDesktop } from './components';
import { data } from './data';
import { NewAnimeSliderContextProvider } from './new-anime-context';

export const NewAnime: FC = () => {
  return (
    <NewAnimeSliderContextProvider>
      <NewAnimeDesktop data={data} />
    </NewAnimeSliderContextProvider>
  );
};

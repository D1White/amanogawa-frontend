'use client';

import { createContext, Dispatch, FC, PropsWithChildren, useState } from 'react';
import Swiper from 'swiper';

type YoutubeVideosContextType = {
  swiper: Swiper | null;
  isStart: boolean;
  isEnd: boolean;
  setSwiper: Dispatch<Swiper>;
  setIsStart: Dispatch<boolean>;
  setIsEnd: Dispatch<boolean>;
};

export const YoutubeVideosContext = createContext<YoutubeVideosContextType>({
  swiper: null,
  isStart: false,
  isEnd: false,
  setSwiper: () => {},
  setIsStart: () => {},
  setIsEnd: () => {},
});

export const YoutubeVideosContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <YoutubeVideosContext.Provider
      value={{ swiper, isStart, isEnd, setSwiper, setIsStart, setIsEnd }}
    >
      {children}
    </YoutubeVideosContext.Provider>
  );
};

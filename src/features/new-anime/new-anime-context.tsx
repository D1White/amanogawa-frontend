'use client';

import { createContext, Dispatch, FC, PropsWithChildren, useEffect, useState } from 'react';

type YoutubeVideosContextType = {
  activeSlide: number;
  slidesLength: number;
  isTransition: boolean;
  setActiveSlide: Dispatch<number>;
  setSlidesLength: Dispatch<number>;
};

export const NewAnimeSliderContext = createContext<YoutubeVideosContextType>({
  activeSlide: 1,
  slidesLength: 1,
  isTransition: false,
  setActiveSlide: () => {},
  setSlidesLength: () => {},
});

export const NewAnimeSliderContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [slidesLength, setSlidesLength] = useState(1);
  const [isTransition, setIsTransition] = useState(false);

  useEffect(() => {
    const i = setInterval(() => {
      setActiveSlide((prev) => {
        const nextSlideIdx = prev + 1;
        return nextSlideIdx > slidesLength ? 1 : nextSlideIdx;
      });
    }, 7000);

    return () => {
      if (i) clearInterval(i);
    };
  }, [slidesLength]);

  return (
    <NewAnimeSliderContext.Provider
      value={{ activeSlide, setActiveSlide, slidesLength, setSlidesLength, isTransition }}
    >
      {children}
    </NewAnimeSliderContext.Provider>
  );
};

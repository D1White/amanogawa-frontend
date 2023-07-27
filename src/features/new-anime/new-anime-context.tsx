'use client';

import { createContext, Dispatch, FC, PropsWithChildren, useEffect, useState } from 'react';

type YoutubeVideosContextType = {
  activeSlide: number;
  slidesLength: number;
  setActiveSlide: Dispatch<number>;
  setSlidesLength: Dispatch<number>;
};

export const NewAnimeSliderContext = createContext<YoutubeVideosContextType>({
  activeSlide: 1,
  slidesLength: 1,
  setActiveSlide: () => {},
  setSlidesLength: () => {},
});

export const NewAnimeSliderContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [slidesLength, setSlidesLength] = useState(1);

  useEffect(() => {
    const i = setInterval(() => {
      setActiveSlide((prev) => {
        const nextSlideIdx = prev + 1;
        return nextSlideIdx > slidesLength ? 1 : nextSlideIdx;
      });
    }, 5000);

    return () => {
      if (i) clearInterval(i);
    };
  }, [slidesLength]);

  return (
    <NewAnimeSliderContext.Provider
      value={{ activeSlide, setActiveSlide, slidesLength, setSlidesLength }}
    >
      {children}
    </NewAnimeSliderContext.Provider>
  );
};

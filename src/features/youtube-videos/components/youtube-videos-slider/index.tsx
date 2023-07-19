'use client';

import React, { FC, PropsWithChildren, ReactNode, useCallback, useContext } from 'react';
import SwiperType from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { YoutubeVideosContext } from '@/features/youtube-videos/youtube-videos-context';

import styles from './YoutubeVideosSlider.module.scss';

export const YoutubeVideosSlider: FC<PropsWithChildren> = ({ children }) => {
  const { setSwiper, setIsStart, setIsEnd } = useContext(YoutubeVideosContext);

  const onSwiper = useCallback(
    (swiper: SwiperType) => {
      setSwiper(swiper);
      setIsStart(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    },
    [setSwiper, setIsStart, setIsEnd],
  );

  const onSlideChange = useCallback(
    (swiper: SwiperType) => {
      setIsStart(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    },
    [setIsStart, setIsEnd],
  );

  return (
    <Swiper slidesPerView="auto" onSwiper={onSwiper} onSlideChange={onSlideChange}>
      {React.Children.map(children, (child: ReactNode) => (
        <SwiperSlide className={styles.swiperSlide}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

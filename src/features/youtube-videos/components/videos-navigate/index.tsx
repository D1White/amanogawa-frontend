'use client';

import cn from 'classnames';
import React, { useContext } from 'react';

import { ArrowRightIcon } from '@/assets/jsx-icons';
import { YoutubeVideosContext } from '@/features/youtube-videos/youtube-videos-context';
import blocksStyles from '@/styles/variables/blocks/blocks.module.scss';

import styles from './VideosNavigate.module.scss';

export const VideosNavigate = () => {
  const { swiper, isStart, isEnd } = useContext(YoutubeVideosContext);

  const onNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const onPrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div className={styles.navigate}>
      <button
        className={cn(styles.navButton, styles.prev)}
        onClick={onPrevSlide}
        disabled={isStart}
      >
        <div className={styles.content}>
          <ArrowRightIcon />
        </div>
      </button>
      <button className={cn(styles.navButton, styles.next)} onClick={onNextSlide} disabled={isEnd}>
        <div className={styles.content}>
          <ArrowRightIcon />
        </div>
      </button>
    </div>
  );
};

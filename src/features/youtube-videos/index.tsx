import React from 'react';

import { getYoutubeVideos } from '@/utils/api';

import { VideoSlide, VideosNavigate, YoutubeVideosSlider } from './components';
import { YoutubeVideosContextProvider } from './youtube-videos-context';
import styles from './YoutubeVideos.module.scss';

export const YoutubeVideos = async () => {
  const data = await getYoutubeVideos();

  if (!data) {
    return null;
  }

  return (
    <YoutubeVideosContextProvider>
      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className="section-title">Latest anime videos:</h2>

          <VideosNavigate />
        </div>

        <div className={styles.sliderWrapper}>
          <YoutubeVideosSlider>
            {data?.items?.map((slide) => (
              <VideoSlide
                id={slide.id.videoId}
                title={slide.snippet.title}
                poster={slide.snippet.thumbnails.medium.url}
                key={slide.snippet.title}
              />
            ))}
          </YoutubeVideosSlider>
        </div>
      </section>
    </YoutubeVideosContextProvider>
  );
};

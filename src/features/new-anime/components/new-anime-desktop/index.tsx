'use client';

import cn from 'classnames';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { PaginationOptions } from 'swiper/types';

import { PlayIcon, SaveIcon } from '@/assets/jsx-icons';
import { BigButton } from '@/components';
import { IAnime, PagesPath } from '@/types';

import styles from './NewAnimeDesktop.module.scss';

interface NewAnimeDesktopProps {
  data: IAnime[];
}

export const NewAnimeDesktop: FC<NewAnimeDesktopProps> = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const activeSlideData = data[activeSlide];

  const pagination: PaginationOptions = useMemo(
    () => ({
      clickable: true,
      el: '.swiper-custom-pagination',
      renderBullet: (idx, className) => {
        return '<span class="' + className + '">' + '</span>';
      },
    }),
    [],
  );

  const onSlideChange = useCallback((swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  }, []);

  return (
    <section className={styles.section}>
      <img
        src={activeSlideData.image}
        alt="background anime poster"
        className={cn(styles.background, styles.backgroundImage)}
      />

      <div className={cn(styles.background, styles.backgroundGradient)} />
      <div className={styles.swiperWrapper}>
        <Swiper
          direction={'vertical'}
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          className={styles.swiper}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          onSlideChange={onSlideChange}
        >
          {data.map((anime) => (
            <SwiperSlide key={anime._id}>
              <img src={anime.image} alt={anime.title} className={styles.poster} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-custom-pagination"></div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{activeSlideData.title}</h2>

        <p className={styles.synopsis}>{activeSlideData.synopsis}</p>

        <div className={styles.actionButtons}>
          <BigButton
            text="Watch"
            icon={PlayIcon}
            href={`${PagesPath.anime}/${activeSlideData.slug}`}
          />
          <BigButton text="Add to list" icon={SaveIcon} styling="black" onClick={() => {}} />
        </div>

        <div className={styles.details}>
          {activeSlideData?.rating && (
            <span className={styles.detail}>
              Rating:<mark>{activeSlideData.rating}</mark>
            </span>
          )}

          <span className={styles.detail}>
            Year:<mark>{activeSlideData.year}</mark>
          </span>
          <span className={styles.detail}>
            Season:<mark>{activeSlideData.season}</mark>
          </span>

          {activeSlideData?.episodes_total && activeSlideData.episodes?.length ? (
            <span className={styles.detail}>
              Episodes:
              <mark>{`${activeSlideData.episodes?.length} / ${activeSlideData.episodes_total}`}</mark>
            </span>
          ) : null}
        </div>
      </div>

      {/* <NewAnimePagination /> */}
    </section>
  );
};

'use client';

import cn from 'classnames';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { PaginationOptions } from 'swiper/types';

import { PlayIcon, SaveIcon } from '@/assets/jsx-icons';
import { BigButton } from '@/components';
import { useFavorites } from '@/hooks';
import { useIsUserAuthorized } from '@/hooks';
import colors from '@/styles/variables/colors/colors.module.scss';
import { IAnime } from '@/types';
import { PagesPath, socialLinks } from '@/utils';

import styles from './new-anime.module.scss';

interface NewAnimeSliderProps {
  data: IAnime[];
}

export const NewAnimeSlider: FC<NewAnimeSliderProps> = ({ data }) => {
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

  const isUserAuthorized = useIsUserAuthorized();
  const { isFavorite, favoriteAction } = useFavorites(activeSlideData._id);

  const saveIcon = useCallback(
    () => (
      <SaveIcon
        fill={isFavorite ? colors.yellow : colors.white}
        stroke={isFavorite ? colors.yellow : colors.white}
      />
    ),
    [isFavorite],
  );

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
          direction="horizontal"
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          className={styles.swiper}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={20}
          onSlideChange={onSlideChange}
          breakpoints={{
            769: {
              direction: 'vertical',
              spaceBetween: 30,
            },
          }}
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
          {isUserAuthorized && (
            <BigButton
              text={isFavorite ? 'Remove from list' : 'Add to list'}
              icon={saveIcon}
              styling="black"
              onClick={favoriteAction}
            />
          )}
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

      <div className={styles.socialLinks}>
        {socialLinks.map(({ link, icon: Icon }) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            key={link}
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
};

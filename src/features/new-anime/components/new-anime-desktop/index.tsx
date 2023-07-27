'use client';

import React, { FC, useContext, useEffect } from 'react';

import { PlayIcon, SaveIcon } from '@/assets/jsx-icons';
import { BigButton } from '@/components';
import { NewAnimeSliderContext } from '@/features/new-anime/new-anime-context';
import { IAnime, PagesPath } from '@/types';

import { NewAnimePagination } from '../new-anime-pagination';
import styles from './NewAnimeDesktop.module.scss';

interface NewAnimeDesktopProps {
  data: IAnime[];
}

export const NewAnimeDesktop: FC<NewAnimeDesktopProps> = ({ data }) => {
  const { activeSlide, setSlidesLength } = useContext(NewAnimeSliderContext);

  const activeSlideData = data[activeSlide - 1];

  useEffect(() => {
    setSlidesLength(data.length);
  }, [data]);

  return (
    <section className={styles.section}>
      <img
        src={activeSlideData.image}
        alt="background anime poster"
        className={styles.background}
      />

      <img src={activeSlideData.image} alt={activeSlideData.title} className={styles.poster} />

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
          {activeSlideData?.score && (
            <span className={styles.detail}>
              Rating:<mark>{activeSlideData.score}</mark>
            </span>
          )}

          <span className={styles.detail}>
            Year:<mark>{activeSlideData.year}</mark>
          </span>
          <span className={styles.detail}>
            Season:<mark>{activeSlideData.season}</mark>
          </span>

          {activeSlideData?.episodes_total && activeSlideData.episodes?.length && (
            <span className={styles.detail}>
              Episodes:
              <mark>{`${activeSlideData.episodes?.length} / ${activeSlideData.episodes_total}`}</mark>
            </span>
          )}
        </div>
      </div>

      <NewAnimePagination />
    </section>
  );
};

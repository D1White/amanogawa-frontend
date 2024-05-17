'use client';

import cn from 'classnames';
import Link from 'next/link';
import React, { ChangeEvent, FC, MouseEvent, useCallback, useRef, useState } from 'react';
import ContentLoader from 'react-content-loader';

import { SearchIcon } from '@/assets/jsx-icons';
import { TextField } from '@/components/TextField';
import { useDebounce, useSearch } from '@/hooks';
import { contentLoaderDefaultProps, PagesPath } from '@/utils';

import { SearchAnimeItem } from './components';
import styles from './search-modal.module.scss';

interface SearchModalProps {
  onClose: () => void;
}

export const SearchModal: FC<SearchModalProps> = ({ onClose }) => {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const debouncedSearch = useDebounce(value, 500);

  const { data, isLoading } = useSearch(debouncedSearch);

  const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  }, []);

  const outsideClick = ({ target }: MouseEvent<HTMLDivElement>) => {
    if (target === ref.current) {
      onClose();
    }
  };

  return (
    <div className={styles.modal} ref={ref} onClick={outsideClick}>
      <TextField
        value={value}
        onChange={handleChange}
        placeholder="Пошук по Amanogawa"
        wrapperClassName={styles.searchInputWrapper}
        startIcon={<SearchIcon />}
      />

      <div className={styles.results}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className={styles.resultBlock}>
              <p className={styles.resultGroup}>Аніме</p>

              <div className={styles.resultContent}>
                {data?.anime?.map((anime) => <SearchAnimeItem anime={anime} key={anime._id} />)}
              </div>
            </div>

            <div className={styles.resultBlock}>
              <p className={styles.resultGroup}>Користувачі</p>

              <div className={styles.resultContent}>
                {data?.users?.map((user) => <div key={user._id}>{user.username}</div>)}
              </div>
            </div>
          </>
        )}

        {/* <>
          {!!data?.items && (
            <>
              {data?.items?.length > 0 ? (
                <>
                  {data.items?.map((anime) => (
                    <Link
                      href={`${PagesPath.anime}/${anime.slug}`}
                      onClick={onClose}
                      className={styles.result}
                      key={anime._id}
                    >
                      <img src={anime.image} alt="Аніме постер" className={styles.resultPoster} />

                      <div className={styles.resultInfo}>
                        <p className={styles.resultText}>{anime.title}</p>
                        <p className={cn(styles.resultText, styles.subtitle)}>{`${
                          anime.year
                        } · ${anime.type.toUpperCase()}`}</p>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <p className={styles.noDataText}>Нічого не знайдено ¯\(o_o)/¯</p>
              )}
            </>
          )}
        </> */}
      </div>
    </div>
  );
};

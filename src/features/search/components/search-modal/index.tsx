'use client';

import cn from 'classnames';
import Link from 'next/link';
import React, { ChangeEvent, FC, MouseEvent, useCallback, useRef, useState } from 'react';
import ContentLoader from 'react-content-loader';
import useSWR from 'swr';

import { SearchIcon } from '@/assets/jsx-icons';
import { TextField } from '@/components/TextField';
import { useDebounce } from '@/hooks';
import colors from '@/styles/variables/colors/colors.module.scss';
import { PagesPath, SWRKeys } from '@/utils';
import { getAnime } from '@/utils/api';

import styles from './search-modal.module.scss';

interface SearchModalProps {
  onClose: () => void;
}

export const SearchModal: FC<SearchModalProps> = ({ onClose }) => {
  const [value, setValue] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const debouncedSearch = useDebounce(value, 500);

  const { data, isLoading } = useSWR(
    debouncedSearch ? [SWRKeys.search, debouncedSearch] : null,
    ([key, debouncedSearch]) => getAnime({ search: debouncedSearch, limit: 5 }),
  );

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
          <>
            {new Array(3).fill(null).map((_, idx) => (
              <div className={styles.result} key={idx}>
                <ContentLoader
                  speed={3}
                  width="100%"
                  height="100%"
                  viewBox="0 0 692 122"
                  backgroundColor={colors.grayDark}
                  foregroundColor={colors.black}
                >
                  <rect x="0" y="0" rx="20" ry="20" width="122" height="122" />
                  <rect x="162" y="22" rx="3" ry="3" width="260" height="30" />
                  <rect x="162" y="62" rx="3" ry="3" width="220" height="30" />
                </ContentLoader>
              </div>
            ))}
          </>
        ) : (
          <>
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
                        <img src={anime.image} alt={anime.title} className={styles.resultPoster} />

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
          </>
        )}
      </div>
    </div>
  );
};

'use client';

import cn from 'classnames';
import React, { ChangeEvent, FC, MouseEvent, useCallback, useRef, useState } from 'react';

import { SearchIcon } from '@/assets/jsx-icons';
import { PageLoader } from '@/components/PageLoader';
import { TextField } from '@/components/TextField';
import { useDebounce, useSearch } from '@/hooks';

import { SearchAnimeItem } from '../search-anime-item';
import { SearchUserItem } from '../search-user-item';
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
          <PageLoader />
        ) : debouncedSearch && !data?.anime?.length && !data?.users?.length ? (
          <p className={styles.noDataText}>Нічого не знайдено ¯\(o_o)/¯</p>
        ) : (
          <>
            <div className={cn(styles.resultBlock, styles.resultBlock__anime)}>
              {data?.anime && data?.anime?.length > 0 && (
                <>
                  <p className={styles.resultGroup}>Аніме</p>

                  <div className={styles.resultContent}>
                    {data.anime.map((anime) => (
                      <SearchAnimeItem key={anime._id} anime={anime} onClose={onClose} />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className={styles.resultBlock}>
              {data?.users && data?.users?.length > 0 && (
                <>
                  <p className={styles.resultGroup}>Користувачі</p>

                  <div className={styles.resultContent}>
                    {data.users.map((user) => (
                      <SearchUserItem key={user._id} username={user.username} onClose={onClose} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

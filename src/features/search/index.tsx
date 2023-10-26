'use client';

import React, { useState } from 'react';

import { SearchIcon } from '@/assets/jsx-icons';
import { useTogglePageNoScroll } from '@/hooks';
import blocksStyles from '@/styles/variables/blocks/blocks.module.scss';

import { SearchModal } from './components';

export const Search = () => {
  const [visible, setVisible] = useState(false);

  useTogglePageNoScroll(visible);

  const handleOpen = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      <button className={blocksStyles.flexCentered} onClick={handleOpen} aria-label="Пошук">
        <SearchIcon />
      </button>

      {visible && <SearchModal onClose={handleClose} />}
    </>
  );
};

'use client';

import React, { FC, memo, useCallback, useState } from 'react';

import { EyeIcon, EyeOffIcon } from '@/assets/jsx-icons';
import blocksStyles from '@/styles/variables/blocks/blocks.module.scss';

import { TextField, TextFieldProps } from './TextField';

export const PasswordInput: FC<TextFieldProps> = memo((props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const ToggleShowPassword = useCallback(
    () => (
      <button type="button" className={blocksStyles.flexCentered} onClick={handleClick}>
        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
      </button>
    ),
    [showPassword],
  );

  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      endIcon={<ToggleShowPassword />}
    />
  );
});

PasswordInput.displayName = 'PasswordInput';

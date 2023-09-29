'use client';

import cn from 'classnames';
import React, { ChangeEventHandler, FC, HTMLInputTypeAttribute, memo, ReactNode } from 'react';

import styles from './TextField.module.scss';

interface TextFieldProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  helperText?: string;
  error?: boolean;
  wrapperClassName?: string;
  className?: string;
  startIcon?: ReactNode;
}

export const TextField: FC<TextFieldProps> = memo((props) => {
  const {
    value,
    onChange,
    placeholder,
    type = 'text',
    helperText,
    error = false,
    wrapperClassName = '',
    className = '',
    startIcon,
  } = props;

  return (
    <div className={cn(styles.wrapper, { [wrapperClassName]: !!wrapperClassName })}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(styles.input, {
          ['with-icon']: !!startIcon,
          error,
          [className]: !!className,
        })}
      />

      {!!startIcon && <div className={styles.startIcon}>{startIcon}</div>}

      {helperText && <p className={cn(styles.helperText, { error })}>{helperText}</p>}
    </div>
  );
});

TextField.displayName = 'TextField';

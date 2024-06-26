'use client';

import cn from 'classnames';
import React, { ChangeEventHandler, FC, HTMLInputTypeAttribute, memo, ReactNode } from 'react';

import styles from './TextField.module.scss';

export interface TextFieldProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  wrapperClassName?: string;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const TextField: FC<TextFieldProps> = memo((props) => {
  const {
    value,
    onChange,
    placeholder,
    type = 'text',
    required = false,
    helperText,
    error = false,
    wrapperClassName = '',
    className = '',
    startIcon,
    endIcon,
  } = props;

  return (
    <div className={cn(styles.wrapper, { [wrapperClassName]: !!wrapperClassName })}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={cn(styles.input, {
          ['start-icon']: !!startIcon,
          ['end-icon']: !!endIcon,
          error,
          [className]: !!className,
        })}
      />

      {!!startIcon && <div className={cn(styles.icon, styles.startIcon)}>{startIcon}</div>}
      {!!endIcon && <div className={cn(styles.icon, styles.endIcon)}>{endIcon}</div>}

      {helperText && <p className={cn(styles.helperText, { error })}>{helperText}</p>}
    </div>
  );
});

TextField.displayName = 'TextField';

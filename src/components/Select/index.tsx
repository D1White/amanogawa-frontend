'use client';

import cn from 'classnames';
import React, { FC, useMemo, useState } from 'react';

import { ArrowRightIcon } from '@/assets/jsx-icons';
import { useClickOutside } from '@/hooks';

import styles from './Select.module.scss';

export type SelectValue = string | number;
export type SelectValueOrNull = SelectValue | null;

export interface SelectOption {
  label: string;
  value: SelectValue;
}

interface SelectProps {
  value: SelectValue;
  options: SelectOption[];
  onChange: (value: SelectValue) => void;
  label?: string;
  className?: string;
}

export const Select: FC<SelectProps> = ({ value, options, onChange, label, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const ref = useClickOutside<HTMLDivElement>(handleClose);

  return (
    <div
      className={cn(styles.select, className)}
      onClick={handleClick}
      ref={ref}
      aria-label={`${label} select`}
    >
      {!!label && <span className={cn(styles.label, 'select-label')}>{label}</span>}

      <div className={cn(styles.dropdown, 'select-dropdown')}>
        <p className={styles.selectedOption}>{selectedOption?.label || value}</p>

        <ArrowRightIcon className={cn(styles.arrow, 'select-arrow', { [styles.rotate]: isOpen })} />

        {isOpen && (
          <div className={styles.optionsWrapper}>
            {options.map((option) => (
              <p
                className={cn(styles.option, {
                  [styles.selected]: selectedOption?.value === option.value,
                })}
                onClick={() => onChange(option.value)}
                key={option.value}
              >
                {option.label}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

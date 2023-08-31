'use client';

import cn from 'classnames';
import React, { FC, PropsWithChildren } from 'react';

import { SelectOption, SelectValue, SelectValueOrNull } from '@/components/Select';

import styles from './FilterSelect.module.scss';

interface FilterSelectBaseProps {
  title: string;
  options: SelectOption[];
  centered?: boolean;
}

interface SingleFilterSelectProps extends FilterSelectBaseProps {
  value: SelectValueOrNull;
  onChange: (value: SelectValueOrNull) => void;
}
interface MultipleFilterSelectProps extends FilterSelectBaseProps {
  values: SelectValue[];
  onChange: (value: SelectValue[]) => void;
}

const FilterSelect: FC<PropsWithChildren<Pick<FilterSelectBaseProps, 'title' | 'centered'>>> = ({
  title,
  centered = true,
  children,
}) => {
  return (
    <div className={cn(styles.wrapper, { [styles.center]: centered })}>
      <p className={styles.title}>{title}</p>

      <div className={styles.selectBlock}>{children}</div>
    </div>
  );
};

export const SingleFilterSelect: FC<SingleFilterSelectProps> = ({
  title,
  options,
  value,
  onChange,
  centered,
}) => {
  const handleClick = (option: SelectOption) => {
    if (option.value === value) {
      onChange(null);
    } else {
      onChange(option.value);
    }
  };

  return (
    <FilterSelect title={title} centered={centered}>
      <>
        {options.map((option) => (
          <button
            className={cn(styles.select, { [styles.active]: option.value === value })}
            onClick={() => handleClick(option)}
            key={option.value}
          >
            {option.label}
          </button>
        ))}
      </>
    </FilterSelect>
  );
};

export const MultipleFilterSelect: FC<MultipleFilterSelectProps> = ({
  title,
  options,
  values,
  onChange,
  centered,
}) => {
  const handleClick = (option: SelectOption, isActive: boolean) => {
    if (isActive) {
      const filterValue = values.filter((value) => value !== option.value);
      onChange(filterValue);
    } else {
      onChange([...values, option.value]);
    }
  };

  return (
    <FilterSelect title={title} centered={centered}>
      <>
        {options.map((option) => {
          const isActive = values.includes(option.value);

          return (
            <button
              className={cn(styles.select, { [styles.active]: isActive })}
              onClick={() => handleClick(option, isActive)}
              key={option.value}
            >
              {option.label}
            </button>
          );
        })}
      </>
    </FilterSelect>
  );
};

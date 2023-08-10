'use client';

import cn from 'classnames';
import React, { FC, memo } from 'react';

import { SelectOption, SelectValue } from '@/components/Select';

import styles from './FilterSelect.module.scss';

interface FilterSelect {
  title: string;
  values: SelectValue[];
  options: SelectOption[];
  onChange: (value: SelectValue[]) => void;
  centered?: boolean;
}

interface SelectItem extends Pick<FilterSelect, 'values'> {
  option: SelectOption;
  onClick: (value: SelectValue[]) => void;
}

const SelectItem: FC<SelectItem> = memo(({ option, values, onClick }) => {
  const isActive = values.includes(option.value);

  const handleClick = () => {
    if (isActive) {
      const filterValue = values.filter((value) => value !== option.value);
      onClick(filterValue);
    } else {
      onClick([...values, option.value]);
    }
  };

  return (
    <button className={cn(styles.select, { [styles.active]: isActive })} onClick={handleClick}>
      {option.label}
    </button>
  );
});
SelectItem.displayName = 'FilterSelectItem';

export const FilterSelect: FC<FilterSelect> = ({
  title,
  options,
  values,
  onChange,
  centered = true,
}) => {
  return (
    <div className={cn(styles.wrapper, { [styles.center]: centered })}>
      <p className={styles.title}>{title}</p>

      <div className={styles.selectBlock}>
        {options.map((option) => (
          <SelectItem option={option} values={values} onClick={onChange} key={option.value} />
        ))}
      </div>
    </div>
  );
};

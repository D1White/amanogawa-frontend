import cn from 'classnames';
import React, { FC } from 'react';

import { StarIcon } from '@/assets/jsx-icons';

import styles from './Badge.module.scss';

export enum BadgeStateEnum {
  default = 'default',
  black = 'black',
  gray = 'gray',
  red = 'red',
}

interface BadgeProps {
  text: string | number;
  state?: BadgeStateEnum;
  withStar?: boolean;
  className?: string;
  uppercase?: boolean;
}

export const Badge: FC<BadgeProps> = (props) => {
  const { text, state = BadgeStateEnum.default, withStar, className, uppercase = true } = props;

  return (
    <div
      className={cn(
        styles.badge,
        {
          [styles.badge__black]: state === BadgeStateEnum.black,
          [styles.badge__gray]: state === BadgeStateEnum.gray,
          [styles.badge__red]: state === BadgeStateEnum.red,
        },
        className,
      )}
    >
      {withStar && <StarIcon className={styles.star} />}
      <p className={cn(styles.text, { [styles.uppercase]: uppercase })}>{text}</p>
    </div>
  );
};

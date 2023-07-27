import cn from 'classnames';
import Link from 'next/link';
import React, { FC, SVGProps, useCallback } from 'react';

import styles from './BigButton.module.scss';

interface BigButtonProps {
  text: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  href?: string;
  externalLink?: boolean;
  styling?: 'primmary' | 'black';
  className?: string;
}

export const BigButton: FC<BigButtonProps> = (props) => {
  const {
    text,
    icon: Icon,
    onClick,
    href = '',
    externalLink = false,
    styling = 'primmary',
    className,
  } = props;

  const classes = cn(styles.button, styling, className);

  const ButtonContent = useCallback(
    () => (
      <>
        <div className={cn(styles.background, styling)} />
        <span className={styles.text}>{text}</span>
        <Icon />
      </>
    ),
    [text, Icon],
  );

  if (href) {
    return externalLink ? (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        <ButtonContent />
      </a>
    ) : (
      <Link href={href} className={classes}>
        <ButtonContent />
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <ButtonContent />
    </button>
  );
};

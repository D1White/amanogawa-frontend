import cn from 'classnames';
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react';

import { ArrowNarrowLeftIcon } from '@/assets/jsx-icons';

import styles from './back-link.module.scss';

interface BackLinkProps {
  href: string;
  className?: string;
}

export const BackLink: FC<PropsWithChildren<BackLinkProps>> = ({
  href,
  className = '',
  children,
}) => {
  return (
    <Link href={href} className={cn(styles.backLink, { [className]: !!className })}>
      <ArrowNarrowLeftIcon />
      {children}
    </Link>
  );
};

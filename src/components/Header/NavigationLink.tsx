'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, PropsWithChildren } from 'react';

import styles from './Header.module.scss';

interface NavigationLink extends PropsWithChildren {
  href: string;
  onClick?: () => void;
}

export const NavigationLink: FC<NavigationLink> = ({ children, href, onClick }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(styles.link, { [styles.active]: pathname === href })}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

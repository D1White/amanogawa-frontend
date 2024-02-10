import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

import { AmanogawaLogoIcon } from '@/assets/jsx-icons';
import { Search } from '@/features';
import { PagesPath } from '@/utils';

import styles from './Header.module.scss';
import { navigationLinks } from './header-data';
import { MobileMenu } from './MobileMenu';
import { NavigationLink } from './NavigationLink';

const HeaderUser = dynamic(() => import('./HeaderUser'), {});

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <MobileMenu />

        <Link href={PagesPath.home} className={styles.logo} aria-label="На головну">
          <AmanogawaLogoIcon />
        </Link>

        <nav className={styles.navigation}>
          {navigationLinks.map((link) => (
            <NavigationLink href={link.href} key={link.href}>
              {link.name}
            </NavigationLink>
          ))}
        </nav>

        <div className={styles.actionButtons}>
          <Search />

          <HeaderUser />
        </div>
      </div>
    </header>
  );
};

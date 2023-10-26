import Link from 'next/link';
import React from 'react';

import { AmanogawaLogoIcon } from '@/assets/jsx-icons';
import { Search } from '@/features';
import { PagesPath } from '@/utils';

import styles from './Header.module.scss';
import { leftNavigationLinks, rigthNavigationLinks } from './header-data';
import { HeaderUser } from './HeaderUser';
import { MobileMenu } from './MobileMenu';
import { NavigationLink } from './NavigationLink';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <MobileMenu />

        <nav className={styles.navigation}>
          {leftNavigationLinks.map((link) => (
            <NavigationLink href={link.href} key={link.href}>
              {link.name}
            </NavigationLink>
          ))}

          <Link href={PagesPath.home} className={styles.logo} aria-label="На головну">
            <AmanogawaLogoIcon />
          </Link>

          {rigthNavigationLinks.map((link) => (
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

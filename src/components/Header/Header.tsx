import Link from 'next/link';
import React from 'react';

import { AmanogawaLogoIcon, SearchIcon, UserIcon } from '@/assets/jsx-icons';
import { PagesPath } from '@/types';

import { EpisodeBackButton } from './EpisodeBackButton';
import styles from './Header.module.scss';
import { leftNavigationLinks, rigthNavigationLinks } from './header-data';
import { MobileMenu } from './MobileMenu';
import { NavigationLink } from './NavigationLink';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <MobileMenu />

        <EpisodeBackButton />

        <nav className={styles.navigation}>
          {leftNavigationLinks.map((link) => (
            <NavigationLink href={link.href} key={link.href}>
              {link.name}
            </NavigationLink>
          ))}

          <Link href={PagesPath.home} className={styles.logo}>
            <AmanogawaLogoIcon />
          </Link>

          {rigthNavigationLinks.map((link) => (
            <NavigationLink href={link.href} key={link.href}>
              {link.name}
            </NavigationLink>
          ))}
        </nav>

        <div className={styles.actionButtons}>
          <button className={styles.searchButton}>
            <SearchIcon />
          </button>

          <button className={styles.userButton}>
            <UserIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

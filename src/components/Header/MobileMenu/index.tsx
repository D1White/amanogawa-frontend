'use client';

import cn from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';

import { AmanogawaLogoIcon, CloseIcon, MenuIcon } from '@/assets/jsx-icons';
import { useTogglePageNoScroll } from '@/hooks';
import { PagesPath, socialLinks } from '@/utils';

import { leftNavigationLinks, rigthNavigationLinks } from '../header-data';
import { NavigationLink } from '../NavigationLink';
import styles from './MobileMenu.module.scss';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useTogglePageNoScroll(isOpen);

  return (
    <>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleClick}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div className={cn(styles.modal, { [styles.open]: isOpen })}>
        <Link href={PagesPath.home} className={styles.logo} onClick={handleClose}>
          <AmanogawaLogoIcon />
        </Link>

        <nav className={styles.navigation}>
          {[...leftNavigationLinks, ...rigthNavigationLinks].map((link) => (
            <NavigationLink href={link.href} onClick={handleClose} key={link.href}>
              {link.name}
            </NavigationLink>
          ))}
        </nav>

        <div className={styles.socialLinks}>
          {socialLinks.map(({ link, icon: Icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              key={link}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

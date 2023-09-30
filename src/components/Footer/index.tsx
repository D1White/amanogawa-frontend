import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import { AmanogawaLogoIcon } from '@/assets/jsx-icons';
import blocksStyles from '@/styles/variables/blocks/blocks.module.scss';
import { PagesPath } from '@/utils';

import styles from './Footer.module.scss';

const team = [
  { role: 'Design', name: 'Andrii Sviatenko', link: 'https://www.behance.net/sndx' },
  { role: 'Development', name: 'Danylo Bilyi', link: 'https://danylo-bilyi.site' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={blocksStyles.flexCenteredVertically}>
          <Link href={PagesPath.home} className={blocksStyles.flexCentered}>
            <AmanogawaLogoIcon />
          </Link>

          <p className={cn(styles.text, styles.text__info)}>
            {`Amanogawa.ua © ${year} - Ukrainian dubbing studio`}
          </p>
        </div>

        <div className={blocksStyles.flexCenteredVertically}>
          {team.map((item) => (
            <div className={styles.teamBlock} key={`${item.role}_${item.name}`}>
              <p className={cn(styles.text, styles.text__role)}>{`${item.role}:`}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(styles.text, styles.text__link)}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

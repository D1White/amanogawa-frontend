import cn from 'classnames';
import localFont from 'next/font/local';
import Link from 'next/link';

import notFoundSvg from '@/assets/svg/404.svg';
import styles from '@/styles/pages/not-found.module.scss';
import { PagesPath } from '@/utils';

const fixel = localFont({
  src: [
    { path: '../assets/fonts/Fixel/FixelDisplay-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-fixel',
});

export default function NotFound() {
  return (
    <div className={cn(fixel.className, styles.notFoundContainer)}>
      <div className={styles.notFoundWrapper}>
        <img src={notFoundSvg.src} alt="not found" className={styles.notFoundImage} />
        <p className={styles.notFoundText}>
          We can’t find <br />
          this page
        </p>
        <Link href={PagesPath.home} className={styles.notFoundLink}>
          To Home
        </Link>
      </div>
    </div>
  );
}

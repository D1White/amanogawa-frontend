import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import authImg from '@/assets/img/auth-background.jpg';
import { ArrowNarrowLeftIcon } from '@/assets/jsx-icons';
import { getMetaTitle, PagesPath } from '@/utils';

import styles from './auth.module.scss';

export const metadata: Metadata = {
  title: getMetaTitle('Login'),
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.authWrapper}>
      <div className={styles.imageBlock}>
        <Image src={authImg} alt="night Japan street background" fill objectFit="cover" />
      </div>
      <div className={styles.content}>
        <Link href={PagesPath.home} className={styles.homeButton}>
          <ArrowNarrowLeftIcon />
          На головну
        </Link>

        {children}
      </div>
    </main>
  );
}

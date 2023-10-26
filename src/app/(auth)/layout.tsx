import type { Metadata } from 'next';
import Image from 'next/image';

import authImg from '@/assets/img/auth-background.jpg';
import { BackLink } from '@/components';
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
        <BackLink href={PagesPath.home}>На головну</BackLink>

        {children}
      </div>
    </main>
  );
}

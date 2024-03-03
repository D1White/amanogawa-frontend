import Image from 'next/image';

import authImg from '@/assets/img/auth-background.jpg';
import { BackLink } from '@/components';
import { PagesPath } from '@/utils';

import styles from './auth.module.scss';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.authWrapper}>
      <div className={styles.imageBlock}>
        <Image src={authImg} alt="girl watch anime on TV" fill objectFit="cover" />
      </div>
      <div className={styles.content}>
        <BackLink href={PagesPath.home}>На головну</BackLink>

        {children}
      </div>
    </main>
  );
}

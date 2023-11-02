import type { Metadata } from 'next';
import Link from 'next/link';

import { LoginForm } from '@/features';
import { getMetaTitle, metaTexts } from '@/utils';
import { PagesPath } from '@/utils';

import styles from '../auth.module.scss';

export const metadata: Metadata = {
  title: getMetaTitle(metaTexts.login),
  openGraph: {
    title: getMetaTitle(metaTexts.login),
  },
};

export default function Login() {
  return (
    <>
      <h1 className={styles.title}>Авторизація</h1>
      <h3 className={styles.subtitle}>
        Отримай доступ до оцінки аніме та збереження до власного списку!
      </h3>

      <LoginForm />

      <Link href={PagesPath.signup} className={styles.link}>
        Створити акаунт
      </Link>
    </>
  );
}

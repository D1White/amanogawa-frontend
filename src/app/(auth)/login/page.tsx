import type { Metadata } from 'next';
import Link from 'next/link';

import { LoginForm } from '@/features/forms/auth/login-form';
import { getMetaTitle } from '@/utils';
import { PagesPath } from '@/utils';

import styles from '../auth.module.scss';

export const metadata: Metadata = {
  title: getMetaTitle('Авторизація'),
};

export default function Login() {
  return (
    <>
      <h1 className={styles.title}>Login</h1>
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

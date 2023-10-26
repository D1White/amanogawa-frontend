import type { Metadata } from 'next';
import Link from 'next/link';

import { SignUpForm } from '@/features/forms/auth/signup-form';
import { getMetaTitle, PagesPath } from '@/utils';

import styles from '../auth.module.scss';

export const metadata: Metadata = {
  title: getMetaTitle('Реєстрація'),
};

export default function SignUp() {
  return (
    <>
      <h1 className={styles.title}>Реєстрація</h1>

      <SignUpForm />

      <Link href={PagesPath.login} className={styles.link}>
        Вже маєш акаунт?
      </Link>
    </>
  );
}

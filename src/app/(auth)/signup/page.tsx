import type { Metadata } from 'next';
import Link from 'next/link';

import { SignUpForm } from '@/features';
import { getMetaTitle, metaTexts, PagesPath } from '@/utils';

import styles from '../auth.module.scss';

export const metadata: Metadata = {
  title: getMetaTitle(metaTexts.signup),
  openGraph: {
    title: getMetaTitle(metaTexts.signup),
  },
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

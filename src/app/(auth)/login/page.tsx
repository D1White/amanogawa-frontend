'use client';

import { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from 'react';

import { PasswordInput, TextField } from '@/components';
import { useLogin } from '@/hooks';
import { PagesPath } from '@/utils';
import { ErrorRes, login } from '@/utils/api';

import styles from '../auth.module.scss';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const { onChangeEmail, onChangePassword } = useMemo(
    () => ({
      onChangeEmail: ({ target }: ChangeEvent<HTMLInputElement>) => {
        setEmail(target.value);
        setShowError(false);
      },
      onChangePassword: ({ target }: ChangeEvent<HTMLInputElement>) => {
        setPassword(target.value);
        setShowError(false);
      },
    }),
    [],
  );

  const { mutateAsync, isPending, isError } = useLogin();

  useEffect(() => {
    if (isError) {
      setShowError(true);
    }
  }, [isError]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      mutateAsync({ email, password }).then(() => {
        router.push(PagesPath.home);
      });
    },
    [email, password],
  );

  return (
    <>
      <h1 className={styles.title}>Login</h1>
      <h3 className={styles.subtitle}>
        Отримай доступ до оцінки аніме та збереження до власного списку!
      </h3>

      <form onSubmit={onSubmit} className={styles.form}>
        <TextField
          value={email}
          onChange={onChangeEmail}
          placeholder="Email"
          type="email"
          error={showError}
        />
        <PasswordInput
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
          error={showError}
        />

        <button type="submit" className={styles.submitButton} disabled={isPending || showError}>
          Log in
        </button>
      </form>

      <Link href={PagesPath.signup} className={styles.link}>
        Створити акаунт
      </Link>
    </>
  );
}

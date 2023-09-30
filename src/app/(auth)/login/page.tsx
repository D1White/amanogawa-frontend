'use client';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';

import { TextField } from '@/components';
import { PagesPath } from '@/utils';
import { ErrorRes, login } from '@/utils/api';

import styles from './login.module.scss';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { onChangeEmail, onChangePassword } = useMemo(
    () => ({
      onChangeEmail: ({ target }: ChangeEvent<HTMLInputElement>) => setEmail(target.value),
      onChangePassword: ({ target }: ChangeEvent<HTMLInputElement>) => setPassword(target.value),
    }),
    [],
  );

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setLoading(true);
      login({ email, password })
        .then((res) => {
          console.log(res);
          router.push(PagesPath.home);
        })
        .catch((err: AxiosError<ErrorRes>) => {
          console.log(err?.response?.data);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [email, password],
  );

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Login</h1>
      <h3 className={styles.subtitle}>
        Отримай доступ до оцінки аніме та збереження до власного списку!
      </h3>

      <form onSubmit={onSubmit} className={styles.form}>
        <TextField value={email} onChange={onChangeEmail} placeholder="Email" type="email" />
        <TextField
          value={password}
          onChange={onChangePassword}
          placeholder="Password"
          type="password"
        />

        <button type="submit" className={styles.submitButton} disabled={loading}>
          Log in
        </button>
      </form>
    </div>
  );
}

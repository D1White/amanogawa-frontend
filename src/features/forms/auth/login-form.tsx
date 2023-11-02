'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from 'react';

import { PasswordInput } from '@/components/PasswordInput';
import { TextField } from '@/components/TextField';
import { useLogin } from '@/hooks';
import { PagesPath } from '@/utils';

import styles from './auth-forms.module.scss';

export const LoginForm = () => {
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
    <form onSubmit={onSubmit} className={styles.form}>
      <TextField
        value={email}
        onChange={onChangeEmail}
        placeholder="Емейл"
        type="email"
        error={showError}
      />
      <PasswordInput
        value={password}
        onChange={onChangePassword}
        placeholder="Пароль"
        error={showError}
      />

      <button type="submit" className={styles.submitButton} disabled={isPending || showError}>
        Увійти
      </button>
    </form>
  );
};

'use client';

import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';

import { PasswordInput } from '@/components/PasswordInput';
import { TextField } from '@/components/TextField';
import { PagesPath } from '@/utils';
import { signUp, validateEmail, validateUsername } from '@/utils/api';

import styles from './auth-forms.module.scss';

export const SignUpForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({ email: '', username: '', password: '', repeatPassword: '' });

  const { onChangeEmail, onChangeUsername, onChangePassword, onChangePassword2 } = useMemo(
    () => ({
      onChangeEmail: ({ target }: ChangeEvent<HTMLInputElement>) => {
        setEmail(target.value);
        setError((prev) => ({ ...prev, email: '' }));
      },
      onChangeUsername: ({ target }: ChangeEvent<HTMLInputElement>) => {
        setUsername(target.value);
        setError((prev) => ({ ...prev, username: '' }));
      },
      onChangePassword: ({ target }: ChangeEvent<HTMLInputElement>) => {
        setPassword(target.value);
        setError((prev) => ({ ...prev, password: '', repeatPassword: '' }));
      },
      onChangePassword2: ({ target }: ChangeEvent<HTMLInputElement>) => {
        setPassword2(target.value);
        setError((prev) => ({ ...prev, repeatPassword: '' }));
      },
    }),
    [],
  );

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);

      if (username.length < 4 || username.length > 15) {
        setError((prev) => ({
          ...prev,
          username: 'Нікнейм повинен бути довше 4 символів і менше 15',
        }));
        setLoading(false);
        return;
      } else if (password.length < 5) {
        setError((prev) => ({
          ...prev,
          password: 'Пароль повинен бути довше 5 символів',
        }));
        setLoading(false);
        return;
      } else if (password !== password2) {
        setError((prev) => ({ ...prev, repeatPassword: 'Паролі не співпадають' }));
        setLoading(false);
        return;
      }

      try {
        const isEmailValid = await validateEmail(email);

        if (!isEmailValid) {
          setError((prev) => ({ ...prev, email: 'Користувач з таким емейлом вже існує' }));
          setLoading(false);
          return;
        }
      } catch (error) {
        setLoading(false);
        return;
      }

      try {
        const isUsernameValid = await validateUsername(username);

        if (!isUsernameValid) {
          setError((prev) => ({ ...prev, username: 'Користувач з таким нікнеймом вже існує' }));
          setLoading(false);
          return;
        }
      } catch (error) {
        setLoading(false);
        return;
      }

      try {
        await signUp({ email, username, password });
        router.push(PagesPath.home);
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error?.response?.data);
        }
      }

      setLoading(false);
    },
    [email, username, password, password2],
  );

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <TextField
        value={email}
        onChange={onChangeEmail}
        placeholder="Емейл"
        type="email"
        required
        error={!!error.email}
        helperText={error.email}
      />
      <TextField
        value={username}
        onChange={onChangeUsername}
        placeholder="Нікнейм"
        required
        error={!!error.username}
        helperText={error.username}
      />

      <PasswordInput
        value={password}
        onChange={onChangePassword}
        placeholder="Пароль"
        required
        error={!!error.password}
        helperText={error.password}
      />
      <PasswordInput
        value={password2}
        onChange={onChangePassword2}
        placeholder="Повтори пароль"
        required
        error={!!error.repeatPassword}
        helperText={error.repeatPassword}
      />

      <button type="submit" className={styles.submitButton} disabled={loading}>
        Зареєструватись
      </button>
    </form>
  );
};

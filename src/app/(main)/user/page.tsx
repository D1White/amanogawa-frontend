'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { PageLoader } from '@/components/PageLoader';
import { useGetUser } from '@/hooks';
import { PagesPath } from '@/utils';

export default function User() {
  const router = useRouter();

  const { data: user, isFetching } = useGetUser();

  useEffect(() => {
    if (user) {
      router.push(`${PagesPath.user}/${user.username}`);
    } else if (!isFetching && !user) {
      router.push(PagesPath.login);
    }
  }, [user]);

  return <PageLoader />;
}

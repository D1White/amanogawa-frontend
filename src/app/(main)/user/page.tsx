'use client';

import { useRouter } from 'next/navigation';

import { PageLoader } from '@/components/PageLoader';
import { useGetUser } from '@/hooks';
import { PagesPath } from '@/utils';

export default function User() {
  const router = useRouter();

  const { data: user, isFetching } = useGetUser();

  if (user) {
    router.push(`${PagesPath.user}/${user.username}`);
  } else if (!isFetching && !user) {
    router.push(PagesPath.login);
  }

  return <PageLoader />;
}

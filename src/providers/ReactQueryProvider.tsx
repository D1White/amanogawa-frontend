'use client';

import { DefaultOptions, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC, PropsWithChildren, useState } from 'react';

const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient({ defaultOptions }));

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

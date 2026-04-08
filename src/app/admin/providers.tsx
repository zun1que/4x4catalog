'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function AdminProviders({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

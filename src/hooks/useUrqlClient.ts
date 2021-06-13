import { useMemo } from 'react';
import { client } from '@/lib/urqlClient';
import { useSession } from 'next-auth/client';
import { Client, useClient } from 'urql';

export function useUrqlClient(options?: RequestInit) {
  const [session] = useSession();
  const token = session?.accessToken;
  // return useMemo(() => {

  return token;
  // ...options,
  // fetchOptions: () => {
  //   return {
  //     authorization: token ? `Bearer ${token}` : '',
  //   };
  // },

  // }, [options, token]);
}

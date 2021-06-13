import { VFC, ReactNode } from 'react';
import { Provider } from 'urql';
import { client } from '@/lib/urqlClient';
import { useSession } from 'next-auth/client';

type UrqlProviderProps = {
  children?: ReactNode;
};

const UrqlProvider: VFC<UrqlProviderProps> = ({ children }) => {
  const session = useSession();
  console.log(session);
  return <Provider value={client}>{children}</Provider>;
};

export default UrqlProvider;

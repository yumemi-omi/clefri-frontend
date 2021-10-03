import { VFC, ReactNode } from 'react';
import { Provider } from 'urql';
import useUrqlClient from '@/hooks/useUrqlClient';

type UrqlProviderProps = {
  children?: ReactNode;
};

const UrqlProvider: VFC<UrqlProviderProps> = ({ children }) => {
  const client  = useUrqlClient()
  return <Provider value={client}>{children}</Provider>;
};

export default UrqlProvider;

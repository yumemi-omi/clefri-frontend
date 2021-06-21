import { VFC, ReactNode } from 'react';
import { Provider } from 'urql';
import { client } from '@/lib/urqlClient';

type UrqlProviderProps = {
  children?: ReactNode;
};

const UrqlProvider: VFC<UrqlProviderProps> = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};

export default UrqlProvider;

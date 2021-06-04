import { GlobalStyles } from '@/styles/Globals';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';
import { client, ssrCache } from '@/lib/urqlClient';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ReactElement } from 'react';

function MyApp({ Component, pageProps }: AppProps): ReactElement<AppProps> {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }
  const { user } = pageProps;

  return (
    <>
      <GlobalStyles />
      <UserProvider user={user}>
        <Provider value={client}>
          <Component {...pageProps} />
        </Provider>
      </UserProvider>
    </>
  );
}

export default MyApp;

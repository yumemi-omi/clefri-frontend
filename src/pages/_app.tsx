import { GlobalStyles } from '@/styles/Globals';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';
import { client, ssrCache } from '@/lib/urqlClient';
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <Provider value={client}>
          <Component {...pageProps} />
        </Provider>
      </UserProvider>
    </>
  );
}

export default MyApp;

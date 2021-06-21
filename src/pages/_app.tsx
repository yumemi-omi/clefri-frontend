import { GlobalStyles } from '@/styles/Globals';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import UrqlProviders from '@/providers/UrqlProviders';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ssrCache } from '@/lib/urqlClient';

function MyApp({ Component, pageProps }: AppProps): ReactElement<AppProps> {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  const { user } = pageProps;

  return (
    <>
      <GlobalStyles />
      <UserProvider user={user}>
        <UrqlProviders>
          <Component {...pageProps} />
        </UrqlProviders>
      </UserProvider>
    </>
  );
}

export default MyApp;

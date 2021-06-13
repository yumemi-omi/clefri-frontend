import { GlobalStyles } from '@/styles/Globals';
import type { AppProps } from 'next/app';
import { ssrCache } from '@/lib/urqlClient';
import { ReactElement } from 'react';
import { Provider as AuthProvider } from 'next-auth/client';
import UrqlProvider from '@/components/UrqlProvider';

function MyApp({ Component, pageProps }: AppProps): ReactElement<AppProps> {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <>
      <GlobalStyles />
      <AuthProvider session={pageProps.session}>
        <UrqlProvider>
          <Component {...pageProps} />
        </UrqlProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;

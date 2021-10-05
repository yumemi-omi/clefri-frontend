import { GlobalStyles } from '@/styles/Globals';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import UrqlProviders from '@/providers/UrqlProviders';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps): ReactElement<AppProps> {
  console.log({ pageProps });
  return (
    <>
      <GlobalStyles />
      <SessionProvider session={pageProps.session}>
        <UrqlProviders>
          <Component {...pageProps} />
        </UrqlProviders>
      </SessionProvider>
    </>
  );
}

export default MyApp;

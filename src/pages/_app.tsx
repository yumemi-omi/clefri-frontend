import { GlobalStyles } from '@/styles/Globals';
import type { AppProps } from 'next/app';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

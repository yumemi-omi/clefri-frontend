import { GlobalStyles } from '@/styles/Globals';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';
import { client, ssrCache } from '@/lib/urqlClient';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <>
      <GlobalStyles />
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;

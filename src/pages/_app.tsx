import { GlobalStyles } from '@/styles/Globals';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import Router from 'next/router';
import UrqlProviders from '@/providers/UrqlProviders';
import { getConfig } from '@/lib/auth0Config';

const auth0Config = getConfig();

const onRedirectCallback = (appState: AppState) => {
  // Use Next.js's Router.replace method to replace the url
  Router.replace(appState?.returnTo || '/');
};

function MyApp({ Component, pageProps }: AppProps): ReactElement<AppProps> {
  return (
    <>
      <GlobalStyles />
      <Auth0Provider {...auth0Config} onRedirectCallback={onRedirectCallback}>
        <UrqlProviders>
          <Component {...pageProps} />
        </UrqlProviders>
      </Auth0Provider>
    </>
  );
}

export default MyApp;

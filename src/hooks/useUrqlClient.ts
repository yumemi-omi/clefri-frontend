import { useAuth0 } from '@auth0/auth0-react';
import { useMemo } from 'react';
import {
  createClient,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  makeOperation,
  Operation,
  Client,
} from 'urql';
import { authExchange } from '@urql/exchange-auth';
import { devtoolsExchange } from '@urql/devtools';

const useUrqlClient = (): Client => {
  const { getAccessTokenSilently, user } = useAuth0();

  return useMemo(() => {
    const client = createClient({
      // TODO: 環境変数で切り替え可能にする
      url: 'https://clefri-dev.hasura.app/v1/graphql',
      exchanges: [
        devtoolsExchange,
        dedupExchange,
        cacheExchange,
        authExchange({
          addAuthToOperation: ({
            authState,
            operation,
          }: {
            authState: { accessToken: string } | null;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            operation: Operation<any, any>;
          }) => {
            // the token isn't in the auth state, return the operation without changes
            if (!authState || !authState.accessToken) {
              return operation;
            }

            // fetchOptions can be a function (See Client API) but you can simplify this based on usage
            const fetchOptions =
              typeof operation.context.fetchOptions === 'function'
                ? operation.context.fetchOptions()
                : operation.context.fetchOptions || {};

            return makeOperation(operation.kind, operation, {
              ...operation.context,
              fetchOptions: {
                ...fetchOptions,
                headers: {
                  ...fetchOptions.headers,
                  authorization: `Bearer ${authState.accessToken}`,
                },
              },
            });
          },
          willAuthError: ({ authState }) => {
            if (!authState) return true;
            // e.g. check for expiration, existence of auth etc
            return false;
          },
          didAuthError: ({ error }) => {
            // check if the error was an auth error (this can be implemented in various ways, e.g. 401 or a special error code)
            return error.graphQLErrors.some(
              (e) => e.extensions?.code === 'FORBIDDEN'
            );
          },
          getAuth: async ({ authState }) => {
            // for initial launch, fetch the auth state from storage (local storage, async storage etc)
            if (!authState && user && typeof window !== 'undefined') {
              const accessToken = await getAccessTokenSilently();
              // const refreshToken = localStorage.getItem('refreshToken');
              if (accessToken) {
                return { accessToken };
              }
              return null;
            }

            /**
             * the following code gets executed when an auth error has occurred
             * we should refresh the token if possible and return a new auth state
             * If refresh fails, we should log out
             **/

            // if your refresh logic is in graphQL, you must use this mutate function to call it
            // if your refresh logic is a separate RESTful endpoint, use fetch or similar
            // const result = await requestAccessToken();

            // if (result) {
            // save the new tokens in storage for next restart
            // localStorage.setItem('token', result.data.refreshLogin.token);
            // localStorage.setItem(
            //   'refreshToken',
            //   result.data.refreshLogin.refreshToken
            // );

            // return the new tokens
            //   return {
            //     token: result,
            //   };
            // }

            // otherwise, if refresh fails, log clear storage and log out
            // localStorage.clear();

            // your app logout logic should trigger here
            // logout();

            return null;
          },
        }),
        fetchExchange,
      ],
    });
    return client;
  }, [user, getAccessTokenSilently]);
};

export default useUrqlClient;

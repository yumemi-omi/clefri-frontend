import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  makeOperation,
  Operation,
} from 'urql';
import { authExchange } from '@urql/exchange-auth';
import { devtoolsExchange } from '@urql/devtools';
// import auth0 from '@/lib/auth0';

const requestAccessToken = async (): Promise<string> => {
  let accessToken;
  if (accessToken) return accessToken;

  // TODO: 環境変数で切り替え可能にする
  const res = await fetch(`http://localhost:3000/api/token`);
  if (res.ok) {
    const json = await res.json();

    return json.accessToken;
  } else {
    return 'public';
  }
};

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({
  isClient: !isServerSide,
  initialState: !isServerSide ? window.__URQL_DATA__ : undefined,
});
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
        authState: { token: string };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        operation: Operation<any, any>;
      }) => {
        // the token isn't in the auth state, return the operation without changes
        if (!authState || !authState.token || isServerSide) {
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
              authorization: `Bearer ${authState.token}`,
            },
          },
        });
      },
      // willAuthError: ({ authState }) => {
      //   if (!authState) return true;
      //   // e.g. check for expiration, existence of auth etc
      //   return false;
      // },
      // didAuthError: ({ error }) => {
      //   // check if the error was an auth error (this can be implemented in various ways, e.g. 401 or a special error code)
      //   return error.graphQLErrors.some(
      //     (e) => e.extensions?.code === 'FORBIDDEN'
      //   );
      // },
      getAuth: async ({ authState, mutate }) => {
        if (isServerSide) return null;
        // for initial launch, fetch the auth state from storage (local storage, async storage etc)
        // if (!authState) {
        // const token = localStorage.getItem('token');
        // // const refreshToken = localStorage.getItem('refreshToken');
        // if (token && refreshToken) {
        //   return { token, refreshToken };
        // }
        //   return null;
        // }

        /**
         * the following code gets executed when an auth error has occurred
         * we should refresh the token if possible and return a new auth state
         * If refresh fails, we should log out
         **/

        // if your refresh logic is in graphQL, you must use this mutate function to call it
        // if your refresh logic is a separate RESTful endpoint, use fetch or similar
        const result = await requestAccessToken();

        if (result) {
          // save the new tokens in storage for next restart
          // localStorage.setItem('token', result.data.refreshLogin.token);
          // localStorage.setItem(
          //   'refreshToken',
          //   result.data.refreshLogin.refreshToken
          // );

          // return the new tokens
          return {
            token: result,
          };
        }

        // otherwise, if refresh fails, log clear storage and log out
        // localStorage.clear();

        // your app logout logic should trigger here
        // logout();

        return null;
      },
    }),
    ssrCache,
    fetchExchange,
  ],
  // fetchOptions: () => {
  //   const token = requestAccessToken();
  //   console.log({ token });
  //   return {
  //     headers: { authorization: token ? `Bearer ${token}` : '' },
  //   };
  // },
});

export { client, ssrCache };

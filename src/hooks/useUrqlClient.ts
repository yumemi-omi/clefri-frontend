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
import { useSession } from 'next-auth/react';
import * as React from 'react';

const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({
  isClient: !isServerSide,
  initialState: !isServerSide ? window.__URQL_DATA__ : null,
});

const useClient = (options?: RequestInit) => {
  const { data } = useSession();
  const accessToken = data?.accessToken;

  return React.useMemo(() => {
    const client = createClient({
      url: process.env.HASURA_API_ENDPOINT || "",
      fetchOptions: () => {
        return {
          headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : '',
            ...(options?.headers ? options.headers : {}),
          },
        };
      },
      exchanges: [
        devtoolsExchange,
        dedupExchange,
        cacheExchange,
        ssrCache,
        // authExchange({
        //   addAuthToOperation: ({
        //     authState,
        //     operation,
        //   }: {
        //     authState: { token: string | null };
        //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
        //     operation: Operation<any, any>;
        //   }) => {
        //     // the token isn't in the auth state, return the operation without changes
        //     if (!authState || !authState.token || isServerSide) {
        //       return operation;
        //     }

        //     // fetchOptions can be a function (See Client API) but you can simplify this based on usage
        //     const fetchOptions =
        //       typeof operation.context.fetchOptions === 'function'
        //         ? operation.context.fetchOptions()
        //         : operation.context.fetchOptions || {};

        //     return makeOperation(operation.kind, operation, {
        //       ...operation.context,
        //       fetchOptions: {
        //         ...fetchOptions,
        //         headers: {
        //           ...fetchOptions.headers,
        //           authorization: `Bearer ${authState.token}`,
        //         },
        //       },
        //     });
        //   },
        //   willAuthError: ({ authState }) => {
        //     if (!authState) return true;
        //     // e.g. check for expiration, existence of auth etc
        //     return false;
        //   },
        //   didAuthError: ({ error }) => {
        //     // check if the error was an auth error (this can be implemented in various ways, e.g. 401 or a special error code)
        //     return error.graphQLErrors.some(
        //       (e) => e.extensions?.code === 'FORBIDDEN'
        //     );
        //   },
        //   getAuth: async ({ authState, mutate }) => {
        //     if (isServerSide) return null;

        //     // for initial launch, fetch the auth state from storage (local storage, async storage etc)
        //     if (!authState) {
        //       if (token) {
        //         return {
        //           token,
        //         };
        //       }
        //       return null;
        //     }

        //     /**
        //      * the following code gets executed when an auth error has occurred
        //      * we should refresh the token if possible and return a new auth state
        //      * If refresh fails, we should log out
        //      **/
        //     const session = await getSession();
        //     if (session) {
        //       // return the new tokens
        //       return {
        //         token: session.token,
        //       };
        //     }

        //     // otherwise, if refresh fails, log clear storage and log out
        //     // localStorage.clear();

        //     // your app logout logic should trigger here
        //     // logout();

        //     return null;
        //   },
        // }),
        fetchExchange,
      ],
    });

    return client;
  }, [options, accessToken]);
};

export default useClient;

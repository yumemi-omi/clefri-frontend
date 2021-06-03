import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from 'urql';

const isSeverSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isSeverSide });
const client = createClient({
  url: 'https://clefri-dev.hasura.app/v1/graphql',
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    return {
      headers: {},
    };
  },
});

// async function getHeaders(ctx) {
//   if (typeof window !== 'undefined') return null
//   if (typeof ctx.req === 'undefined') return null

//   const s = await auth0.getSession(ctx.req)
//   if (s && s.accessToken == null) return null

//   return {
//     authorization: `Bearer ${s ? s.accessToken: ''}`
//   }
// }

export { client, ssrCache };

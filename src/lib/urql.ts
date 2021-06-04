import { createClient } from 'urql';

let accessToken = '';

const requestAccessToken = async () => {
  if (accessToken) return;

  const res = await fetch(`${process.env.APP_HOST}/api/session`);
  if (res.ok) {
    const json = await res.json();
    accessToken = json.accessToken;
  } else {
    accessToken = 'public';
  }
};

export default function initUrqlClient() {
  const ssrMode = typeof window === 'undefined';
  // if (ssrMode) {
  //   link = createHttpLink(headers)
  // } else {
  //   link = createWSLink()
  // }
  return createClient({
    url: 'https://api.github.com/graphql',
    fetchOptions: {
      headers: {
        Authorization: `bearer ${accessToken}`,
        Accept: 'application/vnd.github.packages-preview+json',
      },
    },
  });
}

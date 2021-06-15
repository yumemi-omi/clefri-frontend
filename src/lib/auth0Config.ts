export function getConfig(): {
  domain: string;
  clientId: string;
  redirectUri: string;
  audience: string;
  scope: string;
} {
  return {
    domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN ?? '',
    clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID ?? '',
    redirectUri:
      typeof window !== 'undefined'
        ? window.location.origin
        : 'http://localhost:3000',
    audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE ?? '',
    scope: 'read:current_user',
  };
}

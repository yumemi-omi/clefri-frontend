import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';
// import jwt from 'jsonwebtoken'

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    Auth0Provider({
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
      clientId: process.env.AUTH0_CLIENT_ID || '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
      authorization: {
        params: {
          audience: process.env.AUTH0_AUDIENCE,
        },
      },
      // `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&audience=${process.env.AUTH0_AUDIENCE}`
    }),
  ],
  session: {
    jwt: true,
  },
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
    // encode: async ({ secret, token, maxAge }) => {
    //   console.log({encodeのtoken: token})
    //   if (!token) {
    //     return ''
    //   }
    //   const jwtClaims = {
    //     "sub": token.sub?.toString(),
    //     "name": token.name,
    //     "email": token.email,
    //     "iat": Date.now() / 1000,
    //     "exp": Math.floor(Date.now() / 1000) + (24*60*60),
    //     "https://hasura.io/jwt/claims": {
    //       "x-hasura-allowed-roles": ["user"],
    //       "x-hasura-default-role": "user",
    //       "x-hasura-role": "user",
    //       "x-hasura-user-id": token.sub?.toString(),
    //     }
    //   };
    //   const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: 'RS512'});
    //   console.log({encodedToken})
    //   return encodedToken;
    // },
    // decode: async ({ secret, token, maxAge }) => {
    //   const decodedToken = token && jwt.verify(token, secret, { algorithms: ['RS512']});
    //   return decodedToken;
    // },
  },
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    async session({ session, token, user }) {
      console.log({ セッション: session, user, token });
      // const encodedToken = jwt.sign(token, process.env.SECRET, { algorithm: 'RS512'});
      const accessToken = '';
      return Promise.resolve({
        ...session,
        accessToken: token.access_token,
        user: {
          ...session.user,
          id: token.sub?.toString(),
        },
      });
    },
    async jwt({ token, account, user, profile }) {
      console.log({ ジョット: token, account, user, profile });
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
  },
  theme: 'auto',
  pages: {
    signIn: '/auth/signin',
  },
  debug: true,
});

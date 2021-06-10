import { FC, useEffect } from 'react';
import Button from '@/components/root/Button';
import { css } from '@emotion/react';
import { client, ssrCache } from '@/lib/urqlClient';
import { useQuery, gql } from 'urql';
import auth0 from '@/lib/auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const testQuery = gql`
  query MyQuery {
    user {
      display_name
      user_name
    }
  }
`;

const myStyle = css`
  color: hotpink;
  font-size: 1rem;
  font-weight: bold;
`;

const Home: FC = (props) => {
  const [result] = useQuery({
    query: testQuery,
  });
  console.log({ result });

  // useEffect(() => {
  //   const handleGetUserData = () => {
  //     return fetch(`/api/token`).then((res) => {
  //       console.log({ res });
  //       return res.json();
  //     });
  //   };
  //   handleGetUserData();
  // }, []);

  return (
    <section css={myStyle}>
      <h1>サンプル</h1>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>

      <Button>Lets Start!!</Button>
    </section>
  );
};

// export const getServerSideProps = withPageAuthRequired({
//   returnTo: '/',
//   async getServerSideProps({ req, res }) {
//     const response = await fetch('http://localhost:3000/api/token');
//     const { accessToken } = await response.json();
//     console.log({ accessToken, response });

//     const result = await auth0.getAccessToken(req, res);
//     await client
//       .query(testQuery, undefined, {
//         fetchOptions: () => {
//           return {
//             headers: {
//               authorization: result.accessToken
//                 ? `Bearer ${result.accessToken}`
//                 : '',
//             },
//           };
//         },
//       })
//       .toPromise();
//     return { props: { urqlState: ssrCache.extractData() } };
//   },
// });

// export async function getStaticProps() {
//   await client.query(testQuery).toPromise();
//   return { props: { urqlState: ssrCache.extractData() }, revalidate: 60 };
// }

export default Home;

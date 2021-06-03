import { FC } from 'react';
import Button from '@/components/root/Button';
import { css } from '@emotion/react';
import { client, ssrCache } from '@/lib/urqlClient';
import { useQuery } from 'urql';
import { SSRData } from 'next-urql';

const testQuery = `
  query MyQuery {
    user {
      display_name
      email
    }
  }
`;

const myStyle = css`
  color: hotpink;
  font-size: 1rem;
  font-weight: bold;
`;

const Home: FC = () => {
  // const [result] = useQuery({
  //   query: testQuery,
  // });
  // const { data, fetching, error } = result;
  // if (fetching) {
  //   return <section>fetching</section>;
  // }
  // if (error) {
  //   return <section>error</section>;
  // }

  return (
    <section css={myStyle}>
      <h1>サンプル</h1>
      <a href="/api/auth/login">Login</a>
      <a href="/api/auth/logout">Logout</a>

      {/* <p>{data}</p> */}
      <Button>Lets Start!!</Button>
    </section>
  );
};

// export async function getServerSideProps(): Promise<{
//   props: {
//     urqlState: SSRData;
//   };
// }> {
//   await client.query(testQuery).toPromise();
//   return { props: { urqlState: ssrCache.extractData() } };
// }

// export async function getStaticProps() {
//   await client.query(testQuery).toPromise();
//   return { props: { urqlState: ssrCache.extractData() }, revalidate: 60 };
// }

export default Home;

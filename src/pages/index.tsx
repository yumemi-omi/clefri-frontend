import { VFC } from 'react';
import { css } from '@emotion/react';
import { useQuery, gql } from 'urql';
import Link from 'next/link';

const myStyle = css`
  color: hotpink;
  font-size: 1rem;
  font-weight: bold;
`;

const Home: VFC = () => {
  return (
    <section css={myStyle}>
      <h1>サンプル</h1>
      <button>Login</button>
      <button>Logout</button>
      <Link href="/profile">プロフィールへ</Link>
    </section>
  );
};

export default Home;

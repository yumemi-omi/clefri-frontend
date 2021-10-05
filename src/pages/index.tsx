import { VFC } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

const myStyle = css`
  color: hotpink;
  font-size: 1rem;
  font-weight: bold;
`;

const Home: VFC = (props) => {
  const { data } = useSession();

  console.log({ data, props });
  return (
    <section css={myStyle}>
      <h1>サンプル</h1>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
      <Link href="/api/auth/login">Login</Link>
      <Link href="/api/auth/logout">Logout</Link>
      <Link href="/profile">プロフィールへ</Link>
    </section>
  );
};

export default Home;

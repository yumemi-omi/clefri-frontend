import { VFC } from 'react';
import { css } from '@emotion/react';
import { useQuery, gql } from 'urql';
import { useAuth0 } from '@auth0/auth0-react';

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

const Home: VFC = () => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [result] = useQuery({
    query: testQuery,
  });
  console.log({ result, user });

  return (
    <section css={myStyle}>
      <h1>サンプル</h1>
      <button onClick={async () => await loginWithRedirect()}>Login</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Logout
      </button>
    </section>
  );
};

export default Home;

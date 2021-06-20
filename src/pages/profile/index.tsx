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

const Profile: VFC = () => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [result] = useQuery({
    query: testQuery,
  });
  console.log({ result, user });

  return (
    <section>
      <h1>サンプル</h1>
      <button onClick={async () => await loginWithRedirect()}>ログイン</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        ログアウト
      </button>
    </section>
  );
};

export default Profile;

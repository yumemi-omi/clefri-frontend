import { VFC } from 'react';
import { css } from '@emotion/react';
import { useQuery, useMutation, gql } from 'urql';
import { useAuth0 } from '@auth0/auth0-react';

const FetchUser = gql`
  query MyQuery($user_id: String!) {
    user(where: { user_id: { _eq: $user_id } }) {
      user_id
      user_name
      display_name
      mail
    }
  }
`;

const UpdateUser = gql`
  mutation MyMutation(
    $user_id: String = ""
    $display_name: String = ""
    $mail: String = ""
  ) {
    update_user(
      where: { user_id: { _eq: $user_id } }
      _set: { mail: $mail, display_name: $display_name }
    ) {
      affected_rows
      returning {
        user_id
        user_name
        display_name
        mail
      }
    }
  }
`;

const Profile: VFC = () => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [result] = useQuery({
    query: FetchUser,
    variables: {
      user_id: user?.sub,
    },
    pause: !user,
  });
  const [updateResult, updateUser] = useMutation(UpdateUser);

  const submit = async () => {
    const variables = {
      user_id: user?.sub,
      display_name: 'test太郎',
      mail: 'test mail',
    };
    const result = await updateUser(variables);
    console.log('update', { result });
  };

  if (!user || result.error || result.fetching || updateResult.fetching) {
    console.log({ user, result, updateResult });
    return <div>Loading</div>;
  }

  const my = result.data && result.data.user && result.data.user[0];
  if (!my) {
    return (
      <div>
        <div> ログインしてください</div>
        <button onClick={async () => await loginWithRedirect()}>
          ログイン
        </button>
      </div>
    );
  }

  return (
    <section>
      <h1>プロフィール</h1>
      <div>
        <div>id: {my.user_id}</div>
        <div>name: {my.user_name}</div>
        <div>mail: {my.mail}</div>
        <div>display_name: {my.display_name}</div>
      </div>
      <form id="profile-form" onSubmit={submit}>
        <button type="submit" value="更新内容送信" form="profile-form">
          更新
        </button>
      </form>
      <button onClick={async () => await loginWithRedirect()}>ログイン</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        ログアウト
      </button>
    </section>
  );
};

export default Profile;

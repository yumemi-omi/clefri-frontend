import { VFC } from 'react';
// import { css } from '@emotion/react';
import { useQuery, useMutation, gql } from 'urql';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import auth0 from '@/lib/auth0';
import { client, ssrCache } from '@/lib/urqlClient';

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

const Profile: VFC = (props) => {
  const { user, isLoading } = useUser();
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

  if (
    !user ||
    isLoading ||
    result.error ||
    result.fetching ||
    updateResult.fetching
  ) {
    return <pre>{JSON.stringify(props, null, 2)}</pre>;
  }

  const my = result.data && result.data.user && result.data.user[0];
  if (!my) {
    return (
      <div>
        <div> ログインしてください</div>
        <Link href="/api/auth/login">Login</Link>
      </div>
    );
  }

  return (
    <section>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <Link href="/">ホームへ</Link>
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
      <Link href="/api/auth/logout">Logout</Link>
    </section>
  );
};

export const getServerSideProps = auth0.withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res }) {
    const accessToken = await auth0.getAccessToken(req, res);

    const session = auth0.getSession(req, res);
    console.log({});
    if (session) {
      await client
        .query(
          FetchUser,
          {
            user_id: session.user.sub,
          },
          {
            fetchOptions: () => {
              return {
                headers: {
                  authorization: session.accessToken
                    ? `Bearer ${session.accessToken}`
                    : '',
                },
              };
            },
          }
        )
        .toPromise();
    }
    return {
      props: {
        urqlState: ssrCache.extractData(),
        ...session,
        directAccessToken: accessToken,
      },
    };
  },
});

export default Profile;

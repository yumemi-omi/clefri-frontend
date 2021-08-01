import { VFC, useEffect } from 'react';
// import { css } from '@emotion/react';
import { useQuery, useMutation } from 'urql';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import auth0 from '@/lib/auth0';
import { client, ssrCache } from '@/lib/urqlClient';
import {
  AddFoodstuff,
  FetchUser,
  UpdateUser,
  UpdateUserStatus,
  FetchBoxes,
} from '@/modules/schema';
import useFoodstuff from '@/modules/useFoodstuff';

const Profile: VFC = (props) => {
  useEffect(() => {
    const fireLambdaFunc = async () => {
      const result = await fetch(
        'https://dhase0awdk.execute-api.ap-northeast-1.amazonaws.com/dev/'
      );
      console.log({ resultJson: result.json() });
    };
    fireLambdaFunc();
  }, []);

  const { user, isLoading } = useUser();
  const [result] = useQuery({
    query: FetchUser,
    variables: {
      user_id: user?.sub,
    },
    pause: !user,
  });
  const [fetchBoxesResult] = useQuery({
    query: FetchBoxes,
    variables: {
      _eq: user?.sub,
    },
    pause: !user,
  });
  const [updateResult, updateUser] = useMutation(UpdateUser);
  const [updateStatusResult, updateUserStatus] = useMutation(UpdateUserStatus);
  const [addFoodstuffResult, addFoodstuff] = useMutation(AddFoodstuff);

  if (
    !user ||
    isLoading ||
    result.error ||
    result.fetching ||
    updateResult.fetching
  ) {
    return <pre>{JSON.stringify(props, null, 2)}</pre>;
  }

  const my = result.data && result.data.user_by_pk;
  if (!my) {
    return (
      <div>
        <div> ログインしてください</div>
        <Link href="/api/auth/login">Login</Link>
      </div>
    );
  }

  const leaveApp = async () => {
    const variables = {
      user_status_id: my.user_status.user_status_id,
    };
    const result = await updateUserStatus(variables);
    console.log('leaveApp', { result });
  };

  const submit = async () => {
    const variables = {
      user_id: user?.sub,
      display_name: 'test太郎',
      mail: 'test mail',
    };
    const result = await updateUser(variables);
    console.log('submit', { result });
  };

  const onAddFoodstuff = async () => {
    const variables = {
      foodstuff_name: 'テスト食材',
      quantity: 2,
      box_id: '6e7fb97e-9732-43b9-bee6-dda4def17e21',
    };
    const result = await addFoodstuff(variables);
    console.log('onAddFoodstuff', { result });
  };

  if (!my.user_status.active) {
    return (
      <div>
        <div>退会しています</div>
        <Link href="/api/auth/login">
          再登録の際は、再度サインアップしてください
        </Link>
      </div>
    );
  }

  return (
    <section>
      <pre>{JSON.stringify(fetchBoxesResult.data, null, 2)}</pre>
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
      <div>
        <button onClick={leaveApp}>押すと退会</button>
      </div>
      <div>
        <button onClick={onAddFoodstuff}>押すと食材追加</button>
      </div>
      <div>
        <Link href="/api/auth/logout">Logout</Link>
      </div>
    </section>
  );
};

export const getServerSideProps = auth0.withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res }) {
    const accessToken = await auth0.getAccessToken(req, res);

    const session = auth0.getSession(req, res);
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

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FC } from 'react';

const Profile: FC = (props) => {
  const { user, error, isLoading } = useUser();
  if (isLoading || !user) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log({ props });
  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired({
  // default is auth0 login page
  returnTo: '/profile',
  async getServerSideProps(ctx) {
    return { props: { customProp: 'bar' } };
  },
});
export default Profile;

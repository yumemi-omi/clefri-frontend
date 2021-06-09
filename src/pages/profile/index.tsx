import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { FC, useEffect } from 'react';
import auth0 from '@/lib/auth0';

const Profile: FC = (props) => {
  const { user, error, isLoading, checkSession } = useUser();

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/profile',
  async getServerSideProps(_ctx) {
    return { props: {} };
  },
});

export default Profile;

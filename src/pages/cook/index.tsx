import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const Cook = withPageAuthRequired(
  function cook({ user }) {
    console.log({ user });
    return <div>cooking mode</div>;
  },
  {
    onError: function error(error) {
      return <div>{error.message}</div>;
    },
    onRedirecting: function onRedirecting() {
      return <div>Redirecting you to the login...</div>;
    },
    returnTo: '/cook',
  }
);

export default Cook;

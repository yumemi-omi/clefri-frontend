import { getProviders, signIn } from 'next-auth/react';

type Props = {
  providers: ReturnType<typeof getProviders>;
};

export default function SignIn({ providers }: Props) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

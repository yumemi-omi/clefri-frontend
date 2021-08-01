import auth0 from '@/lib/auth0';

export default auth0.withApiAuthRequired(async function token(req, res) {
  const session = await auth0.getSession(req, res);
  res.status(200).json({ accessToken: session?.accessToken });
});

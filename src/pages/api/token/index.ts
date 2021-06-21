import auth0 from '@/lib/auth0';

export default auth0.withApiAuthRequired(async function token(req, res) {
  const { accessToken } = await auth0.getAccessToken(req, res);
  console.log({ accessToken });
  res.status(200).json({ accessToken });
});

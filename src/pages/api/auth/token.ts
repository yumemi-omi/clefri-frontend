import { getToken } from 'next-auth/jwt';

export default async function token(req, res) {
  const token = await getToken();
  console.log({ token });
  res.status(200).json({ token });
}

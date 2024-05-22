import { jwtVerify } from 'jose';

export default async function verifyToken(token: string): Promise<boolean> {
  const secretBytes = new TextEncoder().encode(process.env.JWT_SECRET);
  if (!token) return false;
  try {
    await jwtVerify(token, secretBytes, {
      algorithms: ['HS256'],
    });
    return true;
  } catch (error) {
    return false;
  }
}

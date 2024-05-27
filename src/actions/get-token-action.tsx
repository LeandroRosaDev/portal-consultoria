'use server';

import { cookies } from 'next/headers';

export default async function getToken() {
  const token = cookies().get('token');
  return token;
}

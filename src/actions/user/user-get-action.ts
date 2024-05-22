'use server';

import { cookies } from 'next/headers';

export async function userGetAction() {
  const token = cookies().get('token')?.value;

  try {
    const response = await fetch(
      'https://apiconsultoria.altuori.com/wp-json/api/usuario',
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
        next: {
          revalidate: 60,
        },
      },
    );

    const data = await response.json();
    return { data, ok: true, error: '' };
  } catch (error: unknown) {
    throw error;
  }
}

'use server';

import apiError from '@/functions/api-error';
import { url } from '@/functions/url';

export default async function passwordLost(state: {}, formData: FormData) {
  const login = formData.get('login') as string | null;
  const urlPerdeu = formData.get('url') as string | null;

  try {
    if (!login) throw new Error('Preencha os dados.');

    const response = await fetch(url + '/wp-json/api/password/lost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        url: urlPerdeu,
      }),
    });

    if (!response.ok) throw new Error('Email ou usuário não cadastrado.');
    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}

'use server';

import apiError from '@/functions/api-error';
import { url } from '@/functions/url';
import { cookies } from 'next/headers';

export async function editUserInfoo(
  state: {},
  formData: FormData,
  passwordConfirmation: string,
) {
  const token = cookies().get('token')?.value;
  const username = formData.get('username') as string | null;
  const newPassword = formData.get('newPassword') as string | null;

  try {
    if (!username && !newPassword) throw new Error('Preencha os dados.');
    if (!passwordConfirmation)
      throw new Error('Confirmação de senha necessária.');
    if (username === null) throw new Error('Nome de usuário não fornecido.');

    const confirmed = await confirmUserPassword(username, passwordConfirmation);

    if (!confirmed) throw new Error('Senha incorreta.');

    const response = await fetch(url + '/wp-json/api/usuario', {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    });

    if (!response.ok)
      throw new Error('Falha ao editar informações do usuário.');

    return { data: null, ok: true, error: '' };
  } catch (error: unknown) {
    return apiError(error);
  }
}

async function confirmUserPassword(
  username: string,
  password: string,
): Promise<boolean> {
  try {
    const response = await fetch(url + '/wp-json/jwt-auth/v1/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (!response.ok) throw new Error('Falha ao confirmar a senha.');

    const data = await response.json();

    return data.token ? true : false;
  } catch (error) {
    console.error('Erro ao confirmar senha:', error);
    return false;
  }
}

'user serve';
import apiError from '@/functions/api-error';
import { url } from '@/functions/url';
import getToken from '../get-token-action';

export async function editUserInfo(
  state: {},
  formData: FormData,
  passwordConfirmation: string,
) {
  const username = (formData.get('username') as string) || null;
  const newPassword = (formData.get('newPassword') as string) || null;

  try {
    if (!username || !newPassword || !passwordConfirmation)
      throw new Error('Preencha os dados.');

    const confirmed = await confirmUserPassword(username, passwordConfirmation);

    if (!confirmed) throw new Error('Senha incorreta.');

    const response = await fetch(url + '/sua-rota-de-edicao-de-usuario', {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + getToken,
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
    const response = await fetch(
      url + '/wp-json/custom-auth/v1/confirm-password',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      },
    );

    if (!response.ok) throw new Error('Falha ao confirmar a senha.');

    const data = await response.json();
    console.log(data);

    return data.passwordConfirmed === true;
  } catch (error) {
    console.error('Erro ao confirmar senha:', error);
    return false;
  }
}

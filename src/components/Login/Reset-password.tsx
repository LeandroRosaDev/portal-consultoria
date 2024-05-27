'use client';

import Input from '../FormComponentes/Input';
import { Button } from '../FormComponentes/Button';
import { useFormState } from 'react-dom';
import passwordReset from '@/actions/login/reset-password-action';

export default function ResetarSenha({
  keyToken,
  login,
}: {
  login: string;
  keyToken: string;
}) {
  const [state, action] = useFormState(passwordReset, {
    ok: false,
    error: '',
    data: null,
  });

  return (
    <form action={action} className="flex flex-col gap-7">
      <Input
        placeholder="Insira sua nova senha."
        name="password"
        id="password"
        type="password"
        required
        className="w-80 mb-12"
      />

      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <Button className="bg-blue-500 w-60 text-xl h-8 font-bold text-white rounded-md mx-auto">
        Enviar
      </Button>
    </form>
  );
}

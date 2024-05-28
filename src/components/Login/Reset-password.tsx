'use client';

import Input from '../FormComponentes/Input';
import { Button } from '../FormComponentes/Button';
import { useFormState } from 'react-dom';
import passwordReset from '@/actions/login/reset-password-action';
import { FormEvent, useState } from 'react';

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

  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (senha !== confirmSenha) {
      setError('As senhas não coincidem.');
    } else {
      setError('');
    }
  };

  return (
    <form action={action} className="flex flex-col gap-7">
      <Input
        placeholder="Digite sua nova senha"
        name="password"
        id="password"
        type="password"
        required
        className="w-80"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        onBlur={handleBlur}
      />
      <Input
        placeholder="Repetir a senha"
        name="password"
        id="password-2"
        type="password"
        required
        className="w-80 mb-12"
        value={confirmSenha}
        onChange={(e) => setConfirmSenha(e.target.value)}
        onBlur={handleBlur}
      />

      {error && <p className="text-red-500 w-full">{error}</p>}

      <input type="hidden" name="login" value={login} />
      <input type="hidden" name="key" value={keyToken} />
      <Button className="xl:w-40 2xl:w-52">Enviar</Button>
    </form>
  );
}

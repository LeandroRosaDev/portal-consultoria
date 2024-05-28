'use client';
import React, { useEffect, useState } from 'react';
import Input from '../FormComponentes/Input';
import { Button } from '../FormComponentes/Button';
import { useFormState } from 'react-dom';
import passwordLost from '@/actions/login/password-lost';

export default function RecuperarSenha() {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  });

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href.replace('recuperar', 'resetar'));
  }, []);

  return (
    <form action={action} className="flex flex-col gap-7">
      <Input
        placeholder="Insira o seu e-mail"
        name="login"
        id="email"
        type="text"
        required
        className="w-80 mb-12"
      />

      <input type="hidden" name="url" value={url} />
      <Button className="btn xl:w-40 2xl:w-52">Enviar</Button>
      {state.ok && <p className="text-red-600">Email enviado.</p>}
    </form>
  );
}

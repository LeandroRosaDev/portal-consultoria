'use client';
import React from 'react';
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

  React.useEffect(() => {
    if (state.ok) window.location.href = '/login';
  }, [state.ok]);

  return (
    <form className="flex flex-col gap-7">
      <Input
        placeholder="Insira o seu e-mail"
        name="login"
        id="email"
        type="text"
        required
        className="w-80 mb-12"
      />
      <input
        type="hidden"
        name="url"
        value={`${window.location.href.replace('recuperar', 'resetar')}`}
      />
      <Button className="bg-blue-500 w-60 text-xl h-8 font-bold text-white rounded-md mx-auto">
        Enviar
      </Button>
    </form>
  );
}

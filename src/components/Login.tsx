'use client';

import { loginAction } from '@/actions/login/login-action';
import { Button } from './Button';
import Input from './Input';

export default function Login() {
  return (
    <form action={loginAction} className="flex flex-col gap-7">
      <Input
        placeholder="Insira seu nome ou e-mail"
        name="username"
        id="password"
        type="text"
      />
      <Input
        placeholder="Insira sua senha"
        name="password"
        id="password"
        type="password"
      />
      <button className="bg-blue-500 w-60 text-xl h-8 font-bold text-white rounded-md mx-auto">
        Entrar
      </button>
    </form>
  );
}

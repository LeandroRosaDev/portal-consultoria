"use client";

import React from "react";
import { loginAction } from "@/actions/login/login-action";
import Input from "../FormComponentes/Input";
import { Button } from "../FormComponentes/Button";
import { useFormState } from "react-dom";

export default function Login() {
  const [state, action] = useFormState(loginAction, {
    ok: false,
    error: "",
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = "/login";
  }, [state.ok]);

  return (
    <form action={action} className="flex flex-col gap-7">
      <Input
        placeholder="Insira seu nome ou e-mail"
        name="username"
        id="username"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Insira sua senha"
        name="password"
        id="password"
        type="password"
        required
        className="w-72"
      />
      <Button className="btn xl:w-40 2xl:w-52">Entrar</Button>
      <p>{state.error}</p>
    </form>
  );
}

"use client";

import React, { useState } from "react";
import { loginAction } from "@/actions/login/login-action";
import Input from "../Input";

export default function Login() {
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      setFormError("Todos os campos são obrigatórios");
      return;
    }

    setFormError("");

    try {
      await loginAction(formData);
    } catch (error) {
      setFormError(
        "Falha ao fazer login. Verifique suas credenciais e tente novamente."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      {formError && <p className="text-red-500">{formError}</p>}
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
      <button className="bg-blue-500 w-60 text-xl h-8 font-bold text-white rounded-md mx-auto">
        Entrar
      </button>
    </form>
  );
}

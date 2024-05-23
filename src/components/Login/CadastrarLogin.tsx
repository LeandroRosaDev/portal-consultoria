"use client";

import React, { useState } from "react";
import Input from "../Input";
import { loginCadastroAction } from "@/actions/login/login-cadastro-action";
import { Button } from "../Button";

export default function CadastrarLogin() {
  return (
    <form
      action={loginCadastroAction}
      className="flex flex-row flex-wrap gap-7"
    >
      <Input
        placeholder="Insira um nome de usuário ou e-mail"
        name="email"
        id="email"
        type="text"
        required
        className="w-80"
      />
      <Input
        placeholder="Nome Completo"
        name="nome"
        id="nome"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Crie uma senha forte"
        name="senha"
        id="senha"
        type="password"
        required
        className="w-72"
      />
      <Input
        placeholder="Rua"
        name="rua"
        id="rua"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Número"
        name="numero"
        id="numero"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Complemento"
        name="complemento"
        id="complemento"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Cep"
        name="cep"
        id="cep"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Bairro"
        name="bairro"
        id="bairro"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Cidade"
        name="cidade"
        id="cidade"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Estado"
        name="estado"
        id="estado"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Telefone"
        name="telefone"
        id="telefone"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Gênero"
        name="genero"
        id="genero"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Origem"
        name="origem"
        id="origem"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Tipo de acesso"
        name="tipo_acesso"
        id="tipo_acesso"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Servico"
        name="servico"
        id="servico"
        type="text"
        required
        className="w-72"
      />
      <Button className="bg-blue-500 w-60 text-xl h-8 font-bold text-white rounded-md mx-auto">
        Salvar
      </Button>
    </form>
  );
}

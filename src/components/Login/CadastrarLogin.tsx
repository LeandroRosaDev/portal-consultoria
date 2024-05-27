'use client';

import React, { FormEvent, useState } from 'react';
import Input from '../FormComponentes/Input';
import { loginCadastroAction } from '@/actions/login/login-cadastro-action';
import { Button } from '../FormComponentes/Button';

export default function CadastrarLogin() {
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [error, setError] = useState('');

  const handleBlur = () => {
    if (senha !== confirmSenha) {
      setError('Senhas diferentes.');
    } else {
      setError('');
    }
  };

  return (
    <form
      action={loginCadastroAction}
      className="flex flex-col gap-7 items-center"
    >
      <div className="w-4/5 flex flex-wrap gap-7 justify-center ">
        <Input
          placeholder="Usuário ou e-mail"
          name="email"
          id="email"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Nome Completo"
          name="nome"
          id="nome"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Crie uma senha forte"
          name="senha"
          id="senha"
          type="password"
          required
          className="w-44 xl:w-52 2xl:w-64"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          onBlur={handleBlur}
        />
        <div className="relative">
          <Input
            placeholder="Confirme sua senha"
            name="confirmSenha"
            id="confirmSenha"
            type="password"
            required
            className="w-44 xl:w-52 2xl:w-64"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            onBlur={handleBlur}
          />
          {error && (
            <p className="text-red-500 absolute text-center">{error}</p>
          )}
        </div>
        <Input
          placeholder="Rua"
          name="rua"
          id="rua"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Número"
          name="numero"
          id="numero"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Complemento"
          name="complemento"
          id="complemento"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Cep"
          name="cep"
          id="cep"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Bairro"
          name="bairro"
          id="bairro"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Cidade"
          name="cidade"
          id="cidade"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Estado"
          name="estado"
          id="estado"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Telefone"
          name="telefone"
          id="telefone"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Gênero"
          name="genero"
          id="genero"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Origem"
          name="origem"
          id="origem"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Tipo de acesso"
          name="tipo_acesso"
          id="tipo_acesso"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Servico"
          name="servico"
          id="servico"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
      </div>
      <Button className="bg-blue-500 w-60 text-xl h-8 font-bold text-white rounded-md mt-5">
        Criar
      </Button>
    </form>
  );
}

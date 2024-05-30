"use client";

import React, { useState } from "react";
import Input from "../FormComponentes/Input";
import { loginCadastroAction } from "@/actions/login/login-cadastro-action";
import { Button } from "../FormComponentes/Button";
import SelectInput from "../FormComponentes/SelectInput";
import RadioInput from "../FormComponentes/RadioInput";

export default function CadastrarLogin() {
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [error, setError] = useState("");

  const handleBlur = () => {
    if (senha !== confirmSenha) {
      setError("Senhas diferentes.");
    } else {
      setError("");
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
          placeholder="Nome"
          name="nome"
          id="nome"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Sobrenome"
          name="sobrenome"
          id="sobrenome"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Data de Nascimento"
          name="data_nascimento"
          id="data_nascimento"
          type="date"
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
          mask="99999-999"
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
        <SelectInput
          name="Estado"
          options={[
            { value: "", label: "Estado" },
            { value: "AC", label: "Acre (AC)" },
            { value: "AL", label: "Alagoas (AL)" },
            { value: "AP", label: "Amapá (AP)" },
            { value: "AM", label: "Amazonas (AM)" },
            { value: "BA", label: "Bahia (BA)" },
            { value: "CE", label: "Ceará (CE)" },
            { value: "DF", label: "Distrito Federal (DF)" },
            { value: "ES", label: "Espírito Santo (ES)" },
            { value: "GO", label: "Goiás (GO)" },
            { value: "MA", label: "Maranhão (MA)" },
            { value: "MT", label: "Mato Grosso (MT)" },
            { value: "MS", label: "Mato Grosso do Sul (MS)" },
            { value: "MG", label: "Minas Gerais (MG)" },
            { value: "PA", label: "Pará (PA)" },
            { value: "PB", label: "Paraíba (PB)" },
            { value: "PR", label: "Paraná (PR)" },
            { value: "PE", label: "Pernambuco (PE)" },
            { value: "PI", label: "Piauí (PI)" },
            { value: "RJ", label: "Rio de Janeiro (RJ)" },
            { value: "RN", label: "Rio Grande do Norte (RN)" },
            { value: "RS", label: "Rio Grande do Sul (RS)" },
            { value: "RO", label: "Rondônia (RO)" },
            { value: "RR", label: "Roraima (RR)" },
            { value: "SC", label: "Santa Catarina (SC)" },
            { value: "SP", label: "São Paulo (SP)" },
            { value: "SE", label: "Sergipe (SE)" },
            { value: "TO", label: "Tocantins (TO)" },
          ]}
        />
        <Input
          placeholder="Telefone"
          mask="(99)99999-9999"
          name="telefone"
          id="telefone"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <RadioInput id="masculino" name="options" label="Masculino" />
        <RadioInput id="feminino" name="options" label="Feminino" />

        <Input
          placeholder="Tipo de acesso"
          name="tipo_acesso"
          id="tipo_acesso"
          type="hidden"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <SelectInput
          name="Origem"
          options={[
            { value: "", label: "Como nos encontrou?" },
            { value: "Facebook", label: "Facebook" },
            {
              value: "Instagram",
              label: "Instagram",
            },
            { value: "Anúncios Online", label: "Anúncios Online" },
            { value: "Google", label: "Google" },
          ]}
        />
        <SelectInput
          name="Servico"
          options={[
            { value: "", label: "Serviço" },
            { value: "Consignado", label: "Consignado" },
            {
              value: "Repactuação de Dívidas",
              label: "Repactuação de Dívidas",
            },
            { value: "Compra de Dívida", label: "Compra de Dívida" },
            { value: "Superindividamento", label: "Superindividamento" },
          ]}
        />
      </div>
      <Button className="btn xl:w-40 2xl:w-52">Criar</Button>
    </form>
  );
}

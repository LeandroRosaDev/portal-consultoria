"use client";

import React, { useState } from "react";
import Input from "../FormComponentes/Input";
import { Button } from "../FormComponentes/Button";
import { documentPostAction } from "@/actions/processData/document-post-action";
import InputFile from "../FormComponentes/InputFile";
import RadioInput from "../FormComponentes/RadioInput";
import SelectInput from "../FormComponentes/SelectInput";

export default function PostDocuments() {
  const [data, setData] = useState("");
  const [cep, setCep] = useState("");
  return (
    <form
      action={documentPostAction}
      className="flex flex-col flex-wrap gap-7 mt-10 justify-start items-start "
    >
      <Input
        placeholder="Nome do documento"
        name="nome"
        id="nome"
        type="text"
        required
        className="w-72"
      />

      <Input
        placeholder="Tipo do documento"
        name="tipo_documento"
        id="tipo_documento"
        type="date"
        required
        className="w-72"
      />
      <Input
        mask="99/99/9999"
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Data de Nascimento"
        name="data"
        className="w-72"
      />
      <Input
        mask="99999-999"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="CEP"
        name="cep"
        className="w-72"
      />
      <InputFile type="file" name="foto" className="input-file" />
      {/* <RadioInput id="masculino" name="options" label="Masculino" />
      <RadioInput id="feminino" name="options" label="Feminino" /> */}
      {/* <SelectInput
        name="Selecione"
        options={[
          { value: "", label: "Selecione" },
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
      /> */}

      <Button>Enviar</Button>
    </form>
  );
}

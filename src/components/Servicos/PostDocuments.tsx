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

      <Button>Enviar</Button>
    </form>
  );
}

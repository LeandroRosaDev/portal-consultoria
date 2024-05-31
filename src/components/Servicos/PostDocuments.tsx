"use client";

import React, { useState } from "react";
import Input from "../FormComponentes/Input";
import { Button } from "../FormComponentes/Button";
import { documentPostAction } from "@/actions/processData/document-post-action";
import InputFile from "../FormComponentes/InputFile";

export default function PostDocuments() {
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
        type="text"
        required
        className="w-72"
      />

      <InputFile type="file" name="foto" className="input-file" />

      <Button>Enviar</Button>
    </form>
  );
}

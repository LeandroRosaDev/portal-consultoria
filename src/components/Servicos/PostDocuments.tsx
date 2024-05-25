"use client";

import React, { useState } from "react";
import Input from "../FormComponentes/Input";
import { Button } from "../FormComponentes/Button";
import { documentPostAction } from "@/actions/processData/document-post-action";

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
      <Input
        placeholder="Nome Completo"
        name="img"
        id="img"
        type="file"
        required
        className="w-72"
      />

      <Button className="bg-blue-500 w-60 text-xl h-8 font-bold text-white rounded-md mx-auto">
        Enviar
      </Button>
    </form>
  );
}

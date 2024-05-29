"use client";

import Input from "../FormComponentes/Input";
import { Button } from "../FormComponentes/Button";
import { duvidasPostAction } from "@/actions/duvidas/duvidas-post-action";

export default function PostDuvidas() {
  return (
    <form
      action={duvidasPostAction}
      className="flex flex-col flex-wrap gap-7 mt-10 justify-start items-start "
    >
      <Input
        placeholder="Tema da dúvida"
        name="nome"
        id="nome"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Dúvida"
        name="duvida"
        id="duvida"
        type="text"
        required
        className="w-72"
      />
      <Input
        placeholder="Resposta"
        name="resposta"
        id="resposta"
        type="text"
        required
        className="w-72"
      />

      <Button>Enviar</Button>
    </form>
  );
}

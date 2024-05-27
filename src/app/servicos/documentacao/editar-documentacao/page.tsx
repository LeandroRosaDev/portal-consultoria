import { ButtonBack } from "@/components/ButtonBack";
import { Data } from "@/components/Data";
import GetDocumentos from "@/components/Servicos/GetDocumentos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal Altuori | Editar Documentação",
};
export default async function EditarDocPage() {
  return (
    <main className="bg-menu">
      <h1 className="sub-title">Editar documentação</h1>
      <Data />
      <GetDocumentos />
      <ButtonBack>Voltar</ButtonBack>
    </main>
  );
}

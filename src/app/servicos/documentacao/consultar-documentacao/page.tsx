import { ButtonBack } from "@/components/ButtonBack";
import { Data } from "@/components/Data";
import GetDuvidas from "@/components/Duvidas/GetDuvidas";
import GetDocumentos from "@/components/Servicos/GetDocumentos";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portal Altuori | Consultar Documentação",
};
export default async function ConsultarDocPage() {
  return (
    <main className="bg-menu">
      <h1 className="sub-title">Consultar documentação</h1>
      <Data />
      <GetDocumentos />
      <ButtonBack>Voltar</ButtonBack>
    </main>
  );
}

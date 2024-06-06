import { ButtonBack } from "@/components/ButtonBack";
import GetProfilePicture from "@/components/Conta/GetProfilePicture";
import { Data } from "@/components/Data";
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
      <GetProfilePicture width={300} height={300} />
      <ButtonBack>Voltar</ButtonBack>
    </main>
  );
}

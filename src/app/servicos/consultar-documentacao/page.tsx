import { Data } from "@/components/Data";
import GetDocumentos from "@/components/Servicos/GetDocumentos";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portal Altuori | Consultar Documentação",
};
export default async function ConsultarDocPage() {
  return (
    <main className="bg-menu">
      <h1 className="text-5xl font-semibold mb-2 text-blue-color-text">
        Consultar documentação
      </h1>
      <Data />
      <GetDocumentos />
    </main>
  );
}

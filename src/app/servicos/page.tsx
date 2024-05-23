import { Data } from "@/components/Data";
import GetDocumentos from "@/components/Servicos/GetDocumentos";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Portal Altuori | Serviços",
};
export default async function ServicosPage() {
  return (
    <main className="bg-menu">
      <h1 className="text-5xl font-semibold mb-2 text-blue-color-text">
        Serviços
      </h1>
      <Data />
      <Link href="/servicos/consultar-documentacao">
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">
          Consultar Documentação
        </h1>
      </Link>
      <Link href="/servicos/enviar-documentacao">
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">
          Enviar Documentação
        </h1>
      </Link>
      <Link href="/servicos/editar-documentacao">
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">
          Editar Documentação
        </h1>
      </Link>
    </main>
  );
}

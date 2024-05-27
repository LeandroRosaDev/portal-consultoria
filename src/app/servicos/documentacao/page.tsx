import { ButtonBack } from "@/components/ButtonBack";
import { Data } from "@/components/Data";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Portal Altuori | Documentações",
};
export default async function DocumentacaoPage() {
  return (
    <main className="bg-menu">
      <h1 className="sub-title">Documentações</h1>
      <Data />
      <Link href="/servicos/documentacao/consultar-documentacao">
        <h1 className="min-title">Consultar Documentação</h1>
      </Link>
      <Link href="/servicos/documentacao/enviar-documentacao">
        <h1 className="min-title">Enviar Documentação</h1>
      </Link>
      <Link href="/servicos/documentacao/editar-documentacao">
        <h1 className="min-title">Editar Documentação</h1>
      </Link>
      <ButtonBack>Voltar</ButtonBack>
    </main>
  );
}

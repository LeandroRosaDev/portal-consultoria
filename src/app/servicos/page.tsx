import { Data } from "@/components/Data";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Portal Altuori | Serviços",
};
export default async function ServicosPage() {
  return (
    <main className="bg-menu">
      <h1 className="title">Serviços</h1>
      <Data />
      <Link href="/servicos/solicitacoes">
        <h1 className="min-title">Acompanhe suas solicitações</h1>
      </Link>
      <Link href="/servicos/documentacao">
        <h1 className="min-title">Verifique suas documentações</h1>
      </Link>
    </main>
  );
}

import { Data } from "@/components/Data";
import PostDocuments from "@/components/Servicos/PostDocuments";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Portal Altuori | Enviar Documentação",
};
export default async function EnviarocPage() {
  return (
    <main className="bg-menu">
      <h1 className="text-5xl font-semibold mb-2 text-blue-color-text">
        Enviar documentação
      </h1>
      <Data />
      <PostDocuments />
      <Link href="/servicos">Voltar</Link>
    </main>
  );
}

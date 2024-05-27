import { ButtonBack } from "@/components/ButtonBack";
import { Data } from "@/components/Data";
import PostDocuments from "@/components/Servicos/PostDocuments";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portal Altuori | Enviar Documentação",
};
export default async function EnviarocPage() {
  return (
    <main className="bg-menu">
      <h1 className="sub-title">Enviar documentação</h1>
      <Data />
      <PostDocuments />
      <ButtonBack>Voltar</ButtonBack>
    </main>
  );
}

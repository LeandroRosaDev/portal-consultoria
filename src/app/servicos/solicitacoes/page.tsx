import { ButtonBack } from "@/components/ButtonBack";
import { Data } from "@/components/Data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal Altuori | Acompanhe suas solicitações",
};
export default async function SolicitacoesPage() {
  return (
    <main className="bg-menu">
      <h1 className="title">Serviços</h1>
      <Data />
      <h1 className="min-title">Acompanhe suas solicitações</h1>
      <ButtonBack>Voltar</ButtonBack>
    </main>
  );
}

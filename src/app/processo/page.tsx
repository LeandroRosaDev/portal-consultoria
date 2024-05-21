import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portal Altuori | Processos",
};
export default async function ProcessoPage() {
  return (
    <main className="bg-menu">
      <h1>
        Esta área é restrita para o advogado atualizar status dos processos
        legais.
      </h1>
    </main>
  );
}

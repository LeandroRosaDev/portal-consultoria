import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portal Altuori | Minha Conta",
};
export default async function contaPage() {
  return (
    <main className="bg-menu">
      <h1>Este é o espaço pessoal</h1>
    </main>
  );
}

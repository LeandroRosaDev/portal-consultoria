import { InfoConta } from '@/components/Conta/InfoConta';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Portal Altuori | Minha Conta',
};
export default async function contaPage() {
  return (
    <main className="bg-menu">
      <h1>Sua Conta</h1>
      <hr className="text-txt-menu-color rounded-md" />
      <InfoConta />
    </main>
  );
}

import { HeadConta } from '@/components/Conta/HeadConta';
import { InfoConta } from '@/components/Conta/ContentConta/InfoConta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portal Altuori | Minha Conta',
};

export default async function contaPage() {
  return (
    <main className="bg-menu">
      <HeadConta />
      <InfoConta />
    </main>
  );
}

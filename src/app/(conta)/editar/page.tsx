import { EditarConta } from '@/components/Conta/EditarConta';
import { HeadConta } from '@/components/Conta/HeadConta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portal Altuori | Editar Conta',
};

export default async function contaPage() {
  return (
    <main className="bg-menu">
      <HeadConta />
      <hr className="text-txt-menu-color rounded-md w-1/2" />
      <EditarConta />
    </main>
  );
}

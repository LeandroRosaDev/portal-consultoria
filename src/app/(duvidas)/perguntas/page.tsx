import { ButtonBack } from '@/components/ButtonBack';
import { Data } from '@/components/Data';
import GetDuvidas from '@/components/Duvidas/GetDuvidas';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portal Altuori | Dúvidas',
};

export default async function ContatoPage() {
  return (
    <main className="bg-menu relative">
      <h1 className="min-title sm:sub-title 2xl:title">Perguntas Frequentes</h1>
      <Data />
      <div>
        <GetDuvidas />
      </div>
      <ButtonBack className="absolute bottom-9">Voltar</ButtonBack>
    </main>
  );
}

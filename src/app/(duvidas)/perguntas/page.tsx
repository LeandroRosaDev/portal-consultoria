import { ButtonBack } from '@/components/ButtonBack';
import { Data } from '@/components/Data';
import GetDuvidas from '@/components/Duvidas/GetDuvidas';

import { Metadata } from 'next';
// import PostDuvidas from '@/components/Duvidas/PostDuvidas';

export const metadata: Metadata = {
  title: 'Portal Altuori | Dúvidas',
};

export default async function ContatoPage() {
  return (
    <main className="bg-menu">
      <h1 className="min-title sm:sub-title 2xl:title">Perguntas Frequentes</h1>
      <Data />
      <div>
        <GetDuvidas />
        {/* <PostDuvidas /> */}
      </div>
      <ButtonBack>Voltar</ButtonBack>
    </main>
  );
}

import { Data } from '@/components/Data';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Portal Altuori | Dúvidas',
};
export default async function ContatoPage() {
  return (
    <main className="bg-menu">
      <h1 className="title">Dúvidas</h1>
      <Data />
      <div className="flex gap-2 items-center">
        <Link href="/duvidas">
          <h1 className="min-title font-bold">Perguntas Frequentes</h1>
        </Link>
        <Image
          src="/assets/icon/question-black.svg"
          alt="?"
          width={25}
          height={20}
          className="mt-2"
        />
      </div>
      <div className="flex gap-2 items-center">
        <Link href="/duvidas">
          <h1 className="min-title font-bold">
            Agende uma reunião com seu advogado
          </h1>
        </Link>
        <Image
          src="/assets/icon/policy.svg"
          alt="?"
          width={25}
          height={20}
          className="mt-2"
        />
      </div>
      <div className="flex gap-2 items-center">
        <Link href="/duvidas">
          <h1 className="min-title font-bold">
            Converse com nossos consultores
          </h1>
        </Link>
        <Image
          src="/assets/icon/chat.svg"
          alt="?"
          width={25}
          height={20}
          className="mt-2"
        />
      </div>
    </main>
  );
}

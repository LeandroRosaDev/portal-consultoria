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
      <h1 className="min-title sm:sub-title 2xl:title">Dúvidas</h1>
      <Data />
      <section className="flex flex-col lg:flex-row lg:justify-between lg:items-center xl:w-11/12">
        <div className="flex flex-col gap-2 w-72 sm:w-80 md:w-96 lg:gap-5 lg:text-lg 2xl:w-[55%]">
          <h1 className="min-title sm:sub-title 2xl:title">Posso te ajudar?</h1>
          <p className="text-gray-600 font-semibold mb-5 2xl:text-xl">
            Nossa página de dúvidas frequentes foi criada para fornecer
            respostas claras e concisas às perguntas mais comuns, garantindo que
            você tenha as informações de que precisa ao seu alcance.
          </p>

          <p className="text-gray-600 font-semibold 2xl:text-xl">
            De dicas de solução de problemas a guias detalhados, nossas FAQs
            oferecem soluções rápidas para melhorar sua experiência de usuário.
          </p>
        </div>
        <div className="bg-gray-100 mt-10 lg:mt-0 rounded-3xl w-72 shadow-xl md:w-[400px] lg:w-[350px] h-72 lg:h-[550px] flex flex-col justify-between items-center p-5 text-sm lg:justify-center lg:gap-10 lg:text-2xl">
          <Link href="/perguntas">
            <div className="box-quest">
              <Image
                src="/assets/icon/question.svg"
                alt="icon pergunta"
                width={20}
                height={20}
              />
              Perguntas
            </div>
          </Link>

          <Link href="/duvidas">
            <div className="box-quest">
              <Image
                src="/assets/icon/contato.svg"
                alt="icon contato"
                width={15}
                height={20}
              />
              Contato
            </div>
          </Link>

          <Link href="/duvidas">
            <div className="box-quest">
              <Image
                src="/assets/icon/monitor.svg"
                alt="icon monitor"
                width={20}
                height={20}
              />
              Consultores
            </div>
          </Link>

          <Link href="/duvidas">
            <div className="box-quest">
              <Image
                src="/assets/icon/user-octagon.svg"
                alt="icon perfil"
                width={20}
                height={20}
              />
              Minhas Dúvidas
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

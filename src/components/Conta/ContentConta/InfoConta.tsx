'use client';

import Link from 'next/link';
import Image from 'next/image';

import { MiniCard } from './MiniCard';

export const InfoConta = () => {
  return (
    <div className="flex flex-col  gap-8 mt-20 ml-10">
      <div className="flex gap-16">
        <Link href="/conta/editar">
          <div className="card w-[400px] h-[450px] flex flex-col items-center justify-evenly hover:text-white hover:bg-[#333333] hover:outline-2 hover:border-white hover:shadow-cardHover duration-500">
            <Image
              src="/assets/cards/minhas-info.svg"
              width={130}
              height={130}
              alt="Figura crachá"
              className="mt-3"
            />
            <h1 className="font-semibold text-3xl">Minhas informações</h1>
            <hr className="text-txt-menu-color rounded-md w-5/6 bg-black" />
            <p className="text-base font-medium text-center">
              Acesse e gerencie suas informações pessoais e configurações de
              conta. Mantenha seus dados <br /> sempre atualizados para garantir
              um atendimento personalizado e eficiente. Visualize e edite as
              informações da sua conta.
            </p>
            <span className="text-xl font-bold">Clique aqui</span>
          </div>
        </Link>

        <Link href="/conta/processos">
          <div className="card w-[400px] h-[450px] flex flex-col items-center justify-evenly hover:text-white hover:bg-[#333333] hover:outline-2 hover:border-white hover:shadow-cardHover duration-500">
            <Image
              src="/assets/cards/meus-processos.svg"
              width={130}
              height={130}
              alt="Figura pasta"
              className="mt-3"
            />
            <h1 className="font-semibold text-3xl">Meus Processos</h1>
            <hr className="text-txt-menu-color rounded-md w-5/6 bg-black" />
            <p className="text-base font-medium text-center">
              Acompanhe de perto o andamento dos seus <br />
              processos jurídicos. Aqui você encontra todas as informações e
              atualizações sobre seus casos, garantindo transparência e
              facilidade de acesso. Visualize seus processos.
            </p>
            <span className="text-xl font-bold">Clique aqui</span>
          </div>
        </Link>
      </div>

      <div className="card flex justify-around w-[880px] h-[80px] items-center">
        <MiniCard
          href="/"
          bgColor="bg-[#FFE7EE]"
          title="Relatar problema"
          description="Encontrou algum problema? Nos avise para que possamos resolver rapidamente."
        />
        <MiniCard
          href="/"
          bgColor="bg-[#F4F1FF]"
          title="Podemos ajudar?"
          description="Tem alguma dúvida ou precisa de assistência? Estamos aqui para ajudar você."
        />
        <MiniCard
          href="/"
          bgColor="bg-[#FFF1E4]"
          title="Mudar senha"
          description="Mantenha sua conta segura. Atualize sua senha regularmente para proteger suas informações."
        />
        <MiniCard
          href="/"
          bgColor="bg-[#DEDEDE]"
          title="Política de uso"
          description="Conheça os termos e condições de uso da nossa plataforma. Leia nossa política de uso para entender seus direitos e responsabilidades."
        />
      </div>
    </div>
  );
};

'use client';

import { MiniCard } from './MiniCard';
import { BigCards } from './BigCard';

export const InfoConta = () => {
  return (
    <div className="flex flex-col  gap-8 mt-20 ml-10">
      <div className="flex gap-20">
        <BigCards
          href="/conta/editar"
          title="Minhas informações"
          description="Acesse e gerencie suas informações pessoais e configurações de conta. Mantenha seus dados sempre atualizados para garantir um atendimento personalizado e eficiente. Visualize e edite as informações da sua conta."
          src="/assets/cards/minhas-info.svg"
        />
        <BigCards
          href="/conta/processos"
          src="/assets/cards/meus-processos.svg"
          title="Meus Processos"
          description="Acompanhe de perto o andamento dos seus processos jurídicos. Aqui você encontra todas as informações e atualizações sobre seus casos, garantindo transparência e facilidade de acesso. Visualize seus processos."
        />
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

'use client';

import { useUser } from '@/context/user-context';
import Image from 'next/image';
import React from 'react';

export const ServicosInicio = () => {
  const { user } = useUser();
  return (
    <div className="w-[550px] h-[450px] m-14">
      <div className="mb-1 flex justify-between">
        <h2 className="font-extrabold text-blue-color-text text-4xl">
          Serviços
        </h2>
        <Image
          src={'assets/icon/docs.svg'}
          width={25}
          height={25}
          alt="Icon docs"
          className="cursor-pointer active:scale-90"
        />
      </div>

      <hr className="text-txt-menu-color rounded-md" />

      <div className="flex mt-6 justify-between items-center">
        <div className="flex">
          <Image
            src="/assets/perfil.jpg"
            width={75}
            height={75}
            alt="Foto perfil"
            className="rounded-full h-[75px] object-cover"
          />

          <div className="text-left ml-6">
            <h2 className="text-blue-color-text font-semibold text-3xl">
              {user?.nome}
            </h2>
            <p className="text-txt-menu-color text-lg">
              {user?.nome} fez o pagamento
            </p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-blue-color-text font-semibold text-2xl">
            +235,90
          </h2>
          <p className="text-txt-menu-color text-lg">Nota</p>
        </div>
      </div>
      <div className="flex mt-6 justify-between items-center">
        <div className="flex">
          <Image
            src="/assets/perfil.jpg"
            width={75}
            height={75}
            alt="Foto perfil"
            className="rounded-full h-[75px] object-cover"
          />

          <div className="text-left ml-6">
            <h2 className="text-blue-color-text font-semibold text-3xl">
              {user?.nome}
            </h2>
            <p className="text-txt-menu-color text-lg">
              {user?.nome} fez o pagamento
            </p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-blue-color-text font-semibold text-2xl">
            +235,90
          </h2>
          <p className="text-txt-menu-color text-lg">Nota</p>
        </div>
      </div>
      <div className="flex mt-6 justify-between items-center">
        <div className="flex">
          <Image
            src="/assets/perfil.jpg"
            width={75}
            height={75}
            alt="Foto perfil"
            className="rounded-full h-[75px] object-cover"
          />

          <div className="text-left ml-6">
            <h2 className="text-blue-color-text font-semibold text-3xl">
              {user?.nome}
            </h2>
            <p className="text-txt-menu-color text-lg">
              {user?.nome} fez o pagamento
            </p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-blue-color-text font-semibold text-2xl">
            +235,90
          </h2>
          <p className="text-txt-menu-color text-lg">Nota</p>
        </div>
      </div>
      <div className="flex mt-6 justify-between items-center">
        <div className="flex">
          <Image
            src="/assets/perfil.jpg"
            width={75}
            height={75}
            alt="Foto perfil"
            className="rounded-full h-[75px] object-cover"
          />

          <div className="text-left ml-6">
            <h2 className="text-blue-color-text font-semibold text-3xl">
              {user?.nome}
            </h2>
            <p className="text-txt-menu-color text-lg">
              {user?.nome} fez o pagamento
            </p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-blue-color-text font-semibold text-2xl">
            +235,90
          </h2>
          <p className="text-txt-menu-color text-lg">Nota</p>
        </div>
      </div>

      <Image
        src="/assets/icon/plus-button.svg"
        width={25}
        height={25}
        alt="25"
        className="mx-auto mt-8 cursor-pointer active:scale-90"
      />
    </div>
  );
};

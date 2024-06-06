'use client';

import { ButtonBack } from '../ButtonBack';
import Image from 'next/image';
import { useState } from 'react';
import { InfoEditar } from './InfoEditar';
import { MinhasInfo } from './MinhasInfo';
import { FotoConta } from './FotoConta';
import { SvgLogout } from '../SvgLogout';

export const EditarConta = () => {
  const [ativo, setAtivo] = useState(false);

  const editar = () => {
    setAtivo(!ativo);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full items-center">
        <h1 className="sub-title">Minhas Informações</h1>
        <Image
          onClick={editar}
          src="/assets/icon/edit.svg"
          width={50}
          height={50}
          alt="Editar"
          className="cursor-pointer active:scale-90 ml-3 mt-3"
        />
      </div>
      <div className="flex justify-between">
        {ativo ? <InfoEditar /> : <MinhasInfo />}

        <SvgLogout />
        <FotoConta />
      </div>

      <div className="absolute bottom-14">
        <ButtonBack>Voltar</ButtonBack>
      </div>
    </div>
  );
};

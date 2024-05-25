'use client';

import { useUser } from '@/context/user-context';
import Input from '../FormComponentes/Input';
import { useState } from 'react';
import { editUserInfo } from '@/actions/user/user-put-action';
import { Button } from '../FormComponentes/Button';

export const InfoConta = () => {
  const { user } = useUser();
  const [ativo, setAtivo] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const editar = () => {
    setAtivo(!ativo);
  };

  const confirmPassowrd = () => {
    setConfirm(!confirm);
  };

  return (
    <div className="flex justify-between w-[450px]">
      <div>
        <label className="text-lg font-bold">Nome</label>
        {ativo === false ? (
          <p className="font-semibold text-base">{user?.nome}</p>
        ) : (
          <Input
            placeholder={`${user?.nome}`}
            name="email"
            id="email"
            type="text"
            required
            className="w-80 h-5 px-4 py-4"
          />
        )}
      </div>
      <div className="mt-7">
        {ativo === true ? (
          <button
            className="bg-gray-500 p-2 rounded-xl"
            onClick={confirmPassowrd}
          >
            Salvar
          </button>
        ) : (
          <></>
        )}

        {ativo === true ? (
          <button className="bg-gray-500 p-2 rounded-xl ml-2" onClick={editar}>
            -
          </button>
        ) : (
          <button className="bg-gray-500 p-2 rounded-xl" onClick={editar}>
            Editar
          </button>
        )}
      </div>

      {confirm === true ? (
        <div>
          <form action={editUserInfo}>
            <Input
              placeholder="Confirme sua senha"
              name="senha"
              id="senha"
              type="text"
              required
              className="w-30"
            />
            <Button>Enviar</Button>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

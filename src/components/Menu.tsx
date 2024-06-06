import { userGetAction } from '@/actions/user/user-get-action';
import Image from 'next/image';
import { ButtonLogout } from './ButtonLogout';
import { MenuList } from './MenuList';
import getToken from '@/actions/get-token-action';
import GetProfilePicture from './Conta/GetProfilePicture';

export default async function Menu() {
  const { data } = await userGetAction();
  const token = await getToken();

  return (
    <>
      {token ? (
        <main className="text-txt-menu-color ml-8 grid grid-cols-1 grid-rows-3 h-full">
          <div className="text-white mt-10">
            <GetProfilePicture width="80" height="80" className="h-[80px]" />
            <h1 className="text-2xl mb-1">{data.nome}</h1>
            <p className="text-sm">{data.email}</p>
          </div>
          {data.id ? <MenuList /> : <></>}

          <div className="self-end mb-5 text-xl hover:text-red-400 w-9">
            {data.id ? <ButtonLogout>Sair</ButtonLogout> : <></>}
          </div>
        </main>
      ) : (
        <></>
      )}
    </>
  );
}

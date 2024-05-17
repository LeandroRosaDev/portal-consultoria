import { userGetAction } from '@/actions/user/user-get-action';
import Image from 'next/image';
import { ButtonLogout } from './ButtonLogout';
import { MenuList } from './MenuList';

export default async function Menu() {
  const { data } = await userGetAction();

  return (
    <>
      {data.id ? (
        <main className="text-txt-menu-color ml-8 grid grid-cols-1 grid-rows-3 h-full">
          <div className="text-white mt-10">
            <Image
              src="/assets/perfil.jpg"
              width={80}
              height={80}
              alt="foto perfil"
              className="rounded-lg mb-3 h-[80px] object-cover object-center"
            />
            <h1 className="text-2xl mb-1">{data.nome}</h1>
            <p className="text-sm">{data.email}</p>
          </div>
          {data.id ? <MenuList /> : <></>}
          <div className="self-end">{data.id ? <ButtonLogout /> : <></>}</div>
        </main>
      ) : (
        <></>
      )}
    </>
  );
}

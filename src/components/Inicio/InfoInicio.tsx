'use client';
import { useUser } from '@/context/user-context';
import Image from 'next/image';
import { Data } from '../Data';

export default function Inicio() {
  const { user } = useUser();

  return (
    <main className="bg-menu">
      <div className="m-10">
        <h1 className="text-5xl font-semibold mb-2 text-blue-color-text">{`Olá,${user?.nome}`}</h1>
        <Data />
      </div>

      <div className="w-[550px] h-[450px] m-14">
        <div className="m-5 flex justify-between">
          <h2 className="font-extrabold text-blue-color-text">Documentos</h2>
          <Image
            src={'assets/icon/docs.svg'}
            width={20}
            height={20}
            alt="Icon docs"
          />
        </div>

        <hr className="text-txt-menu-color rounded-md" />

        <div className="flex mt-6 justify-between">
          <Image
            src="/assets/perfil.jpg"
            width={55}
            height={55}
            alt="Foto perfil"
            className="rounded-full h-[55px] object-cover"
          />
          <div>
            <h2 className="text-blue-color-text font-semibold text-2xl">
              asdasd
            </h2>
            <p className="text-txt-menu-color text-base">
              asdasd fez o pagamento
            </p>
          </div>
          <div>
            <h2 className="text-blue-color-text font-semibold text-2xl">
              +235,90
            </h2>
            <p className="text-txt-menu-color text-base">Nota</p>
          </div>
        </div>
      </div>
    </main>
  );
}

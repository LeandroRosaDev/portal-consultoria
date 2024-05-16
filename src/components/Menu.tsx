import { userGetAction } from "@/actions/user/user-get-action";
import { Conta } from "@/interfaces/user-data-types";
import Image from "next/image";
import Link from "next/link";

export default async function Menu() {
  const { data } = await userGetAction();
  console.log(data);

  let conta: Conta = {
    autorizado: false,
    nome: " ",
  };
  if (data.nome === undefined) {
    conta.autorizado = true;
  } else conta.autorizado = true;

  return (
    <main className="text-txt-menu-color ml-5 flex h-full">
      <div>
        <div className="text-white mt-5">
          <Image
            src="/assets/perfil.jpg"
            width={100}
            height={100}
            alt="perfil"
            className=" rounded-lg"
          />
          <h1 className="text-xl">Samantha{data.nome}</h1>
          <p className="text-xs">samantha@gmail.com</p>
        </div>
        <div className="h-full m-auto">
          <ul className="flex flex-col text-xl gap-6 mt-10">
            <li>
              {conta.autorizado ? (
                <Link href="/">Início</Link>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </li>
            <li>
              {conta.autorizado ? (
                <Link href="/processo">Processo</Link>
              ) : (
                <></>
              )}
            </li>
            <li>
              {conta.autorizado ? (
                <Link href="/documentos">Documentos</Link>
              ) : (
                <></>
              )}
            </li>
            <li>
              {conta.autorizado ? <Link href="/duvidas">Dúvidas</Link> : <></>}
            </li>
            <li>
              {conta.autorizado ? (
                <Link href="/conta">Minha conta</Link>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
        <div>
          <button className="text-xl">Sair</button>
        </div>
      </div>
    </main>
  );
}

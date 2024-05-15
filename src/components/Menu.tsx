import { userGetAction } from '@/actions/user/user-get-action';
import { Conta } from '@/interfaces/user-data-types';
import Link from 'next/link';

export default async function Menu() {
  const { data } = await userGetAction();
  console.log(data);

  let conta: Conta = {
    autorizado: false,
    nome: ' ',
  };
  if (data.nome === undefined) {
    conta.autorizado = true;
  } else conta.autorizado = true;

  return (
    <>
      <h1>{data.nome}</h1>
      <ul>
        <li>
          <Link href="/">Página Inicial</Link>
        </li>
        <li>
          {conta.autorizado ? data.nome : <Link href="/login">Login</Link>}
        </li>
        <li>
          {conta.autorizado ? (
            <Link href="/processo"> Processo </Link>
          ) : (
            <p></p>
          )}
        </li>
        <li>
          {conta.autorizado ? (
            <Link href="/informacoes"> Acompanhe seu processo</Link>
          ) : (
            <p></p>
          )}
        </li>
        <li>
          {conta.autorizado ? (
            <Link href="/contato"> Entre em Contato </Link>
          ) : (
            <p></p>
          )}
        </li>
      </ul>
    </>
  );
}

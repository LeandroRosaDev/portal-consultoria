import Link from 'next/link';

export const InfoConta = () => {
  return (
    <div className="h-[650px] flex-col flex justify-between">
      <div>
        <h1 className="sub-title">
          <Link href="/editar">Minhas informações</Link>
        </h1>
        <h1 className="sub-title">
          <Link href="/processo">Meus processos</Link>
        </h1>
      </div>
      <div className="">
        <h1 className="sub-title">
          <Link href="">Relatar problema</Link>
        </h1>
        <h1 className="sub-title">
          <Link href="">Mudar senha</Link>
        </h1>
        <h1 className="sub-title">
          <Link href="">Política de uso</Link>
        </h1>
        <h1 className="sub-title">
          <Link href="">Ajuda</Link>
        </h1>
      </div>
    </div>
  );
};

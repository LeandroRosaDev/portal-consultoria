import ResetarSenha from '@/components/Login/Reset-password';
import Link from 'next/link';

type ResetarSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function ResetarSenhaPage({
  searchParams,
}: ResetarSearchParams) {
  return (
    <section className="bg-menu flex flex-col  gap-10 content-center text-center">
      <h1 className="text-7xl font-bold my-16">Alterar a senha.</h1>
      <ResetarSenha keyToken={searchParams.key} login={searchParams.login} />
      <Link href="/login" className="text-lg text-gray-500 font-bold">
        Voltar
      </Link>
    </section>
  );
}

import RecuperarSenha from '@/components/Login/Recover-password';
import Link from 'next/link';

export default async function RecuperarPage() {
  return (
    <section className="bg-menu flex flex-col  gap-10 content-center text-center">
      <h1 className="text-7xl font-bold my-16">Esqueceu a senha?</h1>
      <RecuperarSenha />
      <Link href="/login" className="text-lg text-gray-500 font-bold">
        Voltar
      </Link>
    </section>
  );
}

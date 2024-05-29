import CadastrarLogin from '@/components/Login/CadastrarLogin';
import Link from 'next/link';

export default async function CadastrarLoginPage() {
  return (
    <section className="bg-menu relative grid gap-4 xl:gap-7 2xl:gap-10 content-center text-center justify-items-center">
      <div className="overflow-auto">
        <h1 className="text-4xl xl:text-6xl 2xl:text-8xl font-bold mb-4 xl:mb-10 2xl:mb-16">
          Cadastre-se
        </h1>
        <CadastrarLogin />
      </div>
      <div className="flex gap-4 text-lg text-gray-500 left-1/2 text-center mt-5 xl:mt-8 2xl:mt-12">
        <Link href="/login">Esqueceu a senha?</Link>
        <hr className="w-[1px] h-8 bg-gray-800"></hr>
        <Link href="/login">Entrar</Link>
      </div>
    </section>
  );
}

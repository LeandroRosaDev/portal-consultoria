import Login from '@/components/Login/Login';
import Link from 'next/link';

export default async function LoginPage() {
  return (
    <section className="bg-menu flex flex-col justify-center gap-10 content-center text-center">
      <h1 className="text-8xl font-bold mb-16">Login</h1>
      <Login />
      <div className="flex gap-4 text-lg text-gray-500   left-1/2 text-center mt-12 mx-auto">
        <Link href="/login">Esqueceu a senha?</Link>
        <hr className="w-[1px] h-8 bg-gray-800"></hr>
        <Link href="/login/cadastrar">Cadastre-se</Link>
      </div>
    </section>
  );
}

import Login from '@/components/Login';
import Link from 'next/link';

export default async function LoginPage() {
  return (
    <section className="bg-menu relative grid justify-center gap-10 content-center text-center">
      <div className="">
        <h1 className="text-8xl font-bold mb-16">Login</h1>
        <Login />
      </div>
      <div className="flex gap-4 text-lg text-gray-500   left-1/2 text-center mt-12">
        <Link href="/login">Esqueceu a senha?</Link>
        <hr className="w-[1px] h-8 bg-gray-800"></hr>
        <Link href="/login">Cadastre-se</Link>
      </div>
    </section>
  );
}

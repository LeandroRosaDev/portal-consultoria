import Login from '@/components/Login';
import Link from 'next/link';

export default async function LoginPage() {
  return (
    <>
      <main className="grid justify-center gap-4">
        <h1 className="text-7xl font-bold mx-auto">Login</h1>
        <Login />
      </main>
      <div className="flex justify-center gap-4 mt-6">
        <Link href="/login">Esqueceu a senha?</Link>
        <hr className="w-[1px] h-8 bg-gray-600"></hr>
        <Link href="/login">Cadastre-se</Link>
      </div>
    </>
  );
}

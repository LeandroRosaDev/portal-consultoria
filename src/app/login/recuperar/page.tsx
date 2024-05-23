import RecuperarSenha from '@/components/Login/recover-password';

export default async function RecuperarPage() {
  return (
    <section className="bg-menu flex flex-col  gap-10 content-center text-center">
      <h1 className="text-7xl font-bold my-16">Esqueceu a senha?</h1>
      <RecuperarSenha />
    </section>
  );
}

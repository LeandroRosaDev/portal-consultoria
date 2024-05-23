'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-menu flex flex-col items-center justify-center">
      <h1 className="text-6xl mb-12">Página não encontrada.</h1>
      <Link href={'/'} className="text-4xl font-bold text-red-500">
        Voltar
      </Link>
    </section>
  );
}

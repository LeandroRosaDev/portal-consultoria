import { Data } from '@/components/Data';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Portal Altuori | Dúvidas',
};
export default async function ContatoPage() {
  return (
    <main className="bg-menu">
      <h1 className="min-title sm:sub-title 2xl:title">Perguntas Frequentes</h1>
      <Data />
    </main>
  );
}

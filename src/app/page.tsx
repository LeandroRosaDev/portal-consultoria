import Inicio from '@/components/Inicio/InfoInicio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portal Altuori | Home',
};

export default function Home() {
  return (
    <main>
      <Inicio />
    </main>
  );
}

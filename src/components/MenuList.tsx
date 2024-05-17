'use client';

import Link from 'next/link';
import { useState } from 'react';

export const MenuList = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const data = 'oi';
  return (
    <div className="h-full">
      <ul className="flex flex-col text-xl gap-5 mt-10">
        <li className={`${data ? 'hover:text-white' : ''}`}>
          <Link href="/">Início</Link>
        </li>
        <li className="hover:text-white">
          <Link
            href="/processo"
            className={`text-xl ${clicked === true ? 'text-white' : ''}`}
            onClick={handleClick}
          >
            Processo
          </Link>
        </li>
        <li className="hover:text-white">
          <Link href="/documentos" className="focus:text-white">
            Documentos
          </Link>
        </li>
        <li className="hover:text-white">
          <Link href="/duvidas" className="focus:text-white">
            Dúvidas
          </Link>
        </li>
        <li className="hover:text-white">
          <Link href="/conta" className="focus:text-white">
            Minha conta
          </Link>
        </li>
      </ul>
    </div>
  );
};

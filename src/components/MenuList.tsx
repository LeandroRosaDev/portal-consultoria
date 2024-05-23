"use client";

import Link from "next/link";
import { useState } from "react";

export const MenuList = () => {
  const [clickedItem, setClickedItem] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setClickedItem(index);
  };

  return (
    <div className="h-full">
      <ul className="flex flex-col text-xl gap-5 mt-10">
        <li
          className={`text-xl hover:text-white ${
            clickedItem === 0 ? "text-white" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          <Link href="/">Início</Link>
        </li>
        <li
          className={`text-xl hover:text-white ${
            clickedItem === 1 ? "text-white" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          <Link href="/processo">Processo</Link>
        </li>
        <li
          className={`text-xl hover:text-white ${
            clickedItem === 2 ? "text-white" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          <Link href="/servicos">Serviços</Link>
        </li>
        <li
          className={`text-xl hover:text-white ${
            clickedItem === 3 ? "text-white" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          <Link href="/duvidas">Dúvidas</Link>
        </li>
        <li
          className={`text-xl hover:text-white ${
            clickedItem === 4 ? "text-white" : ""
          }`}
          onClick={() => handleClick(4)}
        >
          <Link href="/conta">Minha conta</Link>
        </li>
      </ul>
    </div>
  );
};

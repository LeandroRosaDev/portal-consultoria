import { Card } from '@/interfaces/conta-types';
import Link from 'next/link';
import { useState } from 'react';

export const MiniCard: React.FC<Card> = ({
  href,
  bgColor,
  title,
  description,
}) => {
  const [mouse, setMouse] = useState(false);

  const Open = () => {
    setMouse(true);
  };
  const Close = () => {
    setMouse(false);
  };

  return (
    <Link href={href}>
      <div
        className={`mini-card ${bgColor} w-[200px] flex flex-col gap-7 duration-500 relative ${
          mouse ? 'h-[160px] mb-[120px]' : 'h-[40px]'
        }`}
        onMouseEnter={Open}
        onMouseLeave={Close}
      >
        <h1 className={`font-semibold absolute ${mouse ? 'top-3' : ''}`}>
          {title}
        </h1>

        <div
          className={`flex flex-col mt-10 items-center gap-5 transition-opacity duration-500 ${
            mouse ? 'opacity-100 ' : 'opacity-0'
          }`}
        >
          <p className="text-[10px] text-center font-semibold mx-2">
            {description}
          </p>
          <span className="text-xs font-bold">Clique aqui</span>
        </div>
      </div>
    </Link>
  );
};

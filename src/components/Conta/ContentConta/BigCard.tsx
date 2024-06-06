import { BigCard } from '@/interfaces/conta-types';
import Image from 'next/image';
import Link from 'next/link';

export const BigCards: React.FC<BigCard> = ({
  href,
  title,
  description,
  src,
}) => {
  return (
    <Link href={href}>
      <div className="card w-[400px] h-[450px] flex flex-col items-center justify-evenly hover:text-white hover:bg-[#333333] hover:outline-2 hover:border-white hover:shadow-cardHover duration-500">
        <Image
          src={src}
          width={130}
          height={130}
          alt="Figura crachá"
          className="mt-3"
        />
        <h1 className="font-semibold text-3xl">{title}</h1>
        <hr className="text-txt-menu-color rounded-md w-5/6 bg-black" />
        <p className="text-base font-medium text-center mx-2">{description}</p>
        <span className="text-xl font-bold">Clique aqui</span>
      </div>
    </Link>
  );
};

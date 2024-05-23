import Image from 'next/image';

export const SaibaMaisInicio = () => {
  return (
    <div className="w-64 h-64 mb-16 bg-[#EDF0F6] rounded-lg relative flex flex-col justify-end items-center">
      <div className="flex absolute -top-[25%] left-4 gap-5 ">
        <Image
          src="/assets/icon/caixas.svg"
          width={100}
          height={100}
          alt="2 caixas"
        />
        <Image
          src="/assets/icon/vaso-flor.svg"
          width={80}
          height={100}
          alt="Vaso com planta"
          className="mb-10"
        />
      </div>

      <div>
        <h1 className="text-blue-color-text font-semibold text-lg">
          Saiba mais
        </h1>
        <p className="text-sm font-medium text-txt-menu-color w-52 mx-auto">
          Nossa plataforma foi projetada para ser simples e morderna, saiba mais
          e...
        </p>
        <button className="bg-menu-color w-[200px] h-[45px]  rounded-lg text-white text-base my-2">
          Saiba mais
        </button>
      </div>
    </div>
  );
};

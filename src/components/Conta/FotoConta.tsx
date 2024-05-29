import { useUser } from '@/context/user-context';
import Image from 'next/image';
import InputFile from '../FormComponentes/InputFile';

export const FotoConta = () => {
  const { user } = useUser();

  return (
    <div className="w-1/2  flex flex-col items-center">
      <div>
        <Image
          src="/assets/perfil.jpg"
          width={300}
          height={300}
          alt="Perfil"
          className="rounded-full h-[300px] object-cover"
        />
      </div>
      <InputFile type="file" className="input-file mt-5" />
    </div>
  );
};

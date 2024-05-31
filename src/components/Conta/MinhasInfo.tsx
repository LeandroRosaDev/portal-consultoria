import { useUser } from "@/context/user-context";

export const MinhasInfo = () => {
  const { user } = useUser();
  return (
    <div className="flex flex-col gap-10 text-3xl w-5/12 my-10 bg-[#F9FAFC] rounded-3xl shadow">
      <div className="flex gap-20 mt-3 ml-2">
        <div>
          <h2 className="mb-4">{user?.nome}</h2>
          <h2 className="mb-4">Medica</h2>
          <h2 className="mb-4">Tel: {user?.telefone}</h2>
        </div>

        <h2>{user?.data_nascimento}</h2>
      </div>

      <div className="flex gap-20 mt-3 ml-2">
        <div>
          <h2 className="mb-4">{user?.rua}</h2>
          <h2 className="mb-4">{user?.bairro}</h2>
          <h2 className="mb-4">
            {user?.cidade}
            {user?.estado}
            {user?.genero}
          </h2>
        </div>

        <div className="text-left">
          <h2 className="mb-4">Nº {user?.numero}</h2>
          <h2 className="mb-4">CEP: {user?.cep}</h2>
        </div>
      </div>
    </div>
  );
};

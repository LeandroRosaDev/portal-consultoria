"use client";
import { useUser } from "@/context/user-context";

export default function GetDocumentos() {
  const { user } = useUser();

  return (
    <main>
      <div className="m-10">
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Nome: ${user?.nome}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Email: ${user?.email}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Cep: ${user?.cep}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Nível de acesso: ${user?.tipo_acesso}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Complemento: ${user?.complemento}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Bairro: ${user?.bairro}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Cidade: ${user?.cidade}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Estado: ${user?.estado}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Telefone: ${user?.telefone}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Gênero: ${user?.genero}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Serviço contratado: ${user?.servico}`}</h1>
        <h1 className="text-xl font-semibold mb-2 text-blue-color-text">{`Como nos encontrou: ${user?.origem}`}</h1>
      </div>
    </main>
  );
}

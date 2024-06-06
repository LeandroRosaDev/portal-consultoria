"use client";
import { Button } from "../FormComponentes/Button";
import Input from "../FormComponentes/Input";
import { editUserInfo } from "@/actions/user/user-put-action";
import SelectInput from "../FormComponentes/SelectInput";
import { useUser } from "@/context/user-context";

export const InfoEditar = () => {
  const { user } = useUser();

  return (
    <div className="w-1/2">
      <form
        action={editUserInfo}
        className="flex flex-row flex-wrap  gap-5 my-10"
      >
        <Input
          placeholder={`Rua: ${user?.rua}`}
          name="rua"
          id="rua"
          type="text"
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder={`Número ${user?.numero}`}
          name="numero"
          id="numero"
          type="text"
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder={`Complemento: ${user?.complemento}`}
          name="complemento"
          id="complemento"
          type="text"
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder={`Cep: ${user?.cep}`}
          mask="99999-999"
          name="cep"
          id="cep"
          type="text"
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder={`Bairro: ${user?.bairro}`}
          name="bairro"
          id="bairro"
          type="text"
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder={`Cidade: ${user?.cidade}`}
          name="cidade"
          id="cidade"
          type="text"
          className="w-44 xl:w-52 2xl:w-64"
        />
        <SelectInput
          name="Estado"
          options={[
            { value: "", label: "Estado" },
            { value: "AC", label: "Acre (AC)" },
            { value: "AL", label: "Alagoas (AL)" },
            { value: "AP", label: "Amapá (AP)" },
            { value: "AM", label: "Amazonas (AM)" },
            { value: "BA", label: "Bahia (BA)" },
            { value: "CE", label: "Ceará (CE)" },
            { value: "DF", label: "Distrito Federal (DF)" },
            { value: "ES", label: "Espírito Santo (ES)" },
            { value: "GO", label: "Goiás (GO)" },
            { value: "MA", label: "Maranhão (MA)" },
            { value: "MT", label: "Mato Grosso (MT)" },
            { value: "MS", label: "Mato Grosso do Sul (MS)" },
            { value: "MG", label: "Minas Gerais (MG)" },
            { value: "PA", label: "Pará (PA)" },
            { value: "PB", label: "Paraíba (PB)" },
            { value: "PR", label: "Paraná (PR)" },
            { value: "PE", label: "Pernambuco (PE)" },
            { value: "PI", label: "Piauí (PI)" },
            { value: "RJ", label: "Rio de Janeiro (RJ)" },
            { value: "RN", label: "Rio Grande do Norte (RN)" },
            { value: "RS", label: "Rio Grande do Sul (RS)" },
            { value: "RO", label: "Rondônia (RO)" },
            { value: "RR", label: "Roraima (RR)" },
            { value: "SC", label: "Santa Catarina (SC)" },
            { value: "SP", label: "São Paulo (SP)" },
            { value: "SE", label: "Sergipe (SE)" },
            { value: "TO", label: "Tocantins (TO)" },
          ]}
        />
        <Input
          placeholder={`Telefone: ${user?.telefone}`}
          mask="(99)99999-9999"
          name="telefone"
          id="telefone"
          type="text"
          className="w-44 xl:w-52 2xl:w-64"
        />
        <SelectInput
          name="genero"
          options={[
            { value: "", label: "Gênero" },
            { value: "Masculino", label: "Masculino" },
            {
              value: "Feminino",
              label: "Feminino",
            },
            { value: "Outro", label: "Prefiro não definir" },
          ]}
        />
        <Button>Enviar</Button>
      </form>
    </div>
  );
};

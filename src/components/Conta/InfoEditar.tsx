// "use client";
// import React, { useState } from "react";
// import { Button } from "../FormComponentes/Button";
// import { useUser } from "@/context/user-context";
// import { editUserInfo } from "@/actions/user/user-put-action";
// import Input from "../FormComponentes/Input";

// export const InfoEditar = () => {
//   const { user } = useUser();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [nome, setNome] = useState("Opala");
//   const [email, setEmail] = useState(user?.email ? String(user.email) : "");
//   const [cep, setCep] = useState(user?.cep ? String(user.cep) : "");
//   const [rua, setRua] = useState(user?.rua ? String(user.rua) : "");
//   const [numero, setNumero] = useState(user?.numero ? String(user.numero) : "");
//   const [bairro, setBairro] = useState(user?.bairro ? String(user.bairro) : "");
//   const [cidade, setCidade] = useState(user?.cidade ? String(user.cidade) : "");
//   const [estado, setEstado] = useState(user?.estado ? String(user.estado) : "");
//   const [complemento, setComplemento] = useState(
//     user?.complemento ? String(user.complemento) : ""
//   );
//   const [servico, setServico] = useState(
//     user?.servico ? String(user.servico) : ""
//   );
//   const [telefone, setTelefone] = useState(
//     user?.telefone ? String(user.telefone) : ""
//   );
//   const [genero, setGenero] = useState(user?.genero ? String(user.genero) : "");

//   const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append("username", username);
//       formData.append("password", password);
//       formData.append("nome", nome);
//       formData.append("email", email || "");
//       formData.append("cep", cep);
//       formData.append("numero", numero);
//       formData.append("rua", rua || "");
//       formData.append("bairro", bairro || "");
//       formData.append("cidade", cidade || "");
//       formData.append("estado", estado || "");
//       formData.append("complemento", complemento || "");
//       formData.append("servico", servico);
//       formData.append("telefone", telefone);
//       formData.append("genero", genero);

//       const result = await editUserInfo({}, formData, password);
//       console.log("Resultado da edição do usuário:", result);

//       if (result.ok) {
//         alert("Informações atualizadas com sucesso!");
//       } else {
//         alert(`Erro: ${result.error}`);
//       }

//       return result;
//     } catch (error) {
//       console.error("Erro ao editar informações do usuário:", error);
//       return null;
//     }
//   };

//   return (
//     <div className="w-1/2">
//       <form onSubmit={handleFormSubmit} className="flex flex-wrap gap-5 my-10">
//         <Input
//           placeholder="Email de usuário"
//           name="username"
//           id="username"
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//           className="w-30 mb-3"
//         />
//         <Input
//           placeholder="Senha"
//           name="senha"
//           id="senha"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="w-30 mb-3"
//         />
//         <Input
//           placeholder="Email de usuário"
//           name="email"
//           id="email"
//           type="text"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="w-30"
//         />
//         <Input
//           placeholder="Cep de usuário"
//           name="cep"
//           id="cep"
//           type="text"
//           value={cep}
//           onChange={(e) => setCep(e.target.value)}
//           required
//           className="w-30"
//         />
//         <Input
//           placeholder="Rua de usuário"
//           name="rua"
//           id="rua"
//           type="text"
//           value={rua}
//           onChange={(e) => setRua(e.target.value)}
//           required
//           className="w-30"
//         />
//         <Input
//           placeholder="Numero de usuário"
//           name="numero"
//           id="numero"
//           type="text"
//           value={numero}
//           onChange={(e) => setNumero(e.target.value)}
//           required
//           className="w-16"
//         />
//         <Input
//           placeholder="Complemento de usuário"
//           name="complemento"
//           id="complemento"
//           type="text"
//           value={complemento}
//           onChange={(e) => setComplemento(e.target.value)}
//           required
//           className="w-[135px]"
//         />
//         <Input
//           placeholder="Bairro de usuário"
//           name="bairro"
//           id="bairro"
//           type="text"
//           value={bairro}
//           onChange={(e) => setBairro(e.target.value)}
//           required
//           className="w-30"
//         />
//         <Input
//           placeholder="Cidade de usuário"
//           name="cidade"
//           id="cidade"
//           type="text"
//           value={cidade}
//           onChange={(e) => setCidade(e.target.value)}
//           required
//           className="w-30"
//         />
//         <Input
//           placeholder="Estado de usuário"
//           name="estado"
//           id="estado"
//           type="text"
//           value={estado}
//           onChange={(e) => setEstado(e.target.value)}
//           required
//           className="w-30"
//         />

//         <Input
//           placeholder="Servico de usuário"
//           name="servico"
//           id="servico"
//           type="text"
//           value={servico}
//           onChange={(e) => setServico(e.target.value)}
//           required
//           className="w-30"
//         />
//         <Input
//           placeholder="Telefone de usuário"
//           name="telefone"
//           id="telefone"
//           type="text"
//           value={telefone}
//           onChange={(e) => setTelefone(e.target.value)}
//           required
//           className="w-30"
//         />
//         <Input
//           placeholder="Genero de usuário"
//           name="genero"
//           id="genero"
//           type="text"
//           value={genero}
//           onChange={(e) => setGenero(e.target.value)}
//           required
//           className="w-30"
//         />

//         <div>
//           {/* Envolvi o botão em um div pode ser que o submit não funcione */}
//           <Button type="submit" className="btn">
//             Enviar
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };
"use client";
import { Button } from "../FormComponentes/Button";
import Input from "../FormComponentes/Input";
import { editUserInfo } from "@/actions/user/user-put-action";
import SelectInput from "../FormComponentes/SelectInput";
import RadioInput from "../FormComponentes/RadioInput";

export const InfoEditar = () => {
  return (
    <div className="w-1/2">
      <form action={editUserInfo} className="flex flex-wrap gap-5 my-10">
        <Input
          placeholder="Rua"
          name="rua"
          id="rua"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Número"
          name="numero"
          id="numero"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Complemento"
          name="complemento"
          id="complemento"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Cep"
          mask="99999-999"
          name="cep"
          id="cep"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Bairro"
          name="bairro"
          id="bairro"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <Input
          placeholder="Cidade"
          name="cidade"
          id="cidade"
          type="text"
          required
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
          placeholder="Telefone"
          mask="(99)99999-9999"
          name="telefone"
          id="telefone"
          type="text"
          required
          className="w-44 xl:w-52 2xl:w-64"
        />
        <RadioInput
          id="masculino"
          value="Masculino"
          name="genero"
          label="Masculino"
        />
        <RadioInput
          id="feminino"
          value="Feminino"
          name="genero"
          label="Feminino"
        />
        <Button>Enviar</Button>
      </form>
    </div>
  );
};

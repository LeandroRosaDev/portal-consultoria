"use client";

import { useUser } from "@/context/user-context";
import Input from "../FormComponentes/Input";
import { useState } from "react";
import { editUserInfo } from "@/actions/user/user-put-action";
import { Button } from "../FormComponentes/Button";

export const InfoConta = () => {
  const { user } = useUser();
  const [ativo, setAtivo] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('Opala');
  const [email, setEmail] = useState(user?.email ? String(user.email) : '');
  const [cep, setCep] = useState(user?.cep ? String(user.cep) : '');
  const [rua, setRua] = useState(user?.rua ? String(user.rua) : '');
  const [numero, setNumero] = useState(user?.numero ? String(user.numero) : '');
  const [bairro, setBairro] = useState(user?.bairro ? String(user.bairro) : '');
  const [cidade, setCidade] = useState(user?.cidade ? String(user.cidade) : '');
  const [estado, setEstado] = useState(user?.estado ? String(user.estado) : '');
  const [complemento, setComplemento] = useState(
    user?.complemento ? String(user.complemento) : '',
  );
  const [servico, setServico] = useState(
    user?.servico ? String(user.servico) : '',
  );
  const [telefone, setTelefone] = useState(
    user?.telefone ? String(user.telefone) : '',
  );
  const [genero, setGenero] = useState(user?.genero ? String(user.genero) : '');

  const editar = () => {
    setAtivo(!ativo);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);
      formData.append('nome', nome);
      formData.append('email', email || '');
      formData.append('cep', cep);
      formData.append('numero', numero);
      formData.append('rua', rua || '');
      formData.append('bairro', bairro || '');
      formData.append('cidade', cidade || '');
      formData.append('estado', estado || '');
      formData.append('complemento', complemento || '');
      formData.append('servico', servico);
      formData.append('telefone', telefone);
      formData.append('genero', genero);

      const result = await editUserInfo({}, formData, password);
      console.log('Resultado da edição do usuário:', result);

      if (result.ok) {
        alert('Informações atualizadas com sucesso!');
      } else {
        alert(`Erro: ${result.error}`);
      }

      return result;
    } catch (error) {
      console.error('Erro ao editar informações do usuário:', error);
      return null;
    }
  };

  return (
    <div className="flex flex-col w-[450px]">
      <div className="flex justify-between">
        <div>
          <label className="text-lg font-bold">Nome</label>
          <p className="font-semibold text-base">{user?.nome}</p>
          {ativo === true ? (
            <Input
              placeholder="Novo nome de usuário"
              name="nome"
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="w-30 mb-3"
            />
          ) : (
            <></>
          )}
        </div>
        <div className="mt-7">
          {ativo ? (
            <Button type="submit" onClick={handleFormSubmit}>
              Salvar
            </Button>
          ) : (
            <button className="bg-gray-500 p-2 rounded-xl" onClick={editar}>
              Editar
            </button>
          )}
        </div>
      </div>

      {ativo && (
        <div>
          <form onSubmit={handleFormSubmit} className="flex flex-wrap gap-1">
            <Input
              placeholder="Email de usuário"
              name="username"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-30 mb-3"
            />
            <Input
              placeholder="Senha"
              name="senha"
              id="senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-30 mb-3"
            />
            <Input
              placeholder="Email de usuário"
              name="email"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-30"
            />
            <Input
              placeholder="Cep de usuário"
              name="cep"
              id="cep"
              type="text"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              required
              className="w-30"
            />
            <Input
              placeholder="Rua de usuário"
              name="rua"
              id="rua"
              type="text"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
              required
              className="w-30"
            />
            <Input
              placeholder="Numero de usuário"
              name="numero"
              id="numero"
              type="text"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
              className="w-30"
            />
            <Input
              placeholder="Bairro de usuário"
              name="bairro"
              id="bairro"
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              required
              className="w-30"
            />
            <Input
              placeholder="Cidade de usuário"
              name="cidade"
              id="cidade"
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
              className="w-30"
            />
            <Input
              placeholder="Estado de usuário"
              name="estado"
              id="estado"
              type="text"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
              className="w-30"
            />
            <Input
              placeholder="Complemento de usuário"
              name="complemento"
              id="complemento"
              type="text"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
              required
              className="w-30"
            />
            <Input
              placeholder="Servico de usuário"
              name="servico"
              id="servico"
              type="text"
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              required
              className="w-30"
            />
            <Input
              placeholder="Telefone de usuário"
              name="telefone"
              id="telefone"
              type="text"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
              className="w-30"
            />
            <Input
              placeholder="Genero de usuário"
              name="genero"
              id="genero"
              type="text"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              required
              className="w-30"
            />
            <Button
              type="submit"
              className="py-2 px-3 bg-slate-600 rounded-lg hover:bg-slate-300 active:scale-90"
            >
              Enviar
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

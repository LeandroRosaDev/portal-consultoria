export type User = {
  id?: string;
  nome?: string;
  sobrenome?: string;
  data_nascimento?: string;
  email?: string;
  rua?: string;
  numero?: number;
  complemento?: string;
  cep?: number;
  bairro?: string;
  cidade?: string;
  estado?: string;
  telefone?: number;
  genero?: string;
  origem?: string;
  tipo_acesso?: string;
  servico?: string;
  token?: string;
};

export type Conta = {
  autorizado: boolean;
  nome: any;
};

export type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

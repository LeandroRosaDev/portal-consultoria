export type User = {
  id?: string;
  nome?: string;
  email?: string;
  rua?: string;
  numero?: number;
  complemento?: string;
  cep?: number;
  bairro?: string;
  cidade?: string;
  estado?: string;
  telefone?: number;
  genero?: number;
  origem?: number;
  tipo_acesso?: number;
  servico?: number;
  token?: string;
  profile_picture_attachment_id?: string;
};

export type Conta = {
  autorizado: boolean;
  nome: any;
};

export type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

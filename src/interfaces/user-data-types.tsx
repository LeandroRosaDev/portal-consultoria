export type User = {
  id?: string;
  nome?: string;
  username?: string;
};

export type Conta = {
  autorizado: boolean;
  nome: any;
};

export type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

'use client';

// import logout from '@/actions/login/logout-action';
// import validateToken from '@/validate/validate-token'

import React, { useContext, useState } from 'react';

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
  advogado: boolean;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('useContext deve estar dentro do Provider');
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = useState<User | null>(user);

  // Validate token :

  // React.useEffect(() => {
  //   async function validate() {
  //     const {ok} = await validateToken()
  //     if(!ok) await logout()
  //   }
  // if(userState) validate()
  // }, [userState])

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

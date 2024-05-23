"use client";

import logout from "@/actions/login/logout-action";
import validateToken from "@/actions/validate/validate-token";
import { User } from "@/interfaces/user-data-types";

import React, { useContext, useState } from "react";

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useContext deve estar dentro do Provider");
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

  React.useEffect(() => {
    async function validate() {
      if (!userState?.token) return;
      try {
        const { ok } = await validateToken();
        if (!ok) await logout();
      } catch (error) {
        console.error("Erro ao validar token:", error);
        await logout();
      }
    }
    if (userState) validate();
  }, [userState]);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

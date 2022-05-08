import React, { createContext, useState } from "react";
import { AuthKitType, CbType, ChildrenType } from "../types/types";

export const AuthContext = createContext<AuthKitType>({ user: null } as AuthKitType);

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<null | string>(null);

  const signIn = (newUser: string, cb: () => CbType) => {
    setUser(newUser);
    cb();
  };

  const signOut = (cb: () => CbType) => {
    setUser(null);
    cb();
  };
  const authKit = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={authKit}>{children}</AuthContext.Provider>
  );
};

import React, { createContext, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { AuthKitType, ChildrenType } from "../types/types";

export const AuthContext = createContext<AuthKitType>({ user: null } as AuthKitType);

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<null | string>(null);

  const signIn = (newUser: string, cb: () => NavigateFunction) => {
    setUser(newUser);
    cb();
  };

  const signOut = (cb: () => NavigateFunction) => {
    setUser(null);
    cb();
  };
  const authKit = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={authKit as AuthKitType}>{children}</AuthContext.Provider>
  );
};

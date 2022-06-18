import React, { createContext, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { AuthKitType, ChildrenType } from "../types/types";
import { HOME_PAGE_ROUTE } from "../utils/routes";

export const AuthContext = createContext<AuthKitType>({
  user: null,
  beforeLoginPagePath: HOME_PAGE_ROUTE,
} as AuthKitType);

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<null | string>(null);
  const [beforeLoginPagePath, setBeforeLoginPagePath] =
    useState<string>(HOME_PAGE_ROUTE);

  const signIn = (newUser: string, cb: () => NavigateFunction) => {
    setUser(newUser);
    cb();
  };

  const signOut = (cb: () => NavigateFunction) => {
    setUser(null);
    cb();
  };

  const authKit = {
    user,
    signIn,
    signOut,
    beforeLoginPagePath,
    setBeforeLoginPagePath,
  };

  return (
    <AuthContext.Provider value={authKit as AuthKitType}>
      {children}
    </AuthContext.Provider>
  );
};

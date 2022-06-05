import React, { createContext, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { FBInterface } from "../firebase_init/FBInterface";
import { AuthKitType, ChildrenType } from "../types/types";

export const AuthContext = createContext<AuthKitType>({
  user: null,
  beforeLoginPagePath: "/",
} as AuthKitType);

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<null | string>(null);
  const [beforeLoginPagePath, setBeforeLoginPagePath] = useState<string>("/");
  const newCrud = new FBInterface();

  const signIn = (newUser: string, cb: () => NavigateFunction) => {
    setUser(newUser);
    cb();
  };

  const signUp = async (newUser: string, cb: () => NavigateFunction) => {
    setUser(newUser);
    await newCrud.addNewUserOnFB(newUser);
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
    signUp,
    beforeLoginPagePath,
    setBeforeLoginPagePath,
  };

  return (
    <AuthContext.Provider value={authKit as AuthKitType}>
      {children}
    </AuthContext.Provider>
  );
};

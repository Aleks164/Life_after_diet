import React, { createContext, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { FBInterface } from "../firebase_init/FBInterface";
import { useClientSettings } from "../hooks/useClientSettings";
import { AuthKitType, ChildrenType } from "../types/types";
import { createEmailForFB } from "../utils/createEmailForFB";
import { defaultSettings } from "../utils/defaultSettings";

export const AuthContext = createContext<AuthKitType>({ user: null } as AuthKitType);

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<null | string>(null);
  const newCrud = new FBInterface();
  const { setClientSettings, setClientHistory, setClientFavourite } = useClientSettings();

  const signIn = (newUser: string, cb: () => NavigateFunction) => {
    setUser(newUser);
    newCrud.getUserParam(createEmailForFB(newUser), "settings").then((response) => {
      if (setClientSettings)
        setClientSettings(response);
      cb();
    });
  };

  const signUp = async (newUser: string, cb: () => NavigateFunction) => {
    setUser(newUser);
    await newCrud.addNewUserOnFB(createEmailForFB(newUser), defaultSettings);
    cb();
  };

  const signOut = (cb: () => NavigateFunction) => {
    setUser(null);
    cb();
  };
  const authKit = { user, signIn, signOut, signUp };

  return (
    <AuthContext.Provider value={authKit as AuthKitType}>{children}</AuthContext.Provider>
  );
};

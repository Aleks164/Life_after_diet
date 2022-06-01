import React, { createContext, useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { FBInterface } from "../firebase_init/FBInterface";
import { useClientSettings } from "../hooks/useClientSettings";
import { AuthKitType, ChildrenType, SettingType } from "../types/types";
import { defaultSettings } from "../utils/defaultSettings";

export const AuthContext = createContext<AuthKitType>({
  user: null
} as AuthKitType);

export const AuthProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState<null | string>(null);
  const newCrud = new FBInterface();
  const { setClientSettings } = useClientSettings();

  const signIn = (newUser: string, cb: () => NavigateFunction) => {
    setUser(newUser);
    newCrud
      .getUserParam(newUser, "settings")
      .then((response: SettingType) => {
        if (setClientSettings) setClientSettings(response);
        cb();
      })
      .catch((e: Error) => {
        if (setClientSettings) setClientSettings(defaultSettings);
        console.log(e);
        cb();
      });
  };

  const signUp = async (newUser: string, cb: () => NavigateFunction) => {
    setUser(newUser);
    await newCrud.addNewUserOnFB(newUser, defaultSettings);
    cb();
  };

  const signOut = (cb: () => NavigateFunction) => {
    setUser(null);
    cb();
  };
  const authKit = { user, signIn, signOut, signUp };

  return (
    <AuthContext.Provider value={authKit as AuthKitType}>
      {children}
    </AuthContext.Provider>
  );
};

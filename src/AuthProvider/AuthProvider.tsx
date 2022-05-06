import React, { createContext, useState } from "react";
import { NavigateFunction } from "react-router-dom";

export const AuthContext = createContext(null);

type CbType = () => NavigateFunction

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (newUser: string, cb: CbType) => {
    setUser(newUser);
    cb();
  };

  const signOut = (cb: CbType) => {
    setUser(null);
    cb();
  };
  const authKit = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={authKit}>{children}</AuthContext.Provider>
  );
};

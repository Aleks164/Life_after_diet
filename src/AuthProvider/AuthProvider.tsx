import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (newUser, cb) => {
    setUser(newUser);
    cb();
  };

  const signOut = (cb) => {
    setUser(null);
    cb();
  };
  const authKit = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={authKit}>{children}</AuthContext.Provider>
  );
};

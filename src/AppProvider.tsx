import React from "react";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { AppRouter } from "./AppRouter";

export const AppProvider = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);

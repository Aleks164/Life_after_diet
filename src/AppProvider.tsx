import React from "react";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { AppRouter } from "./AppRouter";
import { ClientSettingsProvider } from "./ClientSettingsProvider/ClientSettingsProvider";

export const AppProvider = () => (
  <AuthProvider>
    <ClientSettingsProvider>
      <AppRouter />
    </ClientSettingsProvider>
  </AuthProvider>
);

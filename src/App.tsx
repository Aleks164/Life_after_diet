import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppProvider";

export const App = () => (
  <BrowserRouter>
    <AppProvider />
  </BrowserRouter>
);

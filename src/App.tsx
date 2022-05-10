import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppProvider";

export const App = () => (
  <BrowserRouter>
    <AppProvider />
  </BrowserRouter>
);

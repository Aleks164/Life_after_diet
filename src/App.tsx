import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./AppProvider";

export const App = () => {
  const [value, setValue] = useState(["default", ""]);

  useEffect(() => {});

  return (
    <BrowserRouter>
      <AppProvider />
    </BrowserRouter>
  );
};

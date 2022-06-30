import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { initializeApp } from "firebase/app";
import { App } from "./App";
import { keys } from "../keys";
import "./index.css";

initializeApp(keys.fbAPIKey);


const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

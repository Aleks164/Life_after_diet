import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { initializeApp } from "firebase/app";
import { App } from "./App";
import { FB_API_KEYS } from "../FB_API_KEYS";
import "./index.css";

initializeApp(FB_API_KEYS);


const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

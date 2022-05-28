import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { initializeApp } from "firebase/app";
import { App } from "./App";
import "./index.css";

initializeApp({
  apiKey: "AIzaSyDxdPNvL8leleeU8m76kCXcC6hOr3ueNjg",
  authDomain: "lifeafterdiets-30c24.firebaseapp.com",
  databaseURL: "https://lifeafterdiets-30c24-default-rtdb.firebaseio.com",
  projectId: "lifeafterdiets-30c24",
  storageBucket: "lifeafterdiets-30c24.appspot.com",
  messagingSenderId: "543791507558",
  appId: "1:543791507558:web:8aae671c3298a6b16365a7",
  measurementId: "G-1EXMBFBYM8"
})


const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOMClient.createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "@/components/AuthPage/Login/Login";
import { ClientSettingsProvider } from "@/ClientSettingsProvider/ClientSettingsProvider";
import "@/index.css";

export default {
  title: "Login field",
  component: Login,
  argTypes: {},
};

export const LoginField = () => <BrowserRouter><ClientSettingsProvider><Login /></ClientSettingsProvider></BrowserRouter>;

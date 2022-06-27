import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ClientSettingsProvider } from "@/ClientSettingsProvider/ClientSettingsProvider";
import { SignUp } from "@/components/AuthPage/SignUp/SignUp";
import "@/index.css";

export default {
  title: "SignUp field",
  component: SignUp,
  argTypes: {},
};

export const SignUpField = () => <BrowserRouter><ClientSettingsProvider><SignUp /></ClientSettingsProvider></BrowserRouter>;

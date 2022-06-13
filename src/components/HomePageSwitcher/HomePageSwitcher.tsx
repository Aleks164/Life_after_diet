import React from "react";
import { IsAuthType } from "../../types/types";
import { AuthHomePage } from "../AfterAuthHomePage/AuthHomePage";
import { UnAuthHomePage } from "../UnAuthHomePage/UnAuthHomePage";

export const HomePageSwitcher = ({ isAuth }: IsAuthType) => (
  <>{!isAuth ? <UnAuthHomePage /> : <AuthHomePage />}</>
);

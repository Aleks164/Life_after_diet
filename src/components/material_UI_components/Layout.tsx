import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { IsAuthType } from "../../types/types";
import { RoutesName } from "../../utils/routes";

export const Layout = ({ isAuth }: IsAuthType) => {
  const isLoginPage = useLocation().pathname === RoutesName.LOGIN_ROUTE;
  const isSignUpPage = useLocation().pathname === RoutesName.SIGNUP_ROUTE;

  return (
    <>
      <Header
        isAuth={isAuth}
        isSignUpPage={isSignUpPage}
        isLoginPage={isLoginPage}
      />

      <Outlet />
    </>
  );
};

import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { SignOutLink } from "../SignOutLink/SignOutLink";
import { SignInLink } from "../SignInLink/SignInLink";
import { IsAuthType } from "../../types/types";

export const Layout = ({ isAuth }: IsAuthType) => {
  const isLoginPage = useLocation().pathname === "/login";
  return (
    <>
      <header className="layout">
        <h1 className="mainTitle">Life after dieT's...</h1>
        <hr />
        <div className="layoutLinkCont">
          <NavLink to="/">Home</NavLink>
          {isAuth ? (
            <>
              <NavLink to="/settings">Settings</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
            </>
          ) : (
            ""
          )}
          <NavLink to="/about">About</NavLink>
        </div>
        {isLoginPage ? "" : <div className="signCont" >{!isAuth ? (
          <SignInLink to="/login">Log In</SignInLink>
        ) : (
          <SignOutLink to="/">Log Out</SignOutLink>
        )}
        </div>}
        <hr />
      </header>
      <Outlet />
    </>
  )
};

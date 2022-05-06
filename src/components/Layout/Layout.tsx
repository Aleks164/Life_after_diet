import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { SignOutLink } from "../SignOutLink/SignOutLink";
import { SignInLink } from "../SignInLink/SignInLink";

type IsAuthType = { isAuth: boolean };

export const Layout = ({ isAuth }: IsAuthType) => (
  <>
    <header>
      <h1>Life after diet...</h1>
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
      {!isAuth ? (
        <SignInLink to="/login">Login</SignInLink>
      ) : (
        <SignOutLink to="/">Logout</SignOutLink>
      )}
    </header>
    <Outlet />
  </>
);

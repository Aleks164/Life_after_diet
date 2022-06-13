import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { SignOutLink } from "../SignOutLink/SignOutLink";
import { SignInLink } from "../SignInLink/SignInLink";
import { IsAuthType } from "../../types/types";

export const Layout = ({ isAuth }: IsAuthType) => {
  const isLoginPage = useLocation().pathname === "/login";
  const isHomePage = useLocation().pathname === "/";
  const navigate = useNavigate();

  return (
    <>
      <header className="layout">
        <h1
          className="mainTitle"
          onClick={() => {
            navigate("/");
          }}
        >
          Life after diet...
        </h1>
        {isAuth ? (
          <div className="welcomeField">
            <p>{isAuth}</p>
          </div>
        ) : (
          ""
        )}
        <hr />
        <div className="layoutLinkCont">
          <NavLink to="/">Recipes</NavLink>
          {isAuth ? (
            <>
              <NavLink to="/history">History</NavLink>
              <NavLink to="/favourite">Favourite</NavLink>
            </>
          ) : (
            ""
          )}
          <NavLink to="/about">About</NavLink>
        </div>
        {isLoginPage ? (
          <div className="signCont">
            <SignInLink to="/signup">Sign Up</SignInLink>
          </div>
        ) : (
          <div className="signCont">
            {!isAuth ? (
              <>{isHomePage ? <><SignInLink to="/login">Log In</SignInLink><SignInLink to="/signup">Sign Up</SignInLink></> : <SignInLink to="/login">Log In</SignInLink>}</>
            ) : (
              <SignOutLink to="/">Log Out</SignOutLink>
            )}
          </div>
        )}
        <hr />
      </header>
      <Outlet />
    </>
  );
};

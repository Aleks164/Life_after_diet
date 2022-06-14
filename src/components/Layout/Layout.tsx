import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { SignOutLink } from "../SignOutLink/SignOutLink";
import { SignInLink } from "../SignInLink/SignInLink";
import {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  HOMEPAGE_ROUTE,
  HISTORY_ROUTE,
  FAVOURITE_ROUTE,
  ABOUT_ROUTE
} from "../../utils/routes";
import { IsAuthType } from "../../types/types";

export const Layout = ({ isAuth }: IsAuthType) => {
  const isLoginPage = useLocation().pathname === LOGIN_ROUTE;
  const isHomePage = useLocation().pathname === HOMEPAGE_ROUTE;
  const navigate = useNavigate();

  return (
    <>
      <header className="layout">
        <h1
          className="mainTitle"
          onClick={() => {
            navigate(HOMEPAGE_ROUTE);
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
          <NavLink to={HOMEPAGE_ROUTE}>Recipes</NavLink>
          {isAuth ? (
            <>
              <NavLink to={HISTORY_ROUTE}>History</NavLink>
              <NavLink to={FAVOURITE_ROUTE}>Favourite</NavLink>
            </>
          ) : (
            ""
          )}
          <NavLink to={ABOUT_ROUTE}>About</NavLink>
        </div>
        {isLoginPage ? (
          <div className="signCont">
            <SignInLink to={SIGNUP_ROUTE}>Sign Up</SignInLink>
          </div>
        ) : (
          <div className="signCont">
            {!isAuth ? (
              <>
                {isHomePage ? (
                  <>
                    <SignInLink to={LOGIN_ROUTE}>Log In</SignInLink>
                    <SignInLink to={SIGNUP_ROUTE}>Sign Up</SignInLink>
                  </>
                ) : (
                  <SignInLink to={LOGIN_ROUTE}>Log In</SignInLink>
                )}
              </>
            ) : (
              <SignOutLink to={HOMEPAGE_ROUTE}>Log Out</SignOutLink>
            )}
          </div>
        )}
        <hr />
      </header>
      <Outlet />
    </>
  );
};

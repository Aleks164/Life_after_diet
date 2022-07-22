import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { SignOutLink } from "../LogOutLink/LogOutLink";
import { SignInLink } from "../AuthLink/AuthLink";
import { RoutesName } from "@/utils/routes";
import { IsAuthType } from "@/types/types";

const Layout = ({ isAuth }: IsAuthType) => {
  const isLoginPage = useLocation().pathname === RoutesName.LOGIN_ROUTE;
  const isHomePage = useLocation().pathname === RoutesName.HOME_PAGE_ROUTE;
  const navigate = useNavigate();

  return (
    <>
      <header className="layout">
        <h1
          className="mainTitle"
          onClick={() => {
            navigate(RoutesName.HOME_PAGE_ROUTE);
          }}
        >
          Life after diet...
        </h1>
        {isAuth ? (
          <div className="welcomeField">
            <p>{isAuth}</p>
          </div>
        ) : null}
        <hr />
        <div className="layoutLinkCont">
          <NavLink to={RoutesName.HOME_PAGE_ROUTE}>Recipes</NavLink>
          {isAuth ? (
            <>
              <NavLink to={RoutesName.HISTORY_ROUTE}>History</NavLink>
              <NavLink to={RoutesName.FAVOURITE_ROUTE}>Favourite</NavLink>
            </>
          ) : null}
          <NavLink to={RoutesName.ABOUT_ROUTE}>About</NavLink>
        </div>
        {isLoginPage ? (
          <div className="signCont">
            <SignInLink to={RoutesName.SIGNUP_ROUTE}>Sign Up</SignInLink>
          </div>
        ) : (
          <div className="signCont">
            {!isAuth ? (
              <>
                {isHomePage ? (
                  <>
                    <SignInLink to={RoutesName.LOGIN_ROUTE}>Log In</SignInLink>
                    <SignInLink to={RoutesName.SIGNUP_ROUTE}>
                      Sign Up
                    </SignInLink>
                  </>
                ) : (
                  <SignInLink to={RoutesName.LOGIN_ROUTE}>Log In</SignInLink>
                )}
              </>
            ) : (
              <SignOutLink to={RoutesName.HOME_PAGE_ROUTE}>Log Out</SignOutLink>
            )}
          </div>
        )}
        <hr />
      </header>
      <Outlet />
    </>
  );
};

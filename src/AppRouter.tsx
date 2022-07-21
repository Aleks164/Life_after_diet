import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { Login } from "./components/AuthPage/Login/Login";
import { useAuth } from "./hooks/useAuth";
import { HomePageSwitcher } from "./components/HomePageSwitcher/HomePageSwitcher";
import { RecipeByIdPage } from "./components/AfterAuthHomePage/RecipeByIdPage/RecipeByIdPage";
import { HistoryPage } from "./components/AfterAuthHomePage/HistoryPage/HistoryPage";
import { FavouretePage } from "./components/AfterAuthHomePage/FavouretePage/FavouretePage";
import { RecipesListPage } from "./components/AfterAuthHomePage/RecipesListPage/RecipesListPage";
import { SignUp } from "./components/AuthPage/SignUp/SignUp";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { RoutesName } from "./utils/routes";
import { Header } from "./components/material_UI_components/Header";

export const AppRouter = () => {
  const userAuth = useAuth().user;
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to={RoutesName.HOME_PAGE_ROUTE} />} /> */}
      <Route path="/" element={<Header />} />
      {/* <Route
        path={RoutesName.HOME_PAGE_ROUTE}
        element={<Layout isAuth={userAuth} />}
      >
        <Route index element={<HomePageSwitcher isAuth={userAuth} />} />
        <Route path={RoutesName.ABOUT_ROUTE} element={<AboutPage />} />
        {!userAuth ? (
          <>
            <Route path={RoutesName.LOGIN_ROUTE} element={<Login />} />
            <Route path={RoutesName.SIGNUP_ROUTE} element={<SignUp />} />
          </>
        ) : (
          ""
        )}
        {userAuth ? (
          <>
            <Route path={RoutesName.HISTORY_ROUTE} element={<HistoryPage />} />
            <Route
              path={RoutesName.FAVOURITE_ROUTE}
              element={<FavouretePage />}
            />
            <Route
              path={RoutesName.RECIPE_ID_PAGE_ROUTE}
              element={<RecipeByIdPage />}
            />
            <Route
              path={RoutesName.RECIPES_PAGE_ROUTE}
              element={<RecipesListPage />}
            />
          </>
        ) : (
          ""
        )}
        <Route path="*" element={<RequireAuth />} />
      </Route> */}
    </Routes>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";
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
import {
  LOGIN_ROUTE,
  SIGNUP_ROUTE,
  HOMEPAGE_ROUTE,
  HISTORY_ROUTE,
  FAVOURITE_ROUTE,
  ABOUT_ROUTE, RECIPES_PAGE_ROUTE, RECIPE_ID_PAGE_ROUTE
} from "./utils/routes";

export const AppRouter = () => {
  const userAuth = useAuth().user;
  return (
    <Routes>
      <Route path={HOMEPAGE_ROUTE} element={<Layout isAuth={userAuth} />}>
        <Route index element={<HomePageSwitcher isAuth={userAuth} />} />
        <Route path={ABOUT_ROUTE} element={<AboutPage />} />
        {!userAuth ? (
          <>
            <Route path={LOGIN_ROUTE} element={<Login />} />
            <Route path={SIGNUP_ROUTE} element={<SignUp />} />
          </>
        ) : (
          ""
        )}
        {userAuth ? (
          <>
            <Route path={HISTORY_ROUTE} element={<HistoryPage />} />
            <Route path={FAVOURITE_ROUTE} element={<FavouretePage />} />
            <Route path={RECIPE_ID_PAGE_ROUTE} element={<RecipeByIdPage />} />
            <Route path={RECIPES_PAGE_ROUTE} element={<RecipesListPage />} />
          </>
        ) : (
          ""
        )}
        <Route path="*" element={<RequireAuth />} />
      </Route>
    </Routes>
  );
};

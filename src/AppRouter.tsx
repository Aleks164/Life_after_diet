import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Image } from "./components/image";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { Login } from "./components/AuthPage/Login/Login";
import { useAuth } from "./hooks/useAuth";
import { HomePageSwitcher } from "./components/HomePageSwitcher/HomePageSwitcher";
import { RecipeByIdPage } from "./components/AfterAuthHomePage/RecipeByIdPage/RecipeByIdPage";
import { HistoryPage } from "./components/AfterAuthHomePage/HistoryPage/HistoryPage";
import { FavouretePage } from "./components/AfterAuthHomePage/FavouretePage/FavouretePage";
import { RecipesListPage } from "./components/AfterAuthHomePage/RecipesListPage/RecipesListPage";
import { SignUp } from "./components/AuthPage/SignUp/SignUp";

export const AppRouter = () => {
  const userAuth = useAuth().user;

  return (
    <Routes>
      <Route path="/" element={<Layout isAuth={userAuth} />}>
        <Route index element={<HomePageSwitcher isAuth={userAuth} />} />
        <Route path="about" element={<Image />} />
        {!userAuth ? (
          <>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </>
        ) : (
          ""
        )}
        {userAuth ? (
          <>
            <Route path="history" element={<HistoryPage />} />
            <Route path="favourite" element={<FavouretePage />} />
            <Route path="recipe/:id" element={<RecipeByIdPage />} />
            <Route path="recipebook" element={<RecipesListPage />} />
          </>
        ) : (
          ""
        )}
        <Route path="*" element={<RequireAuth />} />
      </Route>
    </Routes>
  );
};

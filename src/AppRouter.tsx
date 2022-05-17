import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Image } from "./components/image";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { Login } from "./components/Login/Login";
import { useAuth } from "./hooks/useAuth";
import { HomePageSwitcher } from "./components/HomePageSwitcher/HomePageSwitcher";
import { RecipeByIdPage } from "./components/AuthHomePage/RecipeByIdPage";

export const AppRouter = () => {
  const userAuth = useAuth().user;

  return (
    <Routes>
      <Route path="/" element={<Layout isAuth={userAuth} />}>
        <Route index element={<HomePageSwitcher isAuth={userAuth} />} />
        <Route path="about" element={<Image />} />
        {!userAuth ? <Route path="login" element={<Login />} /> : ""}
        {userAuth ? (
          <>
            <Route path="settings" element={<Image />} />
            <Route path="statistics" element={<Image />} />
            <Route path="recipe/:id" element={<RecipeByIdPage />} />
          </>
        ) : (
          ""
        )}
        <Route path="*" element={<RequireAuth />} />
      </Route>
    </Routes>
  );
};

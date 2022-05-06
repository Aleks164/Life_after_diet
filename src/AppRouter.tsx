import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Image } from "./components/image";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { Login } from "./components/Login/Login";
import { useAuth } from "./hooks/useAuth";
import { JustButton } from "./components/JustButton/JustButton";
import { TemplateImage } from "./components/TemplateImage/TemplateImage";

export const AppRouter = () => {
  const userAuth = useAuth().user;

  return (
    <Routes>
      <Route path="/" element={<Layout isAuth={userAuth} />}>
        <Route index element={<TemplateImage />} />
        <Route path="about" element={<Image />} />
        {!userAuth ? <Route path="login" element={<Login />} /> : ""}
        {userAuth ? (
          <>
            <Route path="settings" element={<Image />} />
            <Route path="statistics" element={<Image />} />
          </>
        ) : (
          ""
        )}
        <Route path="*" element={<RequireAuth />} />
      </Route>
    </Routes>
  );
};

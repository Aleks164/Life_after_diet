import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RequireAuth = () => {
  const location = useLocation();
  const isAuth = useAuth().user;
  const { setBeforeLoginPagePath } = useAuth();

  if (!isAuth) {
    return <>{setBeforeLoginPagePath(location.pathname)}<Navigate to="/login" /></>;
  }
  return <Navigate to="/" />;
};

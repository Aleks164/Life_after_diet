import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RequireAuth = () => {
  const location = useLocation();
  const { user, setBeforeLoginPagePath } = useAuth();

  useEffect(() => {
    if (!user) {
      setBeforeLoginPagePath(location.pathname);
      console.log("location.pathname", location.pathname);
    }
  }, [user]);

  if (!user) {
    return (
      <>
        <Navigate to="/login" />
      </>
    );
  }
  return <Navigate to="/" />;
};

import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LOGIN_ROUTE, HOMEPAGE_ROUTE } from "../../utils/routes";

export const RequireAuth = () => {
  const location = useLocation();
  const { user, setBeforeLoginPagePath } = useAuth();

  useEffect(() => {
    if (!user) {
      setBeforeLoginPagePath(location.pathname);
    }
  }, [user]);

  if (!user) {
    return (
      <>
        <Navigate to={LOGIN_ROUTE} />
      </>
    );
  }
  return <Navigate to={HOMEPAGE_ROUTE} />;
};

import React, { useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { RoutesName } from "@/utils/routes";

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
        <Navigate to={RoutesName.LOGIN_ROUTE} />
      </>
    );
  }
  return <Navigate to={RoutesName.HOME_PAGE_ROUTE} />;
};

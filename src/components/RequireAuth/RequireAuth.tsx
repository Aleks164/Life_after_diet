import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const RequireAuth = () => {
  const location = useLocation();
  const isAuth = useAuth().user;
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Navigate to="/" />;
};

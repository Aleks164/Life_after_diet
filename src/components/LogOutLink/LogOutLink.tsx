import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import { RoutesName } from "../../utils/routes";

export const LogOutLink = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const to = RoutesName.HOME_PAGE_ROUTE;

  const signOutClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    signOut(() => navigate(to, { replace: true }));
  };
  return (
    <Button
      component={Link}
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        signOutClick(event);
      }}
      to={to}
      variant="outlined"
      size="small"
      color="inherit"
    >
      Log Out
    </Button>
  );
};

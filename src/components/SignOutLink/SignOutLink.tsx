import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LinkPropType } from "../../types/types";

export const SignOutLink = ({ children, to }: LinkPropType) => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const signOutClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    signOut(() => navigate(to, { replace: true }));
  };
  return (
    <Link className="signInLink" to={to} onClick={signOutClick}>
      {children}
    </Link>
  );
};

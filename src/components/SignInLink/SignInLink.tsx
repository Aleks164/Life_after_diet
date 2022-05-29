import React from "react";
import { Link } from "react-router-dom";
import { LinkPropType } from "../../types/types";

export const SignInLink = ({ children, to }: LinkPropType) => (
  <Link className="signInLink" to={to}>
    {children}
  </Link>
);

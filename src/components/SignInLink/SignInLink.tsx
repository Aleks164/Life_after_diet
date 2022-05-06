import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const SignInLink = ({ children, to, ...ptops }) => (
  <Link className="signInLink" to={to}>
    {children}
  </Link>
);

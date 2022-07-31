import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLinkParamType } from "../../types/types";

export const AuthLink = ({ to, type }: AuthLinkParamType) => (
  <Button
    variant="outlined"
    size="small"
    color="inherit"
    sx={{ mr: 2, mb: 1 }}
    component={Link}
    to={to}
  >
    {type}
  </Button>
);

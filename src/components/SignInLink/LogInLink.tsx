import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { RoutesName } from "@/utils/routes";

export const LogInLink = () => (
  <Button
    variant="outlined"
    size="small"
    color="inherit"
    sx={{ mr: 2 }}
    component={Link}
    to={RoutesName.LOGIN_ROUTE}
  >
    Log In
  </Button>
);

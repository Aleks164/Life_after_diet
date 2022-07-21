import React from "react";
import {
  AppBar,
  Button,
  ButtonGroup,
  IconButton,
  Link,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { Home, History, Favorite } from "@mui/icons-material";
import { LogOutLink } from "../SignOutLink/LogOutLink";
import { RoutesName } from "@/utils/routes";
import { LogInLink } from "../SignInLink/LogInLink";

export const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Link color="inherit" href={RoutesName.HOME_PAGE_ROUTE}>
        <IconButton>
          <Home />
        </IconButton>
      </Link>
      <Typography
        variant="h6"
        sx={{ width: "fit-content", ml: 2, fontFamily: "monospace" }}
      >
        {" "}
        Life after diet...
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          "& > *": {
            m: 1,
          },
        }}
      >
        <Link color="inherit" href={RoutesName.HISTORY_ROUTE}>
          <IconButton>
            <History />
          </IconButton>
        </Link>
        <Link color="inherit" href={RoutesName.FAVOURITE_ROUTE}>
          <IconButton>
            <Favorite />
          </IconButton>
        </Link>
      </Box>

      <LogInLink />
      <LogOutLink />
    </Toolbar>
  </AppBar>
);

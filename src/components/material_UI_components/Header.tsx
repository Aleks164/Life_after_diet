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
  Grid,
} from "@mui/material";
import { Home, History, Favorite, Info } from "@mui/icons-material";
import { LogOutLink } from "../LogOutLink/LogOutLink";
import { RoutesName } from "../../utils/routes";
import { AuthLink } from "../AuthLink/AuthLink";
import { HeaderParamType } from "../../types/types";

export const Header = ({
  isAuth,
  isSignUpPage,
  isLoginPage,
}: HeaderParamType) => (
  <Grid sx={{ flexGrow: 1 }} container>
    <AppBar position="sticky">
      <Toolbar>
        <Grid item xs={4}>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              ml: 2,
              fontFamily: "monospace",
              minWidth: "max",
            }}
          >
            {"Life after diet..."}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Link
              title="Home"
              color="inherit"
              href={RoutesName.HOME_PAGE_ROUTE}
            >
              <IconButton>
                <Home fontSize="large" />
              </IconButton>
            </Link>
            {isAuth && (
              <>
                <Link
                  title="History"
                  color="inherit"
                  href={RoutesName.HISTORY_ROUTE}
                >
                  <IconButton>
                    <History fontSize="large" />
                  </IconButton>
                </Link>
                <Link
                  title="Favorite"
                  color="inherit"
                  href={RoutesName.FAVOURITE_ROUTE}
                >
                  <IconButton>
                    <Favorite fontSize="large" />
                  </IconButton>
                </Link>
              </>
            )}
            <Link title="About" color="inherit" href={RoutesName.ABOUT_ROUTE}>
              <IconButton>
                <Info fontSize="large" />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            {!isAuth ? (
              <>
                {!isLoginPage && (
                  <AuthLink to={RoutesName.LOGIN_ROUTE} type="Log In" />
                )}
                {!isSignUpPage && (
                  <AuthLink to={RoutesName.SIGNUP_ROUTE} type="Sign Up" />
                )}
              </>
            ) : (
              <LogOutLink />
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </Grid>
);

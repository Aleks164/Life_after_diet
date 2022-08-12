import {
  Box,
  createTheme,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import leo from "../../assets/leo.png";

const theme = createTheme();
theme.typography.overline = {
  fontSize: "28px",
};

export const AboutPage = () => (
  <Paper
    sx={{
      marginTop: "20px",
      width: "80vw",
      marginRight: "auto",
      marginLeft: "auto",
    }}
    elevation={3}
  >
    <Grid sx={{ flexGrow: 1 }} container>
      <Grid item>
        <Box
          component="img"
          sx={{
            width: "150px",
            height: "175px",
            marginTop: "40px",
            marginLeft: "55px",
          }}
          alt={"leo"}
          src={leo}
        />
      </Grid>
      <Grid
        item
        sx={{
          marginTop: "35px",
          marginLeft: "25px",
        }}
      >
        <ThemeProvider theme={theme}>
          <Typography variant="overline">
            Web-site "Life after diet..."
          </Typography>
        </ThemeProvider>
        <Typography sx={{ marginTop: "35px" }}>
          Developed by:
          <Typography>
            <a
              href="mailto:alekseyleha@mail.ru"
              rel="noreferrer"
              target="_blank"
            >
              <Box
                component="img"
                sx={{
                  width: "15px",
                  height: "15px",
                  verticalAlign: "middle",
                  marginRight: "5px",
                }}
                alt={"leo"}
                src={
                  "https://webstockreview.net/images250_/email-clipart-mail-icon.png"
                }
              />
              {"alekseyleha@mail.ru"}
            </a>
          </Typography>
          <Typography>
            <a
              title="https://github.com/Aleks164"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Aleks164"
            >
              <Box
                component="img"
                sx={{
                  width: "25px",
                  height: "25px",
                  verticalAlign: "middle",
                  marginLeft: "-5px",
                }}
                alt={"leo"}
                src={
                  "https://www.comparasoftware.com/wp-content/uploads/2018/09/logoGitHub-150x150.png"
                }
              />
              Aleks164
            </a>
          </Typography>
        </Typography>
      </Grid>
    </Grid>
    <Typography sx={{ p: 3 }}>
      The application implements:
      <br />
      - client routing;
      <br />
      - remote storage - Firebase Realtime Database;
      <br />
      - supports authentification with login-password and Google
      authentification
      <br />- a parameterized link that you can save and return to at any time
      to see a specific recipe
      <a
        title="https://aleks164.github.io/Life_after_diet/recipe/638822"
        target="_blank"
        rel="noreferrer"
        href="https://aleks164.github.io/Life_after_diet/recipe/638822"
      >
        {" "}
        (Examle)
      </a>
      <br />
      The application is written in React with TS.
      <br />
      Сonfigured Continuous Integration and Continuous Delivery (CI/CD).
      <br />
      More information on
      <a
        title="https://github.com/Aleks164/Life_after_diet/tree/diet_App"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Aleks164/Life_after_diet/tree/diet_App"
      >
        {" GitHubRepo"}
      </a>
    </Typography>
  </Paper>
);

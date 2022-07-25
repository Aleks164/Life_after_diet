import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  Alert,
  Grid,
  LinearProgress,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { RoutesName } from "@/utils/routes";

export type FormParamType = {
  signInUpHandler: (loginEmail: string, loginPassword: string) => void;
  signInUpWithGoogle: () => void;
  processName: string;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Form = ({
  signInUpHandler,
  signInUpWithGoogle,
  processName,
  errorMessage,
  setErrorMessage,
  isLoading,
  setIsLoading,
}: FormParamType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPressedOnLoginButton, setIsPressedOnLoginButton] = useState(false);
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidPassword, setisValidPassword] = useState(true);

  useEffect(() => {
    if (errorMessage.length > 0) {
      setTimeout(() => {
        setErrorMessage("");
        setIsPressedOnLoginButton(false);
        setIsLoading(false);
      }, 8000);
    }
  });

  return (
    <Paper
      sx={{
        maxWidth: 350,
        ml: "auto",
        mr: "auto",
        mt: "5%",
        p: "3%",
        position: "relative",
      }}
      elevation={3}
    >
      <Typography sx={{ textAlign: "center" }} variant="h5">
        {processName === "Log in" ? "Welcome back, Log in" : "Sign up"}
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            ml: "auto",
            mr: "auto",
            mt: "5%",
            width: "25ch",
          },
        }}
        noValidate
      >
        <Grid
          container
          gap={1}
          alignItems="center"
          direction="column"
          justifyContent="space-evenly"
        >
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="userEmail"
            autoComplete="username"
            id="outlined-basic"
            value={email}
            label="Email"
            variant="outlined"
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="userPassword"
            autoComplete="current-password"
            id="outlined-basic"
            value={password}
            label="Password"
            variant="outlined"
          />
          <Grid>
            <Button
              size="large"
              sx={{ mt: "5%" }}
              onClick={() => {
                setIsPressedOnLoginButton(!isPressedOnLoginButton);
                signInUpHandler(email, password);
              }}
              disabled={isPressedOnLoginButton}
              variant="contained"
            >
              {processName}!
            </Button>
          </Grid>
          <Grid>
            <Button
              size="large"
              onClick={() => {
                setIsPressedOnLoginButton(!isPressedOnLoginButton);
                signInUpWithGoogle();
              }}
              disabled={isPressedOnLoginButton}
              variant="contained"
            >
              <GoogleIcon />
              oogle
            </Button>
          </Grid>
        </Grid>
      </Box>
      {isLoading ? (
        <LinearProgress sx={{ mt: "5%" }} />
      ) : (
        <Divider sx={{ mt: "5%" }} />
      )}
      {processName === "Log in" ? (
        <Typography sx={{ textAlign: "center", mt: "5%" }}>
          Do not have an account yet?{" "}
          <Link to={RoutesName.SIGNUP_ROUTE}>Sign up in here.</Link>
        </Typography>
      ) : (
        <Typography sx={{ textAlign: "center", mt: "5%" }}>
          You have an account already?{" "}
          <Link to={RoutesName.LOGIN_ROUTE}>Log in here.</Link>
        </Typography>
      )}
      {errorMessage.length > 0 && (
        <Alert sx={{ position: "absolute", bottom: "-50px" }} severity="error">
          {errorMessage}
        </Alert>
      )}
    </Paper>
  );
};

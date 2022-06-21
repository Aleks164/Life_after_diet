import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RoutesName } from "@/utils/routes";
import "./index.css";

export type FormParamType = {
  signInUpHandler: (loginEmail: string, loginPassword: string) => void;
  signInUpWithGoogle: () => void;
  processName: string;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
};

export const Form = ({
  signInUpHandler,
  signInUpWithGoogle,
  processName,
  errorMessage,
  setErrorMessage,
  isLoading,
}: FormParamType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPressedOnLoginButton, setIsPressedOnLoginButton] = useState(false);

  useEffect(() => {
    if (errorMessage.length > 0) {
      setTimeout(() => {
        setErrorMessage("");
      }, 8000);
    }
  });

  return (
    <div
      className={
        isLoading
          ? "registrationFormCont loadingCursor"
          : "registrationFormCont"
      }
    >
      <h2>{processName === "Log in" ? "Welcome back, Log in" : "Sign up"}</h2>
      <form className="registrationForm">
        <label>
          <p>Email:</p>
          <input
            type="email"
            value={email}
            autoComplete="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="userEmail"
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            value={password}
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="userPassword"
          />
        </label>
        <button
          disabled={isPressedOnLoginButton}
          onClick={() => {
            setIsPressedOnLoginButton(!isPressedOnLoginButton);
            signInUpHandler(email, password);
          }}
          className="loginFormButton"
          type="button"
        >
          {processName}!
        </button>
      </form>
      <button
        disabled={isPressedOnLoginButton}
        onClick={() => {
          setIsPressedOnLoginButton(!isPressedOnLoginButton);
          signInUpWithGoogle();
        }}
        className="googleAuthLink"
      >
        <div className="googleIcon"></div>
        <span>Google</span>
      </button>
      {processName === "Log in" ? (
        <p>
          Do not have an account yet?{" "}
          <Link to={RoutesName.SIGNUP_ROUTE}>Sign up in here.</Link>
        </p>
      ) : (
        <p>
          You have an account already?{" "}
          <Link to={RoutesName.LOGIN_ROUTE}>Log in here.</Link>
        </p>
      )}
      {errorMessage.length > 0 ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        ""
      )}
    </div>
  );
};

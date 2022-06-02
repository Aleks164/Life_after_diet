import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export type FormParamType = {
  signInUpHandler: (loginEmail: string, loginPassword: string) => void;
  processName: string;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
};

export const Form = ({
  signInUpHandler,
  processName,
  errorMessage,
  setErrorMessage,
  isLoading
}: FormParamType) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <form
        className="registrationForm"
        onSubmit={(event) => {
          event.preventDefault();
          signInUpHandler(email, password);
        }}
      >
        <label>
          <p>Email:</p>
          <input
            type="email"
            value={email}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="userPassword"
          />
        </label>
        <button className="loginFormButton" type="submit">
          {processName}!
        </button>
      </form>
      {processName === "Log in" ? (
        <p>
          Do not have an account yet?{" "}
          <Link to={"/signup"}>Sign up in here.</Link>
        </p>
      ) : (
        <p>
          You have an account already? <Link to={"/login"}>Log in here.</Link>
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

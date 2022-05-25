import React, { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import { Form } from "../Form/Form";

interface Location {
  state: { from: { pathname: string } }
}

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const beforeLoginPagePath = (location as Location).state?.from?.pathname || "/";

  const loginHandler = (loginEmail: string, loginPassword: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((respons) => console.log("respons", respons))
      .catch((error) => {

        if ((error.message as string).match("auth/invalid-email") !== null) setErrorMessage("Input please correct email")
        else if ((error.message as string).match("auth/user-not-found") !== null) setErrorMessage("The user with the entered username and password was not found")
        else if ((error.message as string).match("auth/wrong-password") !== null) setErrorMessage("Input please correct password")
        else if (typeof error.message === "string") setErrorMessage(`Some peoblem with your email or password ${error.message}`)
      })
  }


  // const submitLoginForm = (event: FormEvent<Element>) => {
  //   event.preventDefault();
  //   const form = event.target as HTMLFormElement;
  //   const userName = form.username.value;
  //   console.log("beforeLoginPagePath", beforeLoginPagePath)
  //   signIn(userName, () => navigate(beforeLoginPagePath, { replace: true }));
  // };

  return (<>
    <Form signInUpHandler={loginHandler} processName="Login" errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
  </>
  );
};

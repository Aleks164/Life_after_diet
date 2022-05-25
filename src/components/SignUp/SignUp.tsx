import React, { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import { Form } from "../Form/Form";

interface Location {
  state: { from: { pathname: string } }
}

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const beforeLoginPagePath = (location as Location).state?.from?.pathname || "/";

  const signUpHandler = (loginEmail: string, loginPassword: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, loginEmail, loginPassword).then(console.log).catch(console.error)


  }

  // const submitLoginForm = (event: FormEvent<Element>) => {
  //   event.preventDefault();
  //   const form = event.target as HTMLFormElement;
  //   const userName = form.username.value;
  //   console.log("beforeLoginPagePath", beforeLoginPagePath)
  //   signIn(userName, () => navigate(beforeLoginPagePath, { replace: true }));
  // };


  return (<>
    <Form signInUpHandler={signUpHandler} processName="Sign up" errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
  </>
  );
};

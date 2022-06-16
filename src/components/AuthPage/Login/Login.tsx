/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { isLoadingType } from "../../../types/types";
import { useAuth } from "../../../hooks/useAuth";
import { Form } from "../Form/Form";
import { createErrorMessage } from "../createErrorMessage";

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);
  const navigate = useNavigate();
  const { signIn, beforeLoginPagePath } = useAuth();

  const signInUpWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        if (result.user && result.user.email)
          signIn(result.user.email, () =>
            navigate(beforeLoginPagePath, { replace: true })
          );
      })
      .catch((e) => {
        setErrorMessage(e);
      });
  };

  const loginHandler = (loginEmail: string, loginPassword: string) => {
    const auth = getAuth();

    setIsLoading(!isLoading);
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((respons) => {
        if (typeof respons.user.email === "string")
          signIn(respons.user.email, () =>
            navigate(beforeLoginPagePath, { replace: true })
          );
        setIsLoading(!isLoading);
      })
      .catch((error) => {
        setErrorMessage(createErrorMessage(error.message));
        setIsLoading(!isLoading);
      });
  };

  return (
    <>
      <Form
        isLoading={isLoading}
        signInUpWithGoogle={signInUpWithGoogle}
        signInUpHandler={loginHandler}
        processName="Log in"
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </>
  );
};

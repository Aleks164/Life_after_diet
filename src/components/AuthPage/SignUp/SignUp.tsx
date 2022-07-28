import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuth } from "../../../hooks/useAuth";
import { Form } from "../Form/Form";
import { createErrorMessage } from "../createErrorMessage";
import { isLoadingType } from "../../../types/types";

export const SignUp = () => {
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
    createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
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
        signInUpHandler={loginHandler}
        processName="Sign up"
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        isLoading={isLoading}
        signInUpWithGoogle={signInUpWithGoogle}
        setIsLoading={setIsLoading}
      />
    </>
  );
};

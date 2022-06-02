import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { isLoadingType } from "../../../types/types";
import { useAuth } from "../../../hooks/useAuth";
import { Form } from "../Form/Form";
import { createErrorMessage } from "../createErrorMessage";

interface Location {
  state: { from: { pathname: string } };
}

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const beforeLoginPagePath =
    (location as Location).state?.from?.pathname || "/";

  const loginHandler = (loginEmail: string, loginPassword: string) => {
    const auth = getAuth();
    setIsLoading(!isLoading);
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((respons) => {
        if (typeof respons.user.email === "string")
          signIn(respons.user.email, () =>
            navigate(beforeLoginPagePath, { replace: true })
          );
        console.log("respons", respons);
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
        signInUpHandler={loginHandler}
        processName="Log in"
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </>
  );
};

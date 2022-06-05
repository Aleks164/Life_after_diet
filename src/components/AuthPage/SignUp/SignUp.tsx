import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../../hooks/useAuth";
import { Form } from "../Form/Form";
import { createErrorMessage } from "../createErrorMessage";
import { isLoadingType } from "../../../types/types";

interface Location {
  state: { from: { pathname: string } };
}

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { signUp } = useAuth();

  const beforeLoginPagePath =
    (location as Location).state?.from?.pathname || "/";

  const signUpHandler = (loginEmail: string, loginPassword: string) => {
    const auth = getAuth();
    setIsLoading(!isLoading);
    createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((respons) => {
        if (typeof respons.user.email === "string")
          signUp(respons.user.email, () =>
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
        signInUpHandler={signUpHandler}
        processName="Sign up"
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        isLoading={isLoading}
      />
    </>
  );
};

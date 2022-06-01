import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../../hooks/useAuth";
import { Form } from "../Form/Form";
import { createErrorMessage } from "../createErrorMessage";

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
      .then((respons) => {
        if (typeof respons.user.email === "string")
          signIn(respons.user.email, () => navigate(beforeLoginPagePath, { replace: true }));
      })
      .catch((error) => {
        setErrorMessage(createErrorMessage(error.message));
      })
  }

  return (<>
    <Form signInUpHandler={loginHandler} processName="Log in" errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
  </>
  );
};

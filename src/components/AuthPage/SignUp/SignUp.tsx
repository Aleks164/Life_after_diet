import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../../hooks/useAuth";
import { Form } from "../Form/Form";
import { createErrorMessage } from "../createErrorMessage";

interface Location {
  state: { from: { pathname: string } }
}

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { signUp } = useAuth();

  const beforeLoginPagePath = (location as Location).state?.from?.pathname || "/";

  const signUpHandler = (loginEmail: string, loginPassword: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((respons) => {
        console.log(respons.user.email);
        if (typeof respons.user.email === "string")
          signUp(respons.user.email, () => navigate(beforeLoginPagePath, { replace: true }));
        console.log("respons", respons);
      })
      .catch((error) => {
        setErrorMessage(createErrorMessage(error.message));
      })
  }

  return (<>
    <Form signInUpHandler={signUpHandler} processName="Sign up" errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
  </>
  );
};

import React, { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface Location {
  state: { from: { pathname: string } }
}

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const beforeLoginPagePath = (location as Location).state?.from?.pathname || "/";
  const submitLoginForm = (event: FormEvent<Element>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const userName = form.username.value;
    console.log("beforeLoginPagePath", beforeLoginPagePath)
    signIn(userName, () => navigate(beforeLoginPagePath, { replace: true }));
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={submitLoginForm}>
        <label>
          Name:
          <input name="username" />
        </label>
        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

export type FormParamType = { signInUpHandler: (loginEmail: string, loginPassword: string) => void, processName: string, errorMessage: string, setErrorMessage: React.Dispatch<React.SetStateAction<string>> }

export const Form = ({ signInUpHandler, processName, errorMessage, setErrorMessage }: FormParamType) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (errorMessage.length > 0) {
            setTimeout(() => {
                setErrorMessage("");
            }, 8000);
        }
    })

    return (<div className="registrationFormCont">
        <h2>{processName === "Login" ? "Welcome back, Log In" : "Sign Up"}</h2>
        <form className="registrationForm" onSubmit={(event) => { event.preventDefault(); signInUpHandler(email, password) }}>
            <label>
                <p>Email:</p>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} name="userEmail" />
            </label>
            <label>
                <p>Password:</p>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} name="userPassword" />
            </label>
            <button type="submit">{processName}!</button>
        </form>
        {processName === "Login" ? <p>Do not have an account yet? <Link to={"/signUp"}>Sign up in here.</Link></p> :
            <p> You have an account already? <Link to={"/login"}>Log in here.</Link></p>}
        {errorMessage.length > 0 ? <div className="errorMessage">{errorMessage}</div> : ""}
    </div>)
}

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const SorryUnfoundPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHistory = location.pathname === "/history";
  const isFavourite = location.pathname === "/favourite";

  return (
    <>
      {!isHistory && !isFavourite ? (
        <p className="noFoundMessage">
          Sorry... <br />
          but no recipes according to your requirements were found, reduce the
          number of parameters and try again, this should help.{" "}
        </p>
      ) : (
        ""
      )}
      {isHistory ? (
        <p className="noFoundMessage">Your history is empty.</p>
      ) : (
        ""
      )}
      {isFavourite ? (
        <p className="noFoundMessage">Your favourite list is empty.</p>
      ) : (
        ""
      )}
      <button
        className="tryAgainButton loginFormButton"
        onClick={() => {
          navigate("/");
        }}
      >
        {!isHistory && !isFavourite ? "Try again!" : "Finde recipe"}
      </button>
    </>
  );
};

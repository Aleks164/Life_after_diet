import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesName } from "../../../utils/routes";

export const SorryUnfoundPage = ({
  idIsNotFund,
}: {
  idIsNotFund?: boolean;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHistory = location.pathname === RoutesName.HISTORY_ROUTE;
  const isFavourite = location.pathname === RoutesName.FAVOURITE_ROUTE;

  return (
    <>
      {!isHistory && !isFavourite ? (
        <>
          {idIsNotFund ? (
            <p className="noFoundMessage">
              Sorry... <br />
              but there is no recipe for this link, perhaps there is an error in
              your link.
            </p>
          ) : (
            <p className="noFoundMessage">
              Sorry... <br />
              but no recipes according to your requirements were found, reduce
              the number of parameters and try again, this should help.
            </p>
          )}
        </>
      ) : null}
      {isHistory ? (
        <p className="noFoundMessage">Your history is empty.</p>
      ) : null}
      {isFavourite ? (
        <p className="noFoundMessage">Your favourite list is empty.</p>
      ) : null}
      <button
        className="tryAgainButton loginFormButton"
        onClick={() => {
          navigate(RoutesName.HOME_PAGE_ROUTE);
        }}
      >
        {!isHistory && !isFavourite ? "Try again!" : "Finde recipe"}
      </button>
    </>
  );
};

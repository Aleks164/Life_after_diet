import { useNavigate } from "react-router-dom";

export const SorryUnfoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="noFoundMessage">
        Sorry... <br />
        but no recipes according to your requirements were found, reduce the
        number of parameters and try again, this should help.
      </p>
      <button
        className="tryAgainButton loginFormButton"
        onClick={() => {
          navigate("/");
        }}
      >
        Try again!
      </button>
    </>
  );
};

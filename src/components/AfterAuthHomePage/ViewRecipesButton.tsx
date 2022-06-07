import React from "react";
import { useNavigate } from "react-router-dom";
import { ViewRecipeParamType } from "../../types/types";
import { useClientSettings } from "../../hooks/useClientSettings";
import { recipeRequestCreator } from "../../utils/recipeRequestCreator";
import { getRecipeListFromAPi } from "../../utils/getRecipeListFromAPi";

export const ViewRecipesButton = ({
  settings,
  isLoading,
  setIsLoading
}: ViewRecipeParamType) => {
  const { setClientSettings } = useClientSettings();
  const navigate = useNavigate();

  function clickViewButtonHandler() {
    if (setClientSettings) setClientSettings(settings);

    setIsLoading(!isLoading);

    getRecipeListFromAPi(recipeRequestCreator(settings)).then((response) => {
      setIsLoading(!isLoading);
      navigate("/recipebook/", { state: { recipeInfo: response } });
    });
  }

  return (
    <button
      className="loginFormButton findRecipesButton"
      onClick={clickViewButtonHandler}
    >
      {"Find recipes"}
    </button>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { ViewRecipeParamType } from "../../types/types";
import { useClientSettings } from "../../hooks/useClientSettings";
import { recipeRequestCreator } from "../../utils/recipeRequestCreator";
import { getRecipeListFromAPi } from "../../utils/getRecipeListFromAPi";
import { RECIPES_PAGE_ROUTE } from "../../utils/routes";

export const ViewRecipesButton = ({
  settings,
  isLoading,
  setIsLoading,
}: ViewRecipeParamType) => {
  const { setClientSettings } = useClientSettings();
  const navigate = useNavigate();

  function clickViewButtonHandler() {
    console.log(settings)
    if (setClientSettings) setClientSettings(settings);

    setIsLoading(!isLoading);

    getRecipeListFromAPi(recipeRequestCreator(settings)).then((response) => {
      setIsLoading(!isLoading);
      navigate(RECIPES_PAGE_ROUTE, { state: { recipeInfo: response } });
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

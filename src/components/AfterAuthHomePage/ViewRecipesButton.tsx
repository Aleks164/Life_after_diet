import React from "react";
import { useNavigate } from "react-router-dom";
import { ViewRecipeParamType } from "../../types/types";
import { useClientSettings } from "../../hooks/useClientSettings";
import { showRecipes } from "./showRecipes";

export const ViewRecipesButton = ({
  settings,
  isLoading,
  setIsLoading,
}: ViewRecipeParamType) => {
  const { setClientSettings } = useClientSettings();
  const navigate = useNavigate();
  const showRecipesParam = {
    setClientSettings,
    settings,
    setIsLoading,
    isLoading,
    navigate,
  };

  return (
    <button
      className="loginFormButton findRecipesButton"
      onClick={() => {
        showRecipes(showRecipesParam);
      }}
    >
      {"Find recipes"}
    </button>
  );
};

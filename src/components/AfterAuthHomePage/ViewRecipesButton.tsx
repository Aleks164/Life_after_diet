import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ViewRecipeParamType } from "../../types/types";
import { tempData } from "../../tempDataFromSpoon/dataFromSpoon";
import { useClientSettings } from "../../hooks/useClientSettings";

export async function getRecipeListFromAPi(queryString: string) {
  const options = {
    method: "GET",
    headers: {},
  };

  try {
    const response = await window.fetch(queryString, options);
    const url = await response.json();
    return url;
  } catch (e) {
    console.error(e);
    return tempData;
  }
}

export const ViewRecipesButton = ({
  settings,
  isLoading,
  setRequestSettings,
  setIsLoading,
}: ViewRecipeParamType) => {
  // const { setClientSettings } = useClientSettings();
  const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";
  const navigate = useNavigate();
  function rigthType(string: string) {
    return string.toLocaleLowerCase().replace(" ", "20%");
  }
  function recipeRequestCreator(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const {
      cuisinesList,
      dietSelector,
      intolerancesList,
      ingridientsSelector,
      mealTypesSelector,
      maxCaloriesInput,
    } = settings;

    let queryString = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myKey}`;
    if (dietSelector.diet.length)
      queryString += `&diet=${rigthType(dietSelector.diet)}`;
    if (cuisinesList.length)
      queryString += `&cuisine=${cuisinesList
        .map((cuisine) => rigthType(cuisine))
        .join(",")}`;
    if (intolerancesList.length)
      queryString += `&intolerances=${intolerancesList
        .map((intolerance) => rigthType(intolerance))
        .join(",")}`;
    if (ingridientsSelector.ingridients.length)
      queryString += `&includeIngredients=${ingridientsSelector.ingridients
        .map((ingridient) => rigthType(ingridient))
        .join(",")}`;
    if (mealTypesSelector.mealType.length)
      queryString += `&type=${rigthType(mealTypesSelector.mealType)}`;
    if (maxCaloriesInput.status)
      queryString += `&maxCalories=${maxCaloriesInput.value}`;
    queryString += `&number=10`;

    // if (setClientSettings) 
    setRequestSettings(settings);

    setIsLoading(!isLoading);

    getRecipeListFromAPi(queryString).then((response) => {
      setIsLoading(!isLoading);
      navigate("/recipebook/", { state: { recipeInfo: response } });
    });
  }
  return (
    <button
      className="loginFormButton findRecipesButton"
      onClick={recipeRequestCreator}
    >
      {"Find recipes"}
    </button>
  );
};

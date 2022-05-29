import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ViewRecipeParamType } from "../../types/types";
import { tempData } from "../../tempDataFromSpoon/dataFromSpoon";
import { useClientSettings } from "../../hooks/useClientSettings";
import { FBInterface } from "../../firebase_init/FBInterface";
import { createEmailForFB } from "../../utils/createEmailForFB";
import { useAuth } from "../../hooks/useAuth";

export async function spoon(fetchBody: string) {
  const options = {
    method: "GET",
    headers: {
    }
  };

  try {

    const response = await window.fetch(
      fetchBody,
      options
    );
    const url = await response.json();
    return url;

  } catch (e) {
    console.error(e);
    return tempData;
  }
}

export const ViewRecipesButton = ({
  settings, isLoading, setIsLoading
}: ViewRecipeParamType) => {
  const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";
  const { setClientSettings } = useClientSettings();
  const navigate = useNavigate();
  const newCrud = new FBInterface();
  const userAuth = useAuth().user;
  function rigthType(string: string) {
    return string.toLocaleLowerCase().replace(" ", "20%");
  }
  function recipeRequestCreator(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const { cuisinesList, dietSelector, intolerancesList, ingridientsSelector, mealTypesSelector } = settings;

    let fetchBody = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myKey}`;
    if (dietSelector.diet.length)
      fetchBody += `&diet=${rigthType(dietSelector.diet)}`;
    if (cuisinesList.length)
      fetchBody += `&cuisine=${cuisinesList
        .map((cuisine) => rigthType(cuisine))
        .join(",")}`;
    if (intolerancesList.length)
      fetchBody += `&intolerances=${intolerancesList
        .map((intolerance) => rigthType(intolerance))
        .join(",")}`;
    if (ingridientsSelector.ingridients.length)
      fetchBody += `&includeIngredients=${ingridientsSelector.ingridients
        .map((ingridient) => rigthType(ingridient))
        .join(",")}`;
    if (mealTypesSelector.mealType.length)
      fetchBody += `&type=${rigthType(mealTypesSelector.mealType)}`;
    fetchBody += `&number=10`;
    console.log(fetchBody);
    console.log(settings);
    // console.log(tempData);
    if (setClientSettings) {
      setClientSettings(settings);
      if (userAuth)
        newCrud.updateUserParam(createEmailForFB(userAuth), "settings", settings)
    }
    spoon(fetchBody).then((response) => {
      console.log("fetchRecipeList", response);
      setIsLoading(!isLoading);
      navigate("/recipebook/", { state: { recipeInfo: response } });
    })
  }
  return <button className="loginFormButton findRecipesButton" onClick={recipeRequestCreator}>{"Find recipes"}</button>;
};

import React, { FormEvent } from "react";
import { SetRecipeInfo, SettingType } from "../../types/types";
import { tempData } from "../../tempDataFromSpoon/dataFromSpoon";
import { ingridientsList } from "../../utils/ingridientsList";

type SettingParamType = { settings: SettingType, setRecipeInfo: SetRecipeInfo };

const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";

export const ViewRecipesButton = ({
  settings,
  setRecipeInfo
}: SettingParamType) => {
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
    fetchBody += `&number=30`;
    console.log(fetchBody);
    // console.log(tempData);
    setRecipeInfo(tempData)

    // fetchBody += `&instructionsRequired=true&addRecipeInformation=true`;

    // console.log(spoon(fetchBody));
  }
  return <button onClick={recipeRequestCreator}>{"View recipes -->"}</button>;
};

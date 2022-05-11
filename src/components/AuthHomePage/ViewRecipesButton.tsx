import React, { FormEvent } from "react";
import { spoon } from "../../spoon";
import { SettingType } from "../../types/types";
import { tempData } from "../../tempDataFromSpoon/dataFromSpoon";

type SettingParamType = { settings: SettingType };
const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";

export const ViewRecipesButton = ({
  settings,
  setDrawRecipeInfo
}: SettingParamType) => {
  function rigthType(string: string) {
    return string.toLocaleLowerCase().replace(" ", "20%");
  }
  function recipeRequestCreator(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    const { cuisinesList, dietSelector, intolerancesList } = settings;

    let fetchBody = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myKey}`;
    fetchBody += `&diet=${rigthType(dietSelector.diet)}`;
    if (cuisinesList.length)
      fetchBody += `&cuisine=${cuisinesList
        .map((cuisine) => rigthType(cuisine))
        .join(",")}`;
    if (intolerancesList.length)
      fetchBody += `&intolerances=${intolerancesList
        .map((intolerance) => rigthType(intolerance))
        .join(",")}`;
    fetchBody += `&number=30`;
    console.log(fetchBody);
    console.log(tempData);
    console.log(setDrawRecipeInfo);

    setDrawRecipeInfo(tempData);
    // fetchBody += `&instructionsRequired=true&addRecipeInformation=true`;

    // console.log(spoon(fetchBody));
  }
  return <button onClick={recipeRequestCreator}>{"View recipes -->"}</button>;
};

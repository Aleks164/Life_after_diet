import { SettingType } from "../types/types";
import { rigthTypeQueryString } from "./rigthTypeQueryString";

export function recipeRequestCreator(
  settings: SettingType,
  skipedPages?: number
) {
  const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";
  const {
    cuisinesList,
    dietSelector,
    intolerancesList,
    ingridientsSelector,
    mealTypesSelector,
    maxCaloriesInput
  } = settings;

  let queryString = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${myKey}`;
  if (dietSelector.diet.length)
    queryString += `&diet=${rigthTypeQueryString(dietSelector.diet)}`;
  if (cuisinesList.length)
    queryString += `&cuisine=${cuisinesList
      .map((cuisine) => rigthTypeQueryString(cuisine))
      .join(",")}`;
  if (intolerancesList.length)
    queryString += `&intolerances=${intolerancesList
      .map((intolerance) => rigthTypeQueryString(intolerance))
      .join(",")}`;
  if (ingridientsSelector.ingridients.length)
    queryString += `&includeIngredients=${ingridientsSelector.ingridients
      .map((ingridient) => rigthTypeQueryString(ingridient))
      .join(",")}`;
  if (mealTypesSelector.mealType.length)
    queryString += `&type=${rigthTypeQueryString(mealTypesSelector.mealType)}`;
  if (maxCaloriesInput.status)
    queryString += `&maxCalories=${maxCaloriesInput.value}`;
  if (skipedPages) queryString += `&offset=${skipedPages}`;
  queryString += `&number=10`;
  return queryString;
}

import { SettingType } from "@/types/types";
import { rigthTypeQueryString } from "./rigthTypeQueryString";

export function recipeRequestCreator(
  settings: SettingType,
  skipedPages?: number
) {
  const {
    cuisinesList,
    dietSelector,
    intolerancesList,
    ingridientsSelector,
    excludeIngridientsSelector,
    mealTypesSelector,
    maxCaloriesInput,
  } = settings;

  let queryString = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.SPOON_API_KEY}`;
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
  if (excludeIngridientsSelector.excludeIngridients.length)
    queryString += `&excludeIngredients=${excludeIngridientsSelector.excludeIngridients
      .map((excludeIngridients) => rigthTypeQueryString(excludeIngridients))
      .join(",")}`;
  if (mealTypesSelector.mealType.length)
    queryString += `&type=${rigthTypeQueryString(mealTypesSelector.mealType)}`;
  if (maxCaloriesInput.status)
    queryString += `&maxCalories=${maxCaloriesInput.value}`;
  if (skipedPages) queryString += `&offset=${skipedPages}`;
  queryString += `&number=10`;

  return queryString;
}

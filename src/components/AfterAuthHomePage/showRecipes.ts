import { ShowRecipesParamType } from "@/types/types";
import { getRecipeListFromAPi } from "@/utils/getRecipeListFromAPi";
import { recipeRequestCreator } from "@/utils/recipeRequestCreator";
import { RECIPES_PAGE_ROUTE } from "@/utils/routes";

export function showRecipes({
  setClientSettings,
  settings,
  setIsLoading,
  isLoading,
  navigate,
}: ShowRecipesParamType) {
  if (setClientSettings) setClientSettings(settings);

  setIsLoading(!isLoading);

  getRecipeListFromAPi(recipeRequestCreator(settings)).then((response) => {
    setIsLoading(!isLoading);
    navigate(RECIPES_PAGE_ROUTE, { state: { recipeInfo: response } });
  });
}

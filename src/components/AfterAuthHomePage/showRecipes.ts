import { ShowRecipesParamType } from "@/types/types";
import { requestRecipeListFromAPi } from "@/utils/requestRecipeListFromAPi";
import { recipeRequestCreator } from "@/utils/recipeRequestCreator";
import { HOME_PAGE_ROUTE, RECIPES_PAGE_ROUTE } from "@/utils/routes";

export function showRecipes({
  setClientSettings,
  settings,
  setIsLoading,
  isLoading,
  navigate,
}: ShowRecipesParamType) {
  if (setClientSettings) setClientSettings(settings);

  setIsLoading(!isLoading);

  requestRecipeListFromAPi(recipeRequestCreator(settings))
    .then((response) => {
      setIsLoading(!isLoading);
      navigate(RECIPES_PAGE_ROUTE, { state: { recipeInfo: response } });
    })
    .catch(() => {
      navigate(HOME_PAGE_ROUTE);
    });
}

import { ShowRecipesParamType } from "@/types/types";
import { requestRecipeListFromAPi } from "@/utils/requestRecipeListFromAPi";
import { recipeRequestCreator } from "@/utils/recipeRequestCreator";
import { RoutesName } from "@/utils/routes";

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
      navigate(RoutesName.RECIPES_PAGE_ROUTE, {
        state: { recipeInfo: response },
      });
    })
    .catch(() => {
      navigate(RoutesName.HOME_PAGE_ROUTE);
    });
}

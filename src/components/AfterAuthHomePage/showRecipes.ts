import { ShowRecipesParamType } from "@/types/types";
import { requestRecipeListFromAPi } from "@/utils/requestRecipeListFromAPi";
import { recipeRequestCreator } from "@/utils/recipeRequestCreator";
import { RoutesName } from "@/utils/routes";

export async function showRecipes({
  setClientSettings,
  settings,
  setIsLoading,
  navigate,
}: ShowRecipesParamType) {
  return new Promise<void>((resolve) => {
    if (setClientSettings) setClientSettings(settings);

    setIsLoading(true);

    requestRecipeListFromAPi(recipeRequestCreator(settings))
      .then((response) => {
        setIsLoading(false);
        navigate(RoutesName.RECIPES_PAGE_ROUTE, {
          state: { recipeInfo: response },
        });
      })
      .catch(() => {
        navigate(RoutesName.HOME_PAGE_ROUTE);
      });
    resolve();
  });
}

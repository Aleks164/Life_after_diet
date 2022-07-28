import { RoutesName } from "../../../utils/routes";
import { requestRecipeListFromAPi } from "../../../utils/requestRecipeListFromAPi";
import { recipeRequestCreator } from "../../../utils/recipeRequestCreator";
import { FlipPageParamType } from "../../../types/types";

export async function flipRecipePage(
  skipedPages: number,
  { сlientSettings, navigate, setPageNumber, pageNumber }: FlipPageParamType
) {
  return new Promise<void>((resolve) => {
    const resultNumberPage = pageNumber + skipedPages;
    requestRecipeListFromAPi(
      recipeRequestCreator(сlientSettings, resultNumberPage)
    )
      .then((response) => {
        navigate(RoutesName.RECIPES_PAGE_ROUTE, {
          state: { recipeInfo: response },
        });
      })
      .catch(() => {
        navigate(RoutesName.HOME_PAGE_ROUTE);
      });
    setPageNumber(resultNumberPage);
    resolve();
  });
}

import { HOME_PAGE_ROUTE, RECIPES_PAGE_ROUTE } from "../../../utils/routes";
import { getRecipeListFromAPi } from "../../../utils/getRecipeListFromAPi";
import { recipeRequestCreator } from "../../../utils/recipeRequestCreator";
import { FlipPageParamType } from "../../../types/types";

export function flipRecipePage(
  skipedPages: number,
  { сlientSettings, navigate, setPageNumber, pageNumber }: FlipPageParamType
) {
  const resultNumberPage = pageNumber + skipedPages;
  getRecipeListFromAPi(recipeRequestCreator(сlientSettings, resultNumberPage))
    .then((response) => {
      navigate(RECIPES_PAGE_ROUTE, { state: { recipeInfo: response } });
    })
    .catch(() => {
      navigate(HOME_PAGE_ROUTE);
    });
  setPageNumber(resultNumberPage);
}

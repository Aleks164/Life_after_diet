import React from "react";
import { PageNavigationParamType } from "../../../types/types";
import { flipRecipePage } from "./flipRecipePage";

export const RecipesPageNavigationArrows = ({
  pageNumber,
  flipPageParam,
  recipeInfoLength,
}: PageNavigationParamType) => (
  <>
    <div
      hidden={pageNumber < 9}
      onClick={async () => {
        await flipRecipePage(-10, flipPageParam);
      }}
      className="backToListButton backButton"
    ></div>
    <div
      hidden={pageNumber < 9}
      className="backToListButtonBorder backButton"
    ></div>
    <div
      hidden={recipeInfoLength < 10}
      onClick={async () => {
        await flipRecipePage(10, flipPageParam);
      }}
      className="backToListButton forwardButton"
    ></div>
    <div
      hidden={recipeInfoLength < 10}
      className="backToListButtonBorder forwardButton"
    ></div>
  </>
);

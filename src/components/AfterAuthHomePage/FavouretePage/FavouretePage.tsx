import React from "react";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { HistoryFavouriteType } from "../../../types/types";
import { RecipeList } from "../RecipesListPage/RecipeList";

export const FavouretePage = () => {
  const { сlientFavourite } = useClientSettings();
  let arrayWithFavouriteItem: HistoryFavouriteType = [];

  if (Object.keys(сlientFavourite).length) {
    arrayWithFavouriteItem = Object.values(сlientFavourite);
  }

  return (
    <RecipeList
      pageNumber={0}
      setPageNumber={() => false}
      recipeInfo={arrayWithFavouriteItem}
    />
  );
};

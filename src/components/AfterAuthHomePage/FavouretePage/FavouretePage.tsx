import React from "react";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { HistoryFavouriteType } from "../../../types/types";
import { RecipeList } from "../RecipesListPage/RecipeList";

export const FavouretePage = () => {
  const { сlientFavourite } = useClientSettings();
  let arrayWithFavouriteItem: HistoryFavouriteType = [];

  if (Object.keys(сlientFavourite).length) {
    arrayWithFavouriteItem = Object.values(сlientFavourite).sort((a, b) => (b.data || 0) - (a.data || 0));
  }

  return <RecipeList pageNumber={0}
    setPageNumber={() => false} recipeInfo={arrayWithFavouriteItem} />;
};

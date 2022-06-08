import React from "react";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { HistoryFavouriteType } from "../../../types/types";
import { RecipeList } from "../RecipesListPage/RecipeList";

export const HistoryPage = () => {
  const { сlientHistory } = useClientSettings();
  let arrayWithHistoryItem: HistoryFavouriteType = [];

  if (Object.keys(сlientHistory).length) {
    arrayWithHistoryItem = Object.values(сlientHistory).sort((a, b) => (b.data || 0) - (a.data || 0));
  }

  return <RecipeList pageNumber={0}
    setPageNumber={() => false} recipeInfo={arrayWithHistoryItem} />;
};

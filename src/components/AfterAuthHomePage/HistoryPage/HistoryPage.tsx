import React from "react";
import { useClientSettings } from "@/hooks/useClientSettings";
import { HistoryFavouriteType } from "@/types/types";
import { RecipeList } from "../RecipesListPage/RecipeList";

export const HistoryPage = () => {
  const { сlientHistory } = useClientSettings();
  let arrayWithHistoryItem: HistoryFavouriteType = [];

  if (Object.keys(сlientHistory).length) {
    arrayWithHistoryItem = Object.values(сlientHistory).sort(
      (a, b) => (b.date || 0) - (a.date || 0)
    );
  }
  return (
    <RecipeList
      pageNumber={0}
      setPageNumber={() => false}
      recipeInfo={arrayWithHistoryItem}
    />
  );
};

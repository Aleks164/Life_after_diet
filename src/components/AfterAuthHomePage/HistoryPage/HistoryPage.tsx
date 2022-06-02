import React from "react";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeList } from "../RecipesListPage/RecipeList";

export const HistoryPage = () => {
  const { сlientHistory } = useClientSettings();

  const arrayWithHistoryItem = Object.values(сlientHistory).reverse();

  return <RecipeList recipeInfo={arrayWithHistoryItem} />;
};

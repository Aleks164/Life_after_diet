import React from "react";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeList } from "../RecipesListPage/RecipeList";

export const FavouretePage = () => {
  const { сlientFavourite } = useClientSettings();

  return <RecipeList recipeInfo={сlientFavourite} />;
};

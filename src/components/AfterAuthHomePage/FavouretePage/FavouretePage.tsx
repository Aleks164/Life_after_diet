import React from "react";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeList } from "../RecipesListPage/RecipeList";

export const FavouretePage = () => {
  const { сlientFavourite } = useClientSettings();

  const arrayWithFavouriteItem = Object.values(сlientFavourite).reverse();

  return <RecipeList recipeInfo={arrayWithFavouriteItem} />;
};

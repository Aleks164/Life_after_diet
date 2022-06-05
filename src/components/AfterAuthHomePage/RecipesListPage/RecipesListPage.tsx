/* eslint-disable arrow-body-style */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RecipeItemType } from "../../../types/types";
import { RecipeList } from "./RecipeList";

interface Location {
  state: { recipeInfo: { results: RecipeItemType[] } };
}

export const RecipesListPage = () => {
  const location = useLocation();
  const recipeInfo = (location as Location).state?.recipeInfo.results;
  if (!recipeInfo) return <Navigate to="/" />;
  return <RecipeList recipeInfo={recipeInfo} />;
};

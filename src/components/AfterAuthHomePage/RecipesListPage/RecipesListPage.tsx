/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RecipeItemType } from "../../../types/types";
import { RecipeList } from "./RecipeList";

interface Location {
  state: { recipeInfo: { results: RecipeItemType[] } };
}

export const RecipesListPage = () => {
  const location = useLocation();
  const localRecipeInfo = (location as Location).state?.recipeInfo.results;
  const [recipeInfo, setRecipeInfo] = useState(localRecipeInfo);
  const [pageNumber, setPageNumber] = useState(0);
  if (!localRecipeInfo) return <Navigate to="/" />;
  return (
    <RecipeList
      recipeInfo={recipeInfo}
      setRecipeInfo={setRecipeInfo}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
    />
  );
};

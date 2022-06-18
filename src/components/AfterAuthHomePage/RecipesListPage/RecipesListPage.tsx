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
  let recipeInfo = (location as Location).state?.recipeInfo.results;
  const [pageNumber, setPageNumber] = useState(0);
  if (!recipeInfo) recipeInfo = [];
  return (
    <RecipeList
      recipeInfo={recipeInfo}
      pageNumber={pageNumber}
      setPageNumber={setPageNumber}
    />
  );
};

import React from "react";
import { Navigate } from "react-router-dom";
import { HOME_PAGE_ROUTE } from "./routes";

export async function getRecipeListFromAPi(queryString: string) {
  const options = {
    method: "GET",
    headers: {}
  };

  try {
    const response = await window.fetch(queryString, options);
    const recipeList = await response.json();
    return recipeList;
  } catch (e) {
    console.error(e);
    return <Navigate to={HOME_PAGE_ROUTE} />;
  }
}
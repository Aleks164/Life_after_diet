import React from "react";
import { Navigate } from "react-router-dom";
import { HOMEPAGE_ROUTE } from "./routes";

export async function getRecipeById(id: string) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const myKey = "2adf7e0ce3d8428f953f022f9543bb6f";
  const fetchBody = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${myKey}`;

  try {
    const response = await window.fetch(fetchBody, options);
    const recipe = await response.json();
    return recipe;
  } catch (e) {
    return <Navigate to={HOMEPAGE_ROUTE} />;
  }
}

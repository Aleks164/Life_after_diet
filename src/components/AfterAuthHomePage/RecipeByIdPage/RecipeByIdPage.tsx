import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { RecipeResponsType } from "../../../information";
import { isLoadingType } from "../../../types/types";
import { LoadingPage } from "../LoadingPage/LoadinfPage";
import { RecipePage } from "./RecipePage";

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
    return <Navigate to="/" />;
  }
}

export const RecipeByIdPage = () => {
  const [recipe, setRecipe] = useState({} as RecipeResponsType);
  const [isLoading, setIsLoading] = useState<isLoadingType>(true);
  const { id } = useParams();
  useEffect(() => {
    if (id)
      getRecipeById(id).then((response) => {
        setRecipe(response);
        setTimeout(() => {
          setIsLoading(!isLoading);
        }, 500);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loadingPage">
          <LoadingPage />
        </div>
      ) : (
        <RecipePage recipe={recipe} />
      )}
    </>
  );
};

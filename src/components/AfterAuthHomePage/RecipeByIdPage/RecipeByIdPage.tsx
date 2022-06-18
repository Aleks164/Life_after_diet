import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeResponsType } from "../../../information";
import { isLoadingType } from "../../../types/types";
import { LoadingPage } from "../LoadingPage/LoadinfPage";
import { RecipePage } from "./RecipePage";
import { getRecipeById } from "../../../utils/getRecipeById";

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

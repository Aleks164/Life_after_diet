import React, { useEffect, useState } from "react";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeListProps } from "../../../types/types";
import { RecipeItem } from "./RecipeItem";
import { HaveChosenInfo } from "./HaveChosenInfo";
import { SorryUnfoundPage } from "./SorryUnfoundPage";
import { LoadingPage } from "../LoadingPage/LoadinfPage";

export const RecipeList = ({ recipeInfo }: RecipeListProps) => {
  const { сlientSettings } = useClientSettings();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <div className="homePage">
      <HaveChosenInfo сlientSettings={сlientSettings} />
      <h3 className="markbooks recipeBook">Recipe book</h3>
      {isLoading ? (
        <>
          {recipeInfo.length ? (
            <div className="recipeConteiner">
              {recipeInfo.map((recipe) => (
                <RecipeItem
                  key={recipe.id.toString()}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                />
              ))}
            </div>
          ) : (
            <div className="recipeConteiner">
              <SorryUnfoundPage />
            </div>
          )}
        </>
      ) : (
        <div className="loadingPage">
          <LoadingPage />
        </div>
      )}
    </div>
  );
};

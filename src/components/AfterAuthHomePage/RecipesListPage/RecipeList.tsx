import React from "react";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeListProps } from "../../../types/types";
import { RecipeItem } from "./RecipeItem";
import { HaveChosenInfo } from "./HaveChosenInfo";
import { SorryUnfoundPage } from "./SorryUnfoundPage";

export const RecipeList = ({ recipeInfo }: RecipeListProps) => {
  const { сlientSettings } = useClientSettings();

  return (
    <div className="homePage">
      <HaveChosenInfo сlientSettings={сlientSettings} />
      <h3 className="markbooks recipeBook">Recipe book</h3>
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
    </div>
  );
};

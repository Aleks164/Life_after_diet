import React from "react";
import { RecipeItemType } from "@/types/types";
import { RecipeItem } from "./RecipeItem";

export const RecipesConteiner = ({
  recipeInfo,
}: {
  recipeInfo: RecipeItemType[];
}) => (
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
);

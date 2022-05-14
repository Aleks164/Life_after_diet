import React from "react";
import { RecipeItemType } from "../../types/types";
import { RecipeItem } from "./RecipeItem";

type RecipeListProps = { recipeInfo: RecipeItemType[] }

export const RecipeList = ({ recipeInfo }: RecipeListProps) => (
  <div className="recipeList">
    <div className="recipeConteiner">
      {recipeInfo.map((el) => (
        <RecipeItem
          key={el.id.toString()}
          id={el.id}
          title={el.title}
          image={el.image}
        />
      ))}
    </div>
  </div>
);

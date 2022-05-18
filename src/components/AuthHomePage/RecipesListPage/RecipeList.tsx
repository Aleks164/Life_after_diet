import React from "react";
import { RecipeListProps } from "../../../types/types";
import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ recipeInfo }: RecipeListProps) => (
  <div className="homePage">
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

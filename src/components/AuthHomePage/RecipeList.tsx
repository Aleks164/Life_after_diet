import React from "react";
import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ drawRecipeInfo }) => (
  <div className="recipeList">
    <div className="recipeConteiner">
      {drawRecipeInfo.map((el) => (
        <RecipeItem
          key={el.id.toString()}
          title={el.title}
          image={el.image}
        />
      ))}
    </div>
  </div>
);

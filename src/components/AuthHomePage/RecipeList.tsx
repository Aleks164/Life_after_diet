import React from "react";
import { RecipeItem } from "./RecipeItem";
import { tempData } from "../../tempDataFromSpoon/dataFromSpoon";
import { DietResponsType } from "../../types/types";

export const RecipeList = () => (
  <div className="recipeList">
    <div className="recipeConteiner">
      {tempData.map((el) => (
        <RecipeItem
          key={el.id.toString()}
          title={el.title}
          image={el.image}
        />
      ))}
    </div>
  </div>
);

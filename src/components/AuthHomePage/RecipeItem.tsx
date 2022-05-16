import React from "react";
import { RecipeItemPropsType } from "../../types/types";

export const RecipeItem = ({ title, image, id }: RecipeItemPropsType) => {
  function findById() {
    console.log(id);
  }
  return (
    <div className="recipeItem">
      <button onClick={findById}>Show this recip</button>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

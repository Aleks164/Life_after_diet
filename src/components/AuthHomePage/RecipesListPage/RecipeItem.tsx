import React from "react";
import { useNavigate } from "react-router-dom";
import { RecipeItemPropsType } from "../../../types/types";

export const RecipeItem = ({ title, image, id }: RecipeItemPropsType) => {
  const navigate = useNavigate();

  function findById() {
    const redirectTo = `/recipe/${id}`;
    navigate(redirectTo);
  }
  return (
    <div className="recipeItem">
      <button onClick={findById}>Show this recipe</button>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};
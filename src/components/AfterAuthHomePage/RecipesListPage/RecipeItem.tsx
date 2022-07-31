import React from "react";
import { useNavigate } from "react-router-dom";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeItemPropsType } from "../../../types/types";
import { saveHistory } from "./saveHistory";

export const RecipeItem = ({ title, image, id }: RecipeItemPropsType) => {
  const navigate = useNavigate();
  const { сlientHistory, setClientHistory } = useClientSettings();
  const redirectTo = `/Life_after_diet/recipe/${id}`;
  const redirectParam = {
    title,
    image,
    id,
    сlientHistory,
    setClientHistory,
  };

  return (
    <div className="recipeItem">
      <button
        onClick={() => {
          saveHistory(redirectParam);
          navigate(redirectTo);
        }}
      >
        <p className="showTextInButton">Show this recipe</p>
      </button>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

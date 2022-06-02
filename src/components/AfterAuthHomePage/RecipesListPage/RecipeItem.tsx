import React from "react";
import { useNavigate } from "react-router-dom";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { RecipeItemPropsType } from "../../../types/types";

export const RecipeItem = ({ title, image, id }: RecipeItemPropsType) => {
  const navigate = useNavigate();
  const { сlientHistory, setClientHistory } = useClientSettings();

  function findById() {
    const redirectTo = `/recipe/${id}`;
    const newHistory = { ...сlientHistory, [id]: { title, image, id } };

    if (setClientHistory) setClientHistory(newHistory);
    navigate(redirectTo);
  }
  return (
    <div className="recipeItem">
      <button onClick={findById}>
        <p className="showTextInButton">Show this recipe</p>
      </button>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

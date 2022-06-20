import React from "react";
import { useNavigate } from "react-router-dom";
import { useClientSettings } from "@/hooks/useClientSettings";
import { RecipeItemPropsType } from "@/types/types";
import { saveHistoryandRedirect } from "./saveHistoryandRedirect";

export const RecipeItem = ({ title, image, id }: RecipeItemPropsType) => {
  const navigate = useNavigate();
  const { сlientHistory, setClientHistory } = useClientSettings();
  const redirectParam = {
    title,
    image,
    id,
    сlientHistory,
    setClientHistory,
    navigate,
  };

  return (
    <div className="recipeItem">
      <button
        onClick={() => {
          saveHistoryandRedirect(redirectParam);
        }}
      >
        <p className="showTextInButton">Show this recipe</p>
      </button>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
};

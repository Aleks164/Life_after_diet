import React from "react";
import { useNavigate } from "react-router-dom";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { FBInterface } from "../../../firebase_init/FBInterface";
import { useAuth } from "../../../hooks/useAuth";
import { RecipeItemPropsType } from "../../../types/types";

export const RecipeItem = ({ title, image, id }: RecipeItemPropsType) => {
  const navigate = useNavigate();
  const {
    setClientSettings,
    сlientHistory,
    setClientHistory,
    сlientFavourite,
    setClientFavourite
  } = useClientSettings();

  const newCrud = new FBInterface();
  const userAuth = useAuth().user;
  function findById() {
    const redirectTo = `/recipe/${id}`;
    const newHistoryItem = { title, image, id };
    newCrud
      .updateUserParam(userAuth, "history", сlientHistory.push(newHistoryItem))
      .then(() => {
        setClientHistory(newHistoryItem);
      })
      .catch((e: Error) => {
        console.log(e);
        setClientHistory(newHistoryItem);
      });
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

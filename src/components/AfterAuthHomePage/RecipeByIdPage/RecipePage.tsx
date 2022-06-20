import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeType } from "@/types/types";
import { RecipeCart } from "./RecipeCart";
import { RecipeInstruction } from "./RecipeInstruction";
import { useClientSettings } from "@/hooks/useClientSettings";
import { Icons } from "./Icons";
import { changeFavouriteStatus } from "./changeFavouriteStatus";
import "./RecipePageStyles.css";

export const RecipePage = ({ recipe }: RecipeType) => {
  const { сlientFavourite, setClientFavourite } = useClientSettings();
  const navigate = useNavigate();
  const arrayOfFavouriteId = Object.keys(сlientFavourite);
  const fafouritCheck = arrayOfFavouriteId.some(
    (favourite) => +favourite === recipe.id
  );
  const [curMarkbook, setCurMarkbook] = useState("Description");
  const [isItInFafouritList, setIsItInFafouritList] = useState(fafouritCheck);
  const fafouriteParams = {
    сlientFavourite,
    setClientFavourite,
    recipe,
    isItInFafouritList,
    setIsItInFafouritList,
  };

  return (
    <div className="ricipe">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="backToListButton backButtonArea"
      ></div>
      <div className="backToListButtonBorder backButtonArea"></div>
      <h2 className="recipeTitle">{recipe.title}</h2>
      <div className="recipePageMarkbooks">
        <button
          className={curMarkbook === "Description" ? "activeButton" : ""}
          disabled={curMarkbook === "Description"}
          onClick={() => setCurMarkbook("Description")}
        >
          Description
        </button>
        <button
          className={curMarkbook === "Instruction" ? "activeButton" : ""}
          disabled={curMarkbook === "Instruction"}
          onClick={() => setCurMarkbook("Instruction")}
        >
          Recipe
        </button>
      </div>
      <div className="recipeTemplate">
        <img className="recipeImage" src={recipe.image} alt="recipe" />
        <div
          onClick={() => changeFavouriteStatus(fafouriteParams)}
          title="Add to favourite"
          className={isItInFafouritList ? "favouriteStar" : "starStyles"}
        ></div>
        <Icons diets={recipe.diets} veryHealthy={recipe.veryHealthy} />
        {curMarkbook === "Description" ? <RecipeCart recipe={recipe} /> : ""}
        {curMarkbook === "Instruction" ? (
          <RecipeInstruction recipe={recipe} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { RecipeType } from "../../../types/types";
import { RecipeCart } from "./RecipeCart";
import { RecipeInstruction } from "./RecipeInstruction";
import { useClientSettings } from "../../../hooks/useClientSettings";
import { Icons } from "./Icons";
import { changeFavouriteStatus } from "./changeFavouriteStatus";
import "./RecipePageStyles.css";

export const RecipePage = ({ recipe }: RecipeType) => {
  const [curMarkbook, setCurMarkbook] = useState("Description");
  const { сlientFavourite, setClientFavourite } = useClientSettings();
  const arrayOfFavouriteId = Object.keys(сlientFavourite);
  const isItInFafouritList = arrayOfFavouriteId.some(
    (favourite) => +favourite === recipe.id
  );
  console.log("сlientFavourite", сlientFavourite);
  const fafouriteParams = {
    сlientFavourite,
    setClientFavourite,
    recipe,
    isItInFafouritList
  };

  return (
    <div className="ricipe">
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
          className={
            isItInFafouritList ? "starStyles" : "favouriteStar"
          }
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

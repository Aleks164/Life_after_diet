import React from "react";
import { RecipeType } from "../../../types/types";

export const GeneralInfo = ({ recipe }: RecipeType) => {
  const calories = recipe.summary.match(/(\d+) calories/gi);
  return (
    <div className="generalInfo">
      <div className="baseInfo">
        {recipe.cookingMinutes > 0 ? (
          <p>Cooking time : {recipe.cookingMinutes} minutes</p>
        ) : null}
        {recipe.preparationMinutes > 0 ? (
          <p>Preparation time : {recipe.preparationMinutes} minutes</p>
        ) : null}
        {recipe.healthScore ? <p>HealthScore : {recipe.healthScore}</p> : null}
        {recipe.servings ? <p>Servings for {recipe.servings} person</p> : null}
        {calories ? <p>Calories: {calories[0]} per serving.</p> : null}
        {recipe.sourceUrl ? (
          <a target={"_blank"} href={recipe.sourceUrl}>
            Source of this recipe
          </a>
        ) : null}
      </div>
      {recipe.dishTypes.length ? (
        <div className="dishTypes">
          <p>
            Dish types:
            {recipe.dishTypes.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </p>
        </div>
      ) : null}
      {recipe.cuisines.length ? (
        <div className="cusines">
          <p>
            Cusines{" "}
            {recipe.cuisines.map((cuisine, index) => (
              <li key={index}>{cuisine}</li>
            ))}
          </p>
        </div>
      ) : null}
    </div>
  );
};

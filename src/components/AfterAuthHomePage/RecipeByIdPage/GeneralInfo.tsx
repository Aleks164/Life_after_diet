import React from "react";
import { RecipeType } from "../../../types/types";

export const GeneralInfo = ({ recipe }: RecipeType) => {
    const calories = recipe.summary.match(/(\d+) calories/ig);
    return (

        <div className="generalInfo">
            <div className="baseInfo">
                {recipe.cookingMinutes > 0 ? <p>Cooking time : {recipe.cookingMinutes} minutes</p> : ""}
                {recipe.preparationMinutes > 0 ? <p>Preparation time : {recipe.preparationMinutes} minutes</p> : ""}
                {recipe.healthScore ? <p>HealthScore : {recipe.healthScore}</p> : ""}
                {recipe.servings ? <p>Servings for {recipe.servings} person</p> : ""}
                {calories ? <p>Calories: {calories[0]} per serving.</p> : ""}
                {recipe.sourceUrl ? <a target={'_blank'} href={recipe.sourceUrl}>Source of this recipe</a> : ""}
            </div>
            {recipe.dishTypes.length ? <div className="dishTypes"><p>Dish types:{recipe.dishTypes.map((dish, index) => <li key={index}>{dish}</li>)}</p></div> : ""}
            {recipe.cuisines.length ? (<div className="cusines"><p>Cusines {recipe.cuisines.map((cuisine, index) => <li key={index}>{cuisine}</li>)}</p>
            </div>) : ""}
        </div>)
}
import React from "react";
import { RecipeType } from "../../../types/types";

export const GeneralInfo = ({ recipe }: RecipeType) => (

    <div className="generalInfo">
        <div className="baseInfo"><p>Cooking time : {recipe.cookingMinutes} minutes</p>
            <p>Preparation time : {recipe.preparationMinutes} minutes</p>
            <p>HealthScore : {recipe.healthScore}</p>
            <p>Servings for {recipe.servings} person</p>
            <a target={'_blank'} href={recipe.sourceUrl}>Source of this recipe</a>
        </div>
        <div className="dishTypes"><p>Dish types:{recipe.dishTypes.map((dish, index) => <li key={index}>{dish}</li>)}</p></div>
        {recipe.cuisines.length ? (<div className="cusines"><p>Cusines {recipe.cuisines.map((cuisine, index) => <li key={index}>{cuisine}</li>)}</p>
        </div>) : ""}
    </div>)
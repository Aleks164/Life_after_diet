import React from "react";
import { Link } from "react-router-dom";
import { RecipeType } from "../../../types/types";

export const GeneralInfo = ({ recipe }: RecipeType) => (

    <div className="generalInfo">
        <p>Ready in {recipe.readyInMinutes} minutes</p>
        <p>HealthScore :{recipe.healthScore}</p>
        <p>Servings for {recipe.servings} person</p>
        <Link to={recipe.sourceUrl}>Source of this recipe</Link>
        <p>Dish types:{recipe.dishTypes.map((dish, index) => <li key={index}>{dish}</li>)}</p>
        <p>Cusines {recipe.cuisines.map((cuisine, index) => <li key={index}>{cuisine}</li>)}</p>

    </div>)
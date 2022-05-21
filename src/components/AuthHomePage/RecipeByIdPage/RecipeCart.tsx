import React from "react";
import { RecipeType } from "../../../types/types";
import { GeneralInfo } from "./GeneralInfo";
import { Icons } from "./Icons";
import { SummaryText } from "./SummaryText";


export const RecipeCart = ({ recipe }: RecipeType) => (
    <div className="recipeCart">
        <img className="recipeImage" src={recipe.image} alt="recipe photo" />
        <GeneralInfo recipe={recipe} />
        <Icons diets={recipe.diets} veryHealthy={recipe.veryHealthy} />
        <SummaryText summary={recipe.summary} />
    </div>)
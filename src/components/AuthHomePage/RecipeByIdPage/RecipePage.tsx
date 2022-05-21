import React from "react";
import { RecipeType } from "../../../types/types";
import { RecipeCart } from "./RecipeCart";
import { RecipeInstruction } from "./RecipeInstruction";
import "./index.css";

export const RecipePage = ({ recipe }: RecipeType) => (
    <div className="ricipe">
        <h2 className="recipeTitle">{recipe.title}</h2>
        {/* (<RecipeCart recipe={recipe} />) */}
        <RecipeInstruction recipe={recipe} />
    </div>
)

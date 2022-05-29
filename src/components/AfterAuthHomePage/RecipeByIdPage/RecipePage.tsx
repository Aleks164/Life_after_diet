import React, { useState } from "react";
import { RecipeType } from "../../../types/types";
import { RecipeCart } from "./RecipeCart";
import { RecipeInstruction } from "./RecipeInstruction";
import { Icons } from "./Icons";
import "./RecipePageStyles.css";

export const RecipePage = ({ recipe }: RecipeType) => {
    const [curMarkbook, setCurMarkbook] = useState("Description");
    return (
        <div className="ricipe">
            <h2 className="recipeTitle">{recipe.title}</h2>
            <div className="recipePageMarkbooks"><button className={curMarkbook === "Description" ? "activeButton" : ""} disabled={curMarkbook === "Description"} onClick={() => setCurMarkbook("Description")} >Description</button><button className={curMarkbook === "Instruction" ? "activeButton" : ""} disabled={curMarkbook === "Instruction"} onClick={() => setCurMarkbook("Instruction")} >Recipe</button></div>
            <div className="recipeTemplate">
                <img className="recipeImage" src={recipe.image} alt="recipe photo" />
                <Icons diets={recipe.diets} veryHealthy={recipe.veryHealthy} />
                {curMarkbook === "Description" ? (<RecipeCart recipe={recipe} />) : ""}
                {curMarkbook === "Instruction" ? (<RecipeInstruction recipe={recipe} />) : ""}
            </div>
        </div>
    )
}

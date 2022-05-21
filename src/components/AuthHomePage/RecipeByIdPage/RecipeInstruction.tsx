import React from "react";
import { RecipeType } from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";

export const RecipeInstruction = ({ recipe }: RecipeType) => (
    <div className="instruction"><h3>Instruction</h3>
        <p>{recipe.instructions}</p>
        <h3>Steps</h3>
        <ol>{recipe.analyzedInstructions[0].steps.map((step) => (<><div key={step.number}><li>{step.step}</li></div><ol>{step.ingredients.map((ingridient) => <li key={ingridient.name}>{ingridient.name}</li>)}</ol></>))}</ol>
    </div>

);
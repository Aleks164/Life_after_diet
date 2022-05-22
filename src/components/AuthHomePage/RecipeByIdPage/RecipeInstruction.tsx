import React, { useState } from "react";
import { RecipeType } from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";

export const RecipeInstruction = ({ recipe }: RecipeType) => {
    const [instructionType, setInstructionType] = useState("instruction");

    return (
        <div className="instructions">
            <div className="instructionButtons"><button onClick={() => setInstructionType("instruction")} >Instruction</button><button onClick={() => setInstructionType("steps")} >Steps</button><button onClick={() => setInstructionType("ingredientsPreparing ")} >Preparing ingredients</button></div>
            {instructionType === "instruction" ? (<><h3>Instruction</h3>
                <p>{recipe.instructions}</p></>) : ""}
            {instructionType === "steps" ?
                (<><h3>Instruction in steps</h3>
                    <ol>{recipe.analyzedInstructions[0].steps.map((step) => (<><div key={step.number}><li><p>{step.step}</p>{step.length ? <p className="stepDuration">{step.length.number} min</p> : ""}</li></div><ol className="stepIngrList">{step.ingredients.map((ingridient) => <li key={ingridient.id}>{ingridient.name}</li>)}<hr /></ol></>))}</ol>
                </>) : ""}
            {instructionType === "ingredientsPreparing " ?
                <><h3>Preparing ingredients</h3><div>{recipe.extendedIngredients.map((item) => <><li key={item.id} >{item.name} <p>{item.original}</p><p>amount {item.amount} {item.unit}</p></li><hr /></>)}</div></> : ""}
        </div>
    )
};
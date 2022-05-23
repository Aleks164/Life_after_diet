import React, { useState } from "react";
import { RecipeType } from "../../../types/types";

export const RecipeInstruction = ({ recipe }: RecipeType) => {
    const [instructionType, setInstructionType] = useState("instruction");
    const [hideList, setHideList] = useState(true);

    return (
        <div className="instructions">
            <div className="instructionButtons"><button disabled={instructionType === "instruction"} onClick={() => setInstructionType("instruction")} >Instruction</button><button disabled={instructionType === "preparation"} onClick={() => setInstructionType("preparation")} >Steps</button><button disabled={instructionType === "ingredients"} onClick={() => setInstructionType("ingredients")}>Preparing ingredients</button></div>
            {instructionType === "instruction" ? (<><h3>Instruction</h3><hr />
                <p>{recipe.instructions}</p></>) : ""}
            {instructionType === "preparation" ?
                (<><h3>Preparation</h3><hr />
                    <p onClick={() => { setHideList(!hideList) }} >Ingridients <p style={{ color: hideList ? "red" : "green" }}>{hideList ? "V" : "Ʌ"}</p></p>
                    <ol>{recipe.analyzedInstructions[0].steps.map((step) => (<><div key={step.number}><li><p>{step.step}</p>{step.length ? <p className="stepDuration">{step.length.number} min</p> : ""}</li></div><ol hidden={hideList} className="stepIngrList">{step.ingredients.map((ingridient) => <li key={ingridient.id}>{ingridient.name}</li>)}</ol><hr /></>))}</ol>
                </>) : ""}
            {instructionType === "ingredients" ?
                <><h3>Ingredients</h3><hr /><div>{recipe.extendedIngredients.map((item) => <><li key={item.id} >{item.original}</li><hr /></>)}</div></> : ""}
        </div>
    )
};
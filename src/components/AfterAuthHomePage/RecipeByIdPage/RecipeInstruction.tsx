import React, { useState } from "react";
import { RecipeType } from "../../../types/types";

export const RecipeInstruction = ({ recipe }: RecipeType) => {
  const [instructionType, setInstructionType] = useState("instruction");
  const [hideList, setHideList] = useState(true);
  const instructions = { __html: recipe.instructions };

  const sorryText = (
    <p>Sorry, but instruction for this recipe don't wrote yet</p>
  );

  return (
    <div className="instructions">
      <div className="instructionButtons">
        <button
          className={instructionType === "instruction" ? "activeButton" : ""}
          disabled={instructionType === "instruction"}
          onClick={() => setInstructionType("instruction")}
        >
          Instruction
        </button>
        <button
          className={instructionType === "preparation" ? "activeButton" : ""}
          disabled={instructionType === "preparation"}
          onClick={() => setInstructionType("preparation")}
        >
          Steps
        </button>
        <button
          className={instructionType === "ingredients" ? "activeButton" : ""}
          disabled={instructionType === "ingredients"}
          onClick={() => setInstructionType("ingredients")}
        >
          Preparing ingredients
        </button>
      </div>
      {instructionType === "instruction" ? (
        <>
          <h3>Instruction</h3>
          <hr />
          {recipe.instructions !== null ? (
            <p dangerouslySetInnerHTML={instructions}></p>
          ) : (
            sorryText
          )}
        </>
      ) : (
        ""
      )}
      {instructionType === "preparation" ? (
        <>
          <h3>Preparation</h3>
          <p
            className="showIngridients"
            onClick={() => {
              setHideList(!hideList);
            }}
          >
            {hideList ? "Show" : "Hide"} ingridients
          </p>
          <hr />
          <ol>
            {recipe.analyzedInstructions.length > 0
              ? recipe.analyzedInstructions[0].steps.map((step) => (
                  <>
                    <div key={step.number}>
                      <li>
                        {step.length ? (
                          <p className="stepDuration">
                            {step.length.number} min
                          </p>
                        ) : (
                          ""
                        )}
                        <p>{step.step}</p>
                      </li>
                      <ol hidden={hideList} className="stepIngrList">
                        {step.ingredients.map((ingridient) => (
                          <li key={ingridient.id}>{ingridient.name}</li>
                        ))}
                      </ol>
                      <hr />
                    </div>
                  </>
                ))
              : sorryText}
          </ol>
        </>
      ) : (
        ""
      )}
      {instructionType === "ingredients" ? (
        <>
          <h3>Ingredients</h3>
          <hr />
          {recipe.extendedIngredients.length > 0 ? (
            <div>
              {recipe.extendedIngredients.map((item) => (
                <>
                  <li key={item.id}>{item.original}</li>
                  <hr />
                </>
              ))}
            </div>
          ) : (
            sorryText
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

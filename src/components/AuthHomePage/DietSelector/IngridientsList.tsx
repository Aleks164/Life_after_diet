import React, { useState } from "react";
import { BookmarkPropsType } from "../../../types/types";

export const IngridientsList = ({ settings,
    setRequestSettings }: BookmarkPropsType) => {
    const [recipeValue, setRecipeValue] = useState("");
    function recipeChanger(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        if (recipeValue === "") return;
        const ingridientsList = settings.ingridients;
        ingridientsList.push(recipeValue);
        const newDiet = { ...settings, ingridients: ingridientsList };
        setRequestSettings(newDiet);
        setRecipeValue("");
    }

    return (<div className="ingridientsList">
        <label>
            Add ingridients to recipes
            <input
                value={recipeValue}
                onChange={(e) => setRecipeValue(e.target.value)}
                type="text"
            />
            <button onClick={recipeChanger}>Add</button>
        </label>
        <ol>
            {settings.ingridients.length !== 0 ? (
                <>
                    {settings.ingridients.map((recipe, index) => (
                        <li key={index}>{recipe}</li>
                    ))}
                </>
            ) : (
                <p>{"--Empy list--"}</p>
            )}
        </ol>
    </div>)
}

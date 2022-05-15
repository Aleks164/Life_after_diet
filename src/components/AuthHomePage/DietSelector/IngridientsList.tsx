import React, { useState } from "react";
import { BookmarkPropsType } from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";

export const IngridientsList = ({ settings,
    setRequestSettings }: BookmarkPropsType) => {
    const ingridients = Object.keys(ingridientsList);
    const ingridientStatus = settings.dietSelector.status;

    const [recipeValue, setRecipeValue] = useState("");


    function recipeChanger(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (ingridients.indexOf(recipeValue) === -1) {
            (e.target as HTMLButtonElement).setCustomValidity('Please input a valid ingridient and press "+"');
            return;
        }
        e.preventDefault();
        const curIngridientsList = settings.ingridientsSelector.ingridients;
        curIngridientsList.push(recipeValue);
        const newIngridientsList = { ...settings, ingridientsSelector: { ...settings.ingridientsSelector, ingridients: curIngridientsList } };
        setRequestSettings(newIngridientsList);
        setRecipeValue("");
    }
    function ingridientTumbler(
        tumblerStatus: boolean,
        e:
            | React.DragEvent<HTMLDivElement>
            | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        e.preventDefault();
        const newDietStatus = { ...settings, ingridientsSelector: { ...settings.ingridientsSelector, status: !tumblerStatus } };
        console.log(settings.ingridientsSelector.status)
        setRequestSettings(newDietStatus);
        console.log(settings.ingridientsSelector.status)
    }

    return (<div className="ingridientsList">
        <label>
            Add ingridients to recipes
            <input
                disabled={!ingridientStatus}
                autoComplete="off"
                value={recipeValue}
                onChange={(e) => setRecipeValue(e.target.value)}
                type="text" list="ingridientsFullList" />
        </label>
        <datalist id="ingridientsFullList"><>{ingridients.map((el, index) => (<option key={index} value={el} />))}</>
        </datalist>
        <button onClick={recipeChanger}>Add</button>
        <OnOffTumbler onDragStartFunction={ingridientTumbler} onClickFunction={ingridientTumbler} tumblerStatus={ingridientStatus} />
        <ol hidden={!ingridientStatus}>
            {settings.ingridientsSelector.ingridients.length !== 0 ? (
                <>
                    {settings.ingridientsSelector.ingridients.map((recipe, index) => (
                        <li key={index}>{recipe}</li>
                    ))}
                </>
            ) : (
                <p>{"--Empy list--"}</p>
            )}
        </ol>
    </div>)
}

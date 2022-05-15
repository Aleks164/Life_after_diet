import React, { useState } from "react";
import { BookmarkPropsType } from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";

export const ExcludeIngridientList = ({ settings,
    setRequestSettings }: BookmarkPropsType) => {
    const excludeIngridients = Object.keys(ingridientsList);
    const excludeIngridientStatus = settings.excludeIngridientsSelector.status;
    const [recipeValue, setRecipeValue] = useState("");

    function recipeChanger(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (excludeIngridients.indexOf(recipeValue) === -1) {
            (e.target as HTMLButtonElement).setCustomValidity('Please input a valid ingridient from list and press "+"');
            return;
        }
        e.preventDefault();

        const curexcludeIngridientsList = settings.excludeIngridientsSelector.excludeIngridients;
        curexcludeIngridientsList.push(recipeValue);
        const newexcludeIngridientsList = { ...settings, excludeIngridientsSelector: { ...settings.excludeIngridientsSelector, excludeIngridients: curexcludeIngridientsList } };
        setRequestSettings(newexcludeIngridientsList);
        setRecipeValue("");
    }
    function excludeIngridientTumbler(
        tumblerStatus: boolean,
        e:
            | React.DragEvent<HTMLDivElement>
            | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        e.preventDefault();
        const newexcludeIngridientsListStatus = { ...settings, excludeIngridientsSelector: { ...settings.excludeIngridientsSelector, status: !tumblerStatus } };
        setRequestSettings(newexcludeIngridientsListStatus);
    }

    return (<div className="ingridientsList">
        <label>
            Add ingridients to recipes
            <input
                disabled={!excludeIngridientStatus}
                autoComplete="off"
                value={recipeValue}
                onChange={(e) => setRecipeValue(e.target.value)}
                type="text" list="ingridientsFullList" />
            <button className="plusButton" onClick={recipeChanger}>+</button>
            <OnOffTumbler onDragStartFunction={excludeIngridientTumbler} onClickFunction={excludeIngridientTumbler} tumblerStatus={excludeIngridientStatus} />
        </label>
        <datalist id="ingridientsFullList"><>{excludeIngridients.map((el, index) => (<option key={index} value={el} />))}</>
        </datalist>
        <ol hidden={!excludeIngridientStatus}>
            {settings.ingridientsSelector.ingridients.length !== 0 ? (
                <>
                    {settings.excludeIngridientsSelector.excludeIngridients.map((recipe, index) => (
                        <li key={index}>{recipe}</li>
                    ))}
                </>
            ) : (
                <p>{"--Empy list--"}</p>
            )}
        </ol>
    </div>)
}

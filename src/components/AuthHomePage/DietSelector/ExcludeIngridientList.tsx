import React, { useState } from "react";
import { BookmarkPropsType, IngridientsListType } from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";

export const ExcludeIngridientList = ({ settings,
    setRequestSettings }: BookmarkPropsType) => {
    const excludeIngridients = Object.keys(ingridientsList);
    const excludeIngridientStatus = settings.excludeIngridientsSelector.status;
    const excludeIngridientList = settings.excludeIngridientsSelector.excludeIngridients;
    const [recipeValue, setRecipeValue] = useState("");

    function recipeChanger(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const checkIncludCroosing = settings.ingridientsSelector.ingridients.indexOf(recipeValue);
        if (excludeIngridients.indexOf(recipeValue) === -1) {
            let message = 'Please input a valid ingridient from list and press "+"';
            if (!excludeIngridientStatus) message = "You must first press 'On'";
            (e.target as HTMLButtonElement).setCustomValidity(message);
            return;
        }
        if (checkIncludCroosing >= 0) {
            console.log(">")
            const message = `${recipeValue} already exist in ingredients list`;
            console.log(message);
            (e.target as HTMLButtonElement).setCustomValidity(message);
        }
        e.preventDefault();
        excludeIngridientList.push(recipeValue);
        const newexcludeIngridientsList = { ...settings, excludeIngridientsSelector: { ...settings.excludeIngridientsSelector, excludeIngridients: excludeIngridientList } };
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
    function deleteButton(deletingIngridient: string) {
        const filtredList = settings.excludeIngridientsSelector.excludeIngridients.filter((ingridient) =>
            ingridient !== deletingIngridient
        );
        const newIngridientsList = { ...settings, excludeIngridientsSelector: { ...settings.excludeIngridientsSelector, excludeIngridients: filtredList } };
        setRequestSettings(newIngridientsList);
    }

    return (<div className="ingridientsList">
        <label>
            Add ingredients which shouldn't be in recipe
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
            {excludeIngridientList.length !== 0 ? (
                <>
                    {excludeIngridientList.map((ingridient) => (
                        <><li key={((ingridientsList as IngridientsListType)[ingridient].id)}>{ingridient}</li><button onClick={() => deleteButton(ingridient)}>x</button></>
                    ))}
                </>
            ) : (
                <p>{"--Empy list--"}</p>
            )}
        </ol>
    </div>)
}

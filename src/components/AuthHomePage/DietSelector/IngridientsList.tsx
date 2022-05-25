import React, { useState } from "react";
import { BookmarkPropsType, IngridientsListType, SettingType } from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";

export const IngridientsList = ({ settings,
    setRequestSettings }: BookmarkPropsType) => {
    const ingridients = Object.keys(ingridientsList);
    const ingridientStatus = settings.ingridientsSelector.status;
    const [recipeValue, setRecipeValue] = useState("");

    function recipeChanger(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const checkExcludCroosing = settings.excludeIngridientsSelector.excludeIngridients.indexOf(recipeValue);
        const checkIncludCroosing = settings.ingridientsSelector.ingridients.indexOf(recipeValue);
        console.log(checkExcludCroosing, recipeValue)
        if (ingridients.indexOf(recipeValue) === -1) {
            let message = 'Please input a valid ingridient from list and press "+"';
            if (!ingridientStatus) message = "You must first press 'On'";
            (e.target as HTMLButtonElement).setCustomValidity(message);
            return;
        }
        if (checkExcludCroosing >= 0) {
            const message = `"${recipeValue}" already exist in exclude ingredients list`;
            (e.target as HTMLButtonElement).setCustomValidity(message);
            return;
        }
        if (checkIncludCroosing >= 0) {
            const message = `"${recipeValue}" already exist your list`;
            (e.target as HTMLButtonElement).setCustomValidity(message);
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
        let newIngridientsList: SettingType;
        if (tumblerStatus) {
            newIngridientsList = { ...settings, ingridientsSelector: { ingridients: [], status: !tumblerStatus } };
        }
        else {
            newIngridientsList = { ...settings, ingridientsSelector: { ...settings.ingridientsSelector, status: !tumblerStatus } };
        }
        setRequestSettings(newIngridientsList);
    }
    function deleteButton(deletingIngridient: string) {
        const filtredList = settings.ingridientsSelector.ingridients.filter((ingridient) =>
            ingridient !== deletingIngridient
        );
        const newIngridientsList = { ...settings, ingridientsSelector: { ...settings.ingridientsSelector, ingridients: filtredList } };
        setRequestSettings(newIngridientsList);
    }

    return (<div className="ingridientsList">
        <label>
            Add ingridients
            <input
                disabled={!ingridientStatus}
                autoComplete="off"
                value={recipeValue}
                onChange={(e) => setRecipeValue(e.target.value)}
                type="text" list="ingridientsFullList" />
            <div>
                <button className="plusButton" onClick={recipeChanger}>+</button>
                <OnOffTumbler onDragStartFunction={ingridientTumbler} onClickFunction={ingridientTumbler} tumblerStatus={ingridientStatus} /></div>
        </label>
        <datalist id="ingridientsFullList"><>{ingridients.map((ingridient, index) => (<option key={index} value={ingridient} />))}</>
        </datalist>
        <ol hidden={!ingridientStatus}>
            {settings.ingridientsSelector.ingridients.length !== 0 ? (
                <>
                    {settings.ingridientsSelector.ingridients.map((ingridient) => (
                        <div key={((ingridientsList as IngridientsListType)[ingridient].id)}><li >{ingridient}<button className="deleteItemButton" onClick={() => deleteButton(ingridient)}><p>x</p></button></li></div>
                    ))}
                </>
            ) : (
                <p>{"Here will be a list of ingredients that should be in the recipe"}</p>
            )}
        </ol>
    </div>)
}


import React from "react";
import { BookmarkPropsType } from "../../../types/types";
import { MealTypes } from "../../../utils/consts";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";

export const MealTypesSelector = ({ settings,
    setRequestSettings }: BookmarkPropsType) => {

    const curMealTypestatus = settings.mealTypesSelector.status;
    const curMealType = settings.mealTypesSelector.mealType;

    function chooseOption(e: React.ChangeEvent<HTMLSelectElement>) {
        const newmealType = { ...settings, mealTypesSelector: { ...settings.mealTypesSelector, mealType: e.target.value } }
        setRequestSettings(newmealType);
    }
    function mealTypeTumbler(
        tumblerStatus: boolean,
        e:
            | React.DragEvent<HTMLDivElement>
            | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        e.preventDefault();
        const newDietStatus = { ...settings, mealTypesSelector: { ...settings.mealTypesSelector, status: !tumblerStatus } }
        setRequestSettings(newDietStatus);
    }
    return (
        <div className="mealTypesSelector">
            <label>
                Сhoose a meal type
                <select
                    disabled={!curMealTypestatus}
                    value={curMealType}
                    onChange={chooseOption}
                    name="MealTypes"
                >
                    {MealTypes.map((dietName, index) => (
                        <option key={index} value={dietName}>
                            {dietName}
                        </option>
                    ))}
                </select>
                <OnOffTumbler onDragStartFunction={mealTypeTumbler} onClickFunction={mealTypeTumbler} tumblerStatus={curMealTypestatus} />
            </label>
        </div>
    )
}
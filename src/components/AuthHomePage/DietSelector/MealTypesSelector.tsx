import React from "react";
import { BookmarkPropsType } from "../../../types/types";
import { MealTypes } from "../../../utils/consts";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";

export const MealTypesSelector = ({ settings,
    setRequestSettings }: BookmarkPropsType) => {
    const curDiet = settings.dietSelector.diet;

    function chooseOption(e: React.ChangeEvent<HTMLSelectElement>) {
        const newDiet = { ...settings, dietSelector: { diet: e.target.value } };
        setRequestSettings(newDiet);
    }
    function dietOptionTumbler(
        checkCurDiet: string,
        e:
            | React.DragEvent<HTMLDivElement>
            | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        e.preventDefault();
        const newCurDiet = checkCurDiet ? "" : "Gluten Free";
        const newDiet = { ...settings, dietSelector: { diet: newCurDiet } };
        setRequestSettings(newDiet);
    }
    return (
        <div className="mealTypesSelector">
            <label>
                Сhoose a meal type
                <select
                    disabled={curDiet === ""}
                    value={curDiet}
                    onChange={chooseOption}
                    name="MealTypes"
                >
                    {MealTypes.map((dietName, index) => (
                        <option key={index} value={dietName}>
                            {dietName}
                        </option>
                    ))}
                </select>
            </label>
            <OnOffTumbler onDragStartFunction={dietOptionTumbler} onClickFunction={dietOptionTumbler} checkParam={curDiet} />
        </div>
    )
}
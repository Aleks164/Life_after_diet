import React, { useState } from "react";
import { BookmarkPropsType, SettingType } from "../../../types/types";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";

export const MaxCaloriesInput = ({ settings,
    setRequestSettings }: BookmarkPropsType) => {
    const [maxCalories, setMaxCalories] = useState(settings.maxCaloriesInput.value || 500);
    const maxCaloriesStatus = settings.maxCaloriesInput.status;

    function caloriesTumbler(
        tumblerStatus: boolean,
        e:
            | React.DragEvent<HTMLDivElement>
            | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        e.preventDefault();
        let newIngridientsList: SettingType;
        if (tumblerStatus) {
            newIngridientsList = { ...settings, maxCaloriesInput: { value: 0, status: !tumblerStatus } };
        }
        else {
            newIngridientsList = { ...settings, maxCaloriesInput: { ...settings.maxCaloriesInput, status: !tumblerStatus } };
        }
        setRequestSettings(newIngridientsList);
    }

    return (<div className="ingridientsList">
        <label>
            Max calories
            <input
                disabled={!maxCaloriesStatus}
                value={maxCalories}
                onChange={(e) => setMaxCalories(+e.target.value)}
                step={50}
                min={50}
                max={4000}
                type="number" list="ingridientsFullList" />
            <div>
                <OnOffTumbler onDragStartFunction={caloriesTumbler} onClickFunction={caloriesTumbler} tumblerStatus={maxCaloriesStatus} /></div>
        </label>
    </div>)
}


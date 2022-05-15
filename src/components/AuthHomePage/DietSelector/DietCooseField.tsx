import React from "react";
import { BookmarkPropsType } from "../../../types/types";
import { DietList } from "../../../utils/consts";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";

export const DietCooseField = ({ settings,
    setRequestSettings }: BookmarkPropsType) => {
    const curDiet = settings.dietSelector.diet;
    const curDietstatus = settings.dietSelector.status;

    function chooseOption(e: React.ChangeEvent<HTMLSelectElement>) {
        const newDiet = { ...settings, dietSelector: { ...settings.dietSelector, diet: e.target.value } };
        setRequestSettings(newDiet);
    }
    function dietOptionTumbler(
        tumblerStatus: boolean,
        e:
            | React.DragEvent<HTMLDivElement>
            | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        e.preventDefault();
        const newDietStatus = { ...settings, dietSelector: { ...settings.dietSelector, status: !tumblerStatus } };
        setRequestSettings(newDietStatus);
    }
    return (
        <div className="dietCooseField">
            <label>
                Сhoose a diet
                <select
                    disabled={!curDietstatus}
                    value={curDiet}
                    onChange={chooseOption}
                    name="dietSelector"
                >
                    {DietList.map((dietName, index) => (
                        <option key={index} value={dietName}>
                            {dietName}
                        </option>
                    ))}
                </select>
            </label>
            <OnOffTumbler onDragStartFunction={dietOptionTumbler} onClickFunction={dietOptionTumbler} tumblerStatus={curDietstatus} />
        </div>
    )
}
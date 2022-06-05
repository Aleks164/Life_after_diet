import React from "react";
import { BookmarkPropsType, SettingType } from "../../../types/types";
import { MealTypes } from "../../../utils/consts";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";

export const MealTypesSelector = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const curMealTypestatus = settings.mealTypesSelector.status;
  const curMealType = settings.mealTypesSelector.mealType;

  function chooseOption(e: React.ChangeEvent<HTMLSelectElement>) {
    const newmealType = {
      ...settings,
      mealTypesSelector: {
        ...settings.mealTypesSelector,
        mealType: e.target.value,
      },
    };
    setRequestSettings(newmealType);
  }
  function mealTypeTumbler(
    tumblerStatus: boolean,
    e:
      | React.DragEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    e.preventDefault();
    let newMealType: SettingType;
    if (tumblerStatus) {
      newMealType = {
        ...settings,
        mealTypesSelector: { mealType: "", status: !tumblerStatus },
      };
    } else {
      newMealType = {
        ...settings,
        mealTypesSelector: {
          ...settings.mealTypesSelector,
          status: !tumblerStatus,
        },
      };
    }
    setRequestSettings(newMealType);
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
        <div>
          <OnOffTumbler
            onDragStartFunction={mealTypeTumbler}
            onClickFunction={mealTypeTumbler}
            tumblerStatus={curMealTypestatus}
          />
        </div>
      </label>
    </div>
  );
};

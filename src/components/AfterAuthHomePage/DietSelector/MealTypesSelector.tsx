import React from "react";
import { BookmarkPropsType, SelectorParamType } from "../../../types/types";
import { MealTypes } from "../../../utils/consts";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";

export const MealTypesSelector = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const curMealTypestatus = settings.mealTypesSelector.status;
  const curMealType = settings.mealTypesSelector.mealType;

  const selectorParam = {
    isFieldAvailable: curMealTypestatus,
    settings,
    option: "mealTypesSelector",
    optionType: "mealType",
    optionTypeValue: "",
    setRequestSettings,
  } as SelectorParamType;

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
            tumblerSwitcher={tumblerSwitcher}
            selectorParam={selectorParam}
          />
        </div>
      </label>
    </div>
  );
};

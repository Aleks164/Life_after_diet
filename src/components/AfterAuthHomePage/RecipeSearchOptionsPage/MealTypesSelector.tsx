import React from "react";
import { BookmarkPropsType, SelectorParamType } from "@/types/types";
import { MealTypes } from "@/utils/consts";
import { OnOffTumbler } from "@/components/OnOffTumbler/OnOffTumbler";
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
    optionTypeValue: "main course",
    setRequestSettings,
  } as SelectorParamType;

  return (
    <div className="mealTypesSelector">
      <label>
        Сhoose a meal type
        <select
          disabled={!curMealTypestatus}
          value={curMealType}
          onChange={(e) => {
            settings.mealTypesSelector.mealType = e.target.value;
            setRequestSettings(settings);
          }}
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

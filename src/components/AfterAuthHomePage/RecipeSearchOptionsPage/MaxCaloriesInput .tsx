import React, { useState } from "react";
import { BookmarkPropsType, SelectorParamType } from "../../../types/types";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";

export const MaxCaloriesInput = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const [maxCalories, setMaxCalories] = useState(500);
  const maxCaloriesStatus = settings.maxCaloriesInput.status;

  const selectorParam = {
    isFieldAvailable: maxCaloriesStatus,
    settings,
    option: "maxCaloriesInput",
    optionType: "value",
    optionTypeValue: maxCalories,
    setRequestSettings,
  } as SelectorParamType;

  return (
    <div className="ingridientsList">
      <label>
        Max calories
        <input
          disabled={!maxCaloriesStatus}
          value={maxCalories}
          onChange={(e) => {
            settings.maxCaloriesInput.value = +e.target.value;
            setRequestSettings(settings);
            setMaxCalories(+e.target.value);
          }}
          step={50}
          min={50}
          max={4000}
          type="number"
          list="ingridientsFullList"
        />
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

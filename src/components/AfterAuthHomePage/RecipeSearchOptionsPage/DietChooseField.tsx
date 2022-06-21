import React, { useState } from "react";
import { BookmarkPropsType, SelectorParamType } from "@/types/types";
import { DietList } from "@/utils/consts";
import { OnOffTumbler } from "@/components/OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";

export const DietChooseField = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const curDiet = settings.dietSelector.diet;
  const curDietstatus = settings.dietSelector.status;
  const [inputValue, setInputValue] = useState(curDiet);
  const selectorParam = {
    isFieldAvailable: curDietstatus,
    settings,
    option: "dietSelector",
    optionType: "diet",
    optionTypeValue: "",
    setRequestSettings,
  } as SelectorParamType;

  return (
    <div className="dietCooseField">
      <label>
        Сhoose a diet
        <select
          disabled={!curDietstatus}
          value={inputValue}
          onChange={(e) => {
            settings.dietSelector.diet = e.target.value;
            setInputValue(e.target.value);
            setRequestSettings(settings);
          }}
          name="dietSelector"
        >
          {DietList.map((dietName, index) => (
            <option key={index} value={dietName}>
              {dietName.toLowerCase()}
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

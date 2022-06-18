import React from "react";
import { BookmarkPropsType, SelectorParamType } from "../../../types/types";
import { DietList } from "../../../utils/consts";
import { OnOffTumbler } from "../../OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";

export const DietCooseField = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const curDiet = settings.dietSelector.diet;
  const curDietstatus = settings.dietSelector.status;
  const selectorParam = {
    isFieldAvailable: curDietstatus,
    settings,
    option: "dietSelector",
    optionType: "diet",
    optionTypeValue: "",
    setRequestSettings,
  } as SelectorParamType;

  function chooseOption(e: React.ChangeEvent<HTMLSelectElement>) {
    const newDiet = {
      ...settings,
      dietSelector: { ...settings.dietSelector, diet: e.target.value },
    };
    setRequestSettings(newDiet);
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

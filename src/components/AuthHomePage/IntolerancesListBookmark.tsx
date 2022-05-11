import React from "react";
import { DietParamType } from "../../types/types";
import { IntolerancesList as fullList } from "../../utils/consts";

export const IntolerancesListBookmark = ({
  settings,
  setRequestSettings
}: DietParamType) => {
  function ChooseClearAll() {
    const lengthOfList = settings.intolerancesList.length;

    if (lengthOfList === 0) {
      const newIntoleranceList = { ...settings, intolerancesList: fullList };
      setRequestSettings(newIntoleranceList);
    } else {
      const newIntoleranceList = { ...settings, intolerancesList: [] };
      setRequestSettings(newIntoleranceList);
    }
  }

  function togleStatus(e: React.ChangeEvent<HTMLInputElement>) {
    let { intolerancesList } = settings;
    const inList = intolerancesList.indexOf(e.target.value);
    if (!(inList >= 0)) intolerancesList.push(e.target.value);
    else
      intolerancesList = intolerancesList.filter(
        (item) => item !== e.target.value
      );
    const newDiet = { ...settings, intolerancesList };
    setRequestSettings(newDiet);
  }
  return (
    <div className="markbooksField">
      <form>
        <fieldset>
          <legend>Intolerance list</legend>
          <div className="cuisineCont">
            {fullList.map((intolerance, index) => (
              <label key={index}>
                <input
                  value={intolerance}
                  checked={settings.intolerancesList.includes(intolerance)}
                  onChange={togleStatus}
                  type="checkbox"
                  name={intolerance}
                />
                {intolerance}
              </label>
            ))}
          </div>
          <p>*suggested recipes won't contain the selected products</p>
        </fieldset>
        <button onClick={ChooseClearAll} type="button">
          {settings.intolerancesList.length > 0 ? "Clear all" : "Choose all"}
        </button>
      </form>
    </div>
  );
};

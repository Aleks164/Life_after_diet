import React from "react";
import { DietParamType } from "../../types/types";
import { IntolerancesList } from "../../utils/consts";

export const IntolerancesListBookmark = ({ settings, setRequestSettings }: DietParamType) => {
  function togleStatus(e: React.ChangeEvent<HTMLInputElement>) {
    let { intolerancesList } = settings;
    const inList = settings.intolerancesList.indexOf(e.target.value);
    if (inList) intolerancesList.push(e.target.value)
    else intolerancesList = intolerancesList.filter((item) => item !== e.target.value)
    const newDiet = { ...settings, intolerancesList }
    setRequestSettings(newDiet);
  }
  return (
    <div className="intoleranceList">
      <form>
        <fieldset>
          <legend>Intolerance list</legend>
          <div className="cuisineCont">
            {IntolerancesList.map((intolerance, index) => (
              <label key={index}>
                <input value={intolerance} defaultChecked={settings.intolerancesList.includes(intolerance)} onChange={togleStatus} type="checkbox" name={intolerance} />
                {intolerance}
              </label>
            ))}
          </div>
          <p>*suggested recipes won't  contain the selected products</p>
        </fieldset>
        <button type="submit">Confirm</button>
      </form>
    </div>
  )
};

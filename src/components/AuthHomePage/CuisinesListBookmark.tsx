import React from "react";
import { DietParamType } from "../../types/types";
import { Cuisines } from "../../utils/consts";

export const CuisinesListBookmark = ({ settings, setRequestSettings }: DietParamType) => {
  function togleStatus(e: React.ChangeEvent<HTMLInputElement>) {
    let { cuisinesList } = settings;
    const inList = settings.cuisinesList.indexOf(e.target.value);
    if (inList) cuisinesList.push(e.target.value)
    else cuisinesList = cuisinesList.filter((item) => item !== e.target.value)
    const newDiet = { ...settings, cuisinesList }
    setRequestSettings(newDiet);
  }
  return (
    <div className="cuisinesList">
      <form>
        <fieldset>
          <legend>Choose your cusines</legend>
          <div className="cuisineCont">
            {Cuisines.map((cusine, index) => (
              <label key={index}>
                <input value={cusine} defaultChecked={settings.cuisinesList.includes(cusine)} onChange={togleStatus} type="checkbox" name={cusine} />
                {cusine}
              </label>
            ))}
          </div>
          <p>*if you have not chosen any cuisine, then the recipes will be from different cuisines, selected randomly</p>
        </fieldset>
        <button type="submit">Confirm</button>
      </form>
    </div>
  )
};

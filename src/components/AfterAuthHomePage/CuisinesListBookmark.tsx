import React from "react";
import { BookmarkPropsType } from "../../types/types";
import { Cuisines as fullList } from "../../utils/consts";

export const CuisinesListBookmark = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  function togleStatus(e: React.ChangeEvent<HTMLInputElement>) {
    let { cuisinesList } = settings;
    const inList = cuisinesList.indexOf(e.target.value);
    if (!(inList >= 0)) cuisinesList.push(e.target.value);
    else cuisinesList = cuisinesList.filter((item) => item !== e.target.value);
    const newDiet = { ...settings, cuisinesList };
    setRequestSettings(newDiet);
  }
  function ChooseClearAll() {
    const lengthOfList = settings.cuisinesList.length;

    if (lengthOfList === 0) {
      const newIntoleranceList = { ...settings, cuisinesList: fullList };
      setRequestSettings(newIntoleranceList);
    } else {
      const newIntoleranceList = { ...settings, cuisinesList: [] };
      setRequestSettings(newIntoleranceList);
    }
  }
  return (
    <div className="markbooksField cusinesForm">
      <form>
        <fieldset>
          <legend>Choose your cusines</legend>
          <div className="cuisineCont">
            {fullList.map((cusine, index) => (
              <label key={index}>
                <input
                  value={cusine}
                  checked={settings.cuisinesList.includes(cusine)}
                  onChange={togleStatus}
                  type="checkbox"
                  name={cusine}
                />
                {cusine}
              </label>
            ))}
          </div>
          {!settings.cuisinesList.length ? (
            <p>
              *if you have not chosen any cuisine, then the recipes will be from
              different cuisines, selected randomly
            </p>
          ) : (
            ""
          )}
        </fieldset>
        <button
          className="clearButton loginFormButton"
          onClick={ChooseClearAll}
          type="button"
        >
          {settings.cuisinesList.length > 0 ? "Clear all" : "Choose all"}
        </button>
      </form>
    </div>
  );
};

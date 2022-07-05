import React from "react";
import { BookmarkPropsType } from "@/types/types";
import { Cuisines as fullList } from "@/utils/consts";
import { chooseClearAll } from "./chooseClearAll";
import { togleStatus } from "./togleStatus";

export const CuisinesListBookmark = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => (
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
                onChange={(e) => {
                  togleStatus(e, setRequestSettings, settings);
                }}
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
        ) : null}
      </fieldset>
      <button
        className="clearButton loginFormButton"
        onClick={() => {
          chooseClearAll(setRequestSettings, settings, fullList);
        }}
        type="button"
      >
        {settings.cuisinesList.length > 0 ? "Clear all" : "Choose all"}
      </button>
    </form>
  </div>
);

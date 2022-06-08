import React from "react";
import { BookmarkPropsType } from "../../../types/types";
import { IntolerancesList as fullList } from "../../../utils/consts";
import { chooseClearAll } from "./chooseClearAll";
import { togleStatus } from "./togleStatus";

export const IntolerancesListBookmark = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => (
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
                onChange={(e) => { togleStatus(e, setRequestSettings, settings) }}
                type="checkbox"
                name={intolerance}
              />
              {intolerance}
            </label>
          ))}
        </div>
        <p>*suggested recipes won't contain the selected products</p>
      </fieldset>
      <button
        className="clearButton loginFormButton"
        onClick={(e) => { chooseClearAll(setRequestSettings, settings, fullList) }}
        type="button"
      >
        {settings.intolerancesList.length > 0 ? "Clear all" : "Choose all"}
      </button>
    </form>
  </div>
);



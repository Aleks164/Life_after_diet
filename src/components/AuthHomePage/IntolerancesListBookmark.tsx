import React from "react";
import { IntolerancesList } from "../../utils/consts";

export const IntolerancesListBookmark = () => (
  <div className="intoleranceList">
    {IntolerancesList.map((intolerance, index) => (
      <label key={index}>
        {intolerance}
        <input type="checkbox" name="username" />
      </label>
    ))}
  </div>
);

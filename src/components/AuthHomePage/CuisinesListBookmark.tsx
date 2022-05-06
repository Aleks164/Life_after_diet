import React from "react";
import { Cuisines } from "../../utils/consts";

export const CuisinesListBookmark = () => (
  <div className="cuisinesList">
    {Cuisines.map((cusine, index) => (
      <label key={index}>
        {cusine}
        <input type="checkbox" name="username" />
      </label>
    ))}
  </div>
);

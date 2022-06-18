import React from "react";
import { DietList, DietDefenition } from "../../utils/consts";

type DietDefenitionType = {
  [number: number]: string;
};

export const DietDefenitionList = () => (
  <div className="dietDefenitionList">
    {DietList.map((el, index) => (
      <div key={index}>
        <h3>{el}</h3>
        <p>{(DietDefenition as DietDefenitionType)[index + 1]}</p>
        <hr />
      </div>
    ))}
  </div>
);

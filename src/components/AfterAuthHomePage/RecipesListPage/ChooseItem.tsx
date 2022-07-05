import React from "react";

export type ChooseItemType = {
  itemName: string;
  сlientSettings: string[];
};

export const ChooseItem = ({ itemName, сlientSettings }: ChooseItemType) => (
  <div>
    <p>{itemName}</p>
    {сlientSettings.map((ingridient, index, array) => (
      <li key={index}>
        {ingridient}
        {index === array.length - 1 ? <hr /> : null}
      </li>
    ))}
  </div>
);

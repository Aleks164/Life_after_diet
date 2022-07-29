import React from "react";
import { HistoryLineParamType } from "../../../types/types";

export const HistoryLine = ({
  caruselItemsList,
  isPresed,
  curItem,
  nextItem,
  nextItemParam,
}: HistoryLineParamType) => (
  <div className="historyLine">
    {caruselItemsList.map((_, index) => (
      <button
        disabled={isPresed || curItem === index}
        key={index}
        className={curItem === index ? "activeItem" : "unActiveItem"}
        onClick={() => {
          nextItem({ index }, nextItemParam);
        }}
      ></button>
    ))}
  </div>
);

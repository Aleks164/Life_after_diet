import React from "react";
import { tumblerParamFunction } from "../../types/types";
import "./index.css";

type OnOffTumblerParam = {
  onDragStartFunction: tumblerParamFunction;
  onClickFunction: tumblerParamFunction;
  tumblerStatus: boolean;
};

export const OnOffTumbler = ({
  onDragStartFunction,
  onClickFunction,
  tumblerStatus,
}: OnOffTumblerParam) => {
  const tumblerClass = !tumblerStatus
    ? `tumbler tumblerEnd`
    : `tumbler tumblerStart`;

  return (
    <div
      onDragStart={(e) => onDragStartFunction(tumblerStatus, e)}
      className="tumblerCont"
      onClick={(e) => onClickFunction(tumblerStatus, e)}
    >
      <p className={tumblerStatus ? "tumblerOff tumblerHiden" : "tumblerOff"}>
        Off
      </p>
      <p className={!tumblerStatus ? "tumblerOn tumblerHiden" : "tumblerOn"}>
        On
      </p>
      <div draggable="true" className={tumblerClass}></div>
    </div>
  );
};

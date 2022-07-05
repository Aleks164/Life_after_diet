import React from "react";
import { SelectorParamType } from "@/types/types";
import "./index.css";

type OnOffselectorParam = {
  tumblerSwitcher: (
    selectorParam: SelectorParamType,
    e:
      | React.DragEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  selectorParam: SelectorParamType;
};

export const OnOffTumbler = ({
  tumblerSwitcher,
  selectorParam,
}: OnOffselectorParam) => {
  const tumblerClass = !selectorParam.isFieldAvailable
    ? `tumbler tumblerEnd`
    : `tumbler tumblerStart`;

  return (
    <div
      onDragStart={(e) => tumblerSwitcher(selectorParam, e)}
      className="tumblerCont"
      onClick={(e) => tumblerSwitcher(selectorParam, e)}
    >
      <p
        className={
          selectorParam.isFieldAvailable
            ? "tumblerOff tumblerHiden"
            : "tumblerOff"
        }
      >
        Off
      </p>
      <p
        className={
          !selectorParam.isFieldAvailable
            ? "tumblerOn tumblerHiden"
            : "tumblerOn"
        }
      >
        On
      </p>
      <div draggable="true" className={tumblerClass}></div>
    </div>
  );
};

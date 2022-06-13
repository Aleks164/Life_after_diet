import React from "react";
import { LeftRightParamType } from "../../types/types";

export const LeftRightSliderButton = ({
  isPresed,
  nextItemParam,
  nextItem,
  direction,
  buttonType,
  children
}: LeftRightParamType) => (
  <button
    disabled={isPresed}
    onClick={() => {
      nextItem(direction, nextItemParam);
    }}
    className={`caruselButton ${buttonType}`}
  >
    {children}
  </button>
);

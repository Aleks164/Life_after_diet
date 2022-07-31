import React from "react";
import Switch from "@mui/material/Switch";
import { SelectorParamType } from "../../types/types";

type OnOffselectorParam = {
  tumblerSwitcher: (selectorParam: SelectorParamType) => void;
  selectorParam: SelectorParamType;
};

export const OnOffTumbler = ({
  tumblerSwitcher,
  selectorParam,
}: OnOffselectorParam) => (
  <Switch
    checked={selectorParam.isFieldAvailable}
    onChange={() => tumblerSwitcher(selectorParam)}
  />
);

import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { BookmarkPropsType, SelectorParamType } from "../../../types/types";
import { MealTypes } from "../../../utils/consts";
import { OnOffTumbler } from "../../../components/OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";

export const MealTypesSelector = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const curMealTypestatus = settings.mealTypesSelector.status;
  const curMealType = settings.mealTypesSelector.mealType;
  const [selectValue, setSelectValue] = useState(curMealType);

  const selectorParam = {
    isFieldAvailable: curMealTypestatus,
    settings,
    option: "mealTypesSelector",
    optionType: "mealType",
    optionTypeValue: "main course",
    setRequestSettings,
  } as SelectorParamType;

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="meal-select-label">Сhoose a meal type</InputLabel>
        <Select
          disabled={!curMealTypestatus}
          labelId="meal-select-label"
          id="meal-select"
          value={selectValue}
          label="Сhoose a meal type"
          onChange={(e) => {
            settings.mealTypesSelector.mealType = e.target.value;
            setSelectValue(e.target.value);
            setRequestSettings(settings);
          }}
        >
          {MealTypes.map((type, index) => (
            <MenuItem key={index} value={type}>
              {type.toLowerCase()}
            </MenuItem>
          ))}
        </Select>
        <OnOffTumbler
          tumblerSwitcher={tumblerSwitcher}
          selectorParam={selectorParam}
        />
      </FormControl>
    </Box>
  );
};

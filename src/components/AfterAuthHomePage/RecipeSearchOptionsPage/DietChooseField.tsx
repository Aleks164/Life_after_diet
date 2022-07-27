import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { BookmarkPropsType, SelectorParamType } from "@/types/types";
import { DietList } from "@/utils/consts";
import { OnOffTumbler } from "@/components/OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";

export const DietChooseField = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const curDiet = settings.dietSelector.diet;
  const curDietstatus = settings.dietSelector.status;
  const [inputValue, setInputValue] = useState(curDiet);

  const selectorParam = {
    isFieldAvailable: curDietstatus,
    settings,
    option: "dietSelector",
    optionType: "diet",
    optionTypeValue: "",
    setRequestSettings,
  } as SelectorParamType;

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="diet-select-label">Сhoose a diet</InputLabel>
        <Select
          disabled={curDietstatus}
          labelId="diet-select-label"
          id="diet-select"
          value={inputValue}
          label="Сhoose a diet"
          onChange={(e) => {
            settings.dietSelector.diet = e.target.value;
            setInputValue(e.target.value);
            setRequestSettings(settings);
          }}
        >
          {DietList.map((dietName, index) => (
            <MenuItem key={index} value={dietName}>
              {dietName.toLowerCase()}
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

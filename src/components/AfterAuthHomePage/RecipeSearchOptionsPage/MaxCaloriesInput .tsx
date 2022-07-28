import React, { useState } from "react";
import { Box, FormControl, InputLabel, Slider } from "@mui/material";
import { BookmarkPropsType, SelectorParamType } from "../../../types/types";
import { OnOffTumbler } from "../../../components/OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";

export const MaxCaloriesInput = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const [maxCalories, setMaxCalories] = useState(
    settings.maxCaloriesInput.value
  );
  const maxCaloriesStatus = settings.maxCaloriesInput.status;

  const selectorParam = {
    isFieldAvailable: maxCaloriesStatus,
    settings,
    option: "maxCaloriesInput",
    optionType: "value",
    optionTypeValue: maxCalories,
    setRequestSettings,
  } as SelectorParamType;

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="calories-select-label">Max calories</InputLabel>
        <Slider
          disabled={!maxCaloriesStatus}
          aria-label="Temperature"
          defaultValue={500}
          valueLabelDisplay="auto"
          marks
          step={50}
          min={50}
          max={4000}
          onChange={(e) => {
            settings.maxCaloriesInput.value = +e.target.value;
            setRequestSettings(settings);
            setMaxCalories(+e.target.value);
          }}
        />
        <OnOffTumbler
          tumblerSwitcher={tumblerSwitcher}
          selectorParam={selectorParam}
        />
      </FormControl>
    </Box>
  );
};

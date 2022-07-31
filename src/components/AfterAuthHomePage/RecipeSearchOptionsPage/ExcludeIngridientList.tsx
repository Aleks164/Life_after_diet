import React, { useState } from "react";
import { Alert, Autocomplete, Box, Fab, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { BookmarkPropsType, InputParamType } from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";
import { OnOffTumbler } from "../../../components/OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";
import { addIngredientToList } from "./addIngredientToList";
import { AccordionExcludeIngridients } from "./AccordionExcludeIngridients";

export const ExcludeIngridientList = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const excludeIngridients = Object.keys(ingridientsList);
  const excludeIngridientStatus = settings.excludeIngridientsSelector.status;

  const [ingridientInputValue, setIngridientInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [expanded, setExpanded] = useState<boolean>(false);

  const selectorParam = {
    isFieldAvailable: excludeIngridientStatus,
    settings,
    option: "excludeIngridientsSelector",
    optionType: "excludeIngridients",
    optionTypeValue: [],
    fullListOfIngridients: excludeIngridients,
    ingridientInputValue,
    setRequestSettings,
    setIngridientInputValue,
    setMessage,
    setExpanded,
    expanded,
  } as InputParamType;

  return (
    <Box sx={{ minWidth: 200, p: 1 }}>
      <Grid container columns={{ xs: 12 }}>
        <Grid item xs={10}>
          <Autocomplete
            disabled={!excludeIngridientStatus}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => setOpen(false)}
            inputValue={ingridientInputValue}
            onInputChange={(_, value) => {
              setIngridientInputValue(value);
              if (!value) {
                setOpen(false);
              }
            }}
            options={excludeIngridients}
            renderInput={(params) => (
              <TextField
                {...params}
                label="List of exceptions"
                variant="outlined"
              />
            )}
          />
        </Grid>
        <Grid item xs={2} sx={{ alignSelf: "center", pl: 1 }}>
          <Fab
            disabled={!!message}
            onClick={(e) => {
              addIngredientToList(e, selectorParam);
              setTimeout(() => {
                setMessage("");
              }, 3000);
            }}
            size="small"
            color="primary"
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
      {message && <Alert severity="error">{message}</Alert>}
      <AccordionExcludeIngridients
        settings={settings}
        selectorParam={selectorParam}
      />

      <OnOffTumbler
        tumblerSwitcher={tumblerSwitcher}
        selectorParam={selectorParam}
      />
    </Box>
  );
};

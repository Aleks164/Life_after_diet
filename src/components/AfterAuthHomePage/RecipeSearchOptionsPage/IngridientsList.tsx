import React, { useState, useEffect } from "react";
import { Alert, Autocomplete, Box, Fab, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { BookmarkPropsType, InputParamType } from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";
import { OnOffTumbler } from "../../../components/OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";
import { addIngredientToList } from "./addIngredientToList";
import { AccordionIngridients } from "./AccordionIngridients";

export const IngridientsList = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const ingridients = Object.keys(ingridientsList);
  const ingridientStatus = settings.ingridientsSelector.status;
  const [ingridientInputValue, setIngridientInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const selectorParam = {
    isFieldAvailable: ingridientStatus,
    settings,
    option: "ingridientsSelector",
    optionType: "ingridients",
    optionTypeValue: [],
    fullListOfIngridients: ingridients,
    ingridientInputValue,
    setRequestSettings,
    setIngridientInputValue,
    setMessage,
  } as InputParamType;

  return (
    <Box sx={{ minWidth: 200 }}>
      <Grid container columns={{ xs: 12 }}>
        <Grid item xs={10}>
          <Autocomplete
            disabled={!ingridientStatus}
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
            options={ingridients}
            renderInput={(params) => (
              <TextField {...params} label="Combo box" variant="outlined" />
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
      <AccordionIngridients settings={settings} selectorParam={selectorParam} />

      <OnOffTumbler
        tumblerSwitcher={tumblerSwitcher}
        selectorParam={selectorParam}
      />
    </Box>
  );
};

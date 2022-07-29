import React, { useState } from "react";
import { Alert, Autocomplete, Box, Fab, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  BookmarkPropsType,
  IngridientsListType,
  InputParamType,
} from "../../../types/types";
import { ingridientsList } from "../../../utils/ingridientsList";
import { OnOffTumbler } from "../../../components/OnOffTumbler/OnOffTumbler";
import { tumblerSwitcher } from "./tumblerSwitcher";
import { addIngredientToList } from "./addIngredientToList";
import { deleteExcludeFromList } from "./deleteExcludeFromList";
import { AccordionIngridients } from "./AccordionIngridients";

export const ExcludeIngridientList = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const excludeIngridients = Object.keys(ingridientsList);
  const excludeIngridientStatus = settings.excludeIngridientsSelector.status;
  const excludeIngridientList =
    settings.excludeIngridientsSelector.excludeIngridients;
  const [ingridientInputValue, setIngridientInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

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
  } as InputParamType;

  return (
    <Box sx={{ minWidth: 200 }}>
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

  // <div className="ingridientsList">
  //   <label>
  //     Exclude ingredients
  //     <input
  //       disabled={!excludeIngridientStatus}
  //       autoComplete="off"
  //       value={ingridientInputValue}
  //       onChange={(e) => setIngridientInputValue(e.target.value)}
  //       type="text"
  //       list="ingridientsFullList"
  //     />
  //     <div>
  //       <button
  //         className="plusButton"
  //         onClick={(e) => {
  //           addIngredientToList(e, selectorParam);
  //         }}
  //       >
  //         +
  //       </button>
  //       <OnOffTumbler
  //         tumblerSwitcher={tumblerSwitcher}
  //         selectorParam={selectorParam}
  //       />
  //     </div>
  //   </label>
  //   <datalist id="ingridientsFullList">
  //     <>
  //       {excludeIngridients.map((ingridient, index) => (
  //         <option key={index} value={ingridient} />
  //       ))}
  //     </>
  //   </datalist>
  //   <ol hidden={!excludeIngridientStatus}>
  //     {excludeIngridientList.length !== 0 ? (
  //       <>
  //         {excludeIngridientList.map((ingridient) => (
  //           <div
  //             key={(ingridientsList as IngridientsListType)[ingridient].id}
  //           >
  //             <li>
  //               {ingridient}
  //               <button
  //                 className="deleteItemButton"
  //                 onClick={(e) => {
  //                   e.preventDefault();
  //                   deleteExcludeFromList(ingridient, selectorParam);
  //                 }}
  //               >
  //                 <p>x</p>
  //               </button>
  //             </li>
  //           </div>
  //         ))}
  //       </>
  //     ) : (
  //       <p>
  //         {
  //           "Here will be a list of ingredients that should not be in the recipe"
  //         }
  //       </p>
  //     )}
  //   </ol>
  // </div>
  // );
};

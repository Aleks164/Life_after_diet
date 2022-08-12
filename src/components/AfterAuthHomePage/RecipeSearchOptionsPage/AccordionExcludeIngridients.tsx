import * as React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import { Button, Grid, Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { deleteExcludeFromList } from "./deleteExcludeFromList";
import { AccordionParamType } from "@/types/types";

export const AccordionExcludeIngridients = ({
  settings,
  selectorParam,
}: AccordionParamType) => (
  <div>
    <Button onClick={() => selectorParam.setExpanded(!selectorParam.expanded)}>
      List of excluded ingredients{" "}
      {!selectorParam.expanded ? <ArrowRightIcon /> : <ArrowDropDownIcon />}
    </Button>
    {selectorParam.expanded && (
      <Stack spacing={1}>
        {settings.excludeIngridientsSelector.excludeIngridients.length ? (
          settings.excludeIngridientsSelector.excludeIngridients.map(
            (ingridient) => (
              <Grid
                key={ingridient}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                columns={{ xs: 12 }}
              >
                <Grid item xs={8}>
                  <Typography>{ingridient}</Typography>
                </Grid>
                <Grid item xs={4} alignItems="flex-end">
                  <Button
                    color="primary"
                    onClick={() => {
                      deleteExcludeFromList(ingridient, selectorParam);
                    }}
                    size="small"
                  >
                    <ClearIcon />
                  </Button>
                </Grid>
              </Grid>
            )
          )
        ) : (
          <Typography>
            "Here will be a list of ingredients that should not be in the
            recipe"
          </Typography>
        )}
      </Stack>
    )}
  </div>
);

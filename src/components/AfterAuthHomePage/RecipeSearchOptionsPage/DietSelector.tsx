import React, { useState } from "react";
import { Box, Divider, Grid, Paper } from "@mui/material";
import { BookmarkPropsType, isLoadingType } from "@/types/types";
import { ViewRecipesButton } from "../ViewRecipesButton";
import { IngridientsList } from "./IngridientsList";
import { DietChooseField } from "./DietChooseField";
import { MealTypesSelector } from "./MealTypesSelector";
import { ExcludeIngridientList } from "./ExcludeIngridientList";
import { LoadingPage } from "../LoadingPage/LoadinfPage";
import { MaxCaloriesInput } from "./MaxCaloriesInput ";

export const DietSelector = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);
  return (
    <Paper>
      {!isLoading ? (
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              ml: "auto",
              mr: "auto",
              mt: "5%",
              width: "25ch",
            },
          }}
          noValidate
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            columns={{ xs: 12 }}
          >
            <Grid item xs={4}>
              <DietChooseField
                settings={settings}
                setRequestSettings={setRequestSettings}
              />
              <Divider />
              <Grid item xs={4}>
                <MealTypesSelector
                  settings={settings}
                  setRequestSettings={setRequestSettings}
                />
                <Divider />
              </Grid>
              <Grid item xs={4}>
                <MaxCaloriesInput
                  settings={settings}
                  setRequestSettings={setRequestSettings}
                />
                <Divider />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <IngridientsList
                settings={settings}
                setRequestSettings={setRequestSettings}
              />
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <ExcludeIngridientList
                settings={settings}
                setRequestSettings={setRequestSettings}
              />
              <Divider />
            </Grid>
            <Grid item xs={3}>
              <ViewRecipesButton
                settings={settings}
                setRequestSettings={setRequestSettings}
                setIsLoading={setIsLoading}
              />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <div className="loadingPage">
          <LoadingPage />
        </div>
      )}
    </Paper>
  );
};

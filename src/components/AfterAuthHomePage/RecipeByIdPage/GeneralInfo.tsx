import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { RecipeType } from "../../../types/types";
import { Icons } from "./Icons";

export const GeneralInfo = ({ recipe }: RecipeType) => {
  const calories = recipe.summary.match(/(\d+) calories/gi);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      columnSpacing={{ xs: 1, md: 2 }}
      sx={{ position: "relative" }}
    >
      <Grid item xs={12}>
        <Typography variant="h5">Recipe info</Typography>
        <Divider sx={{ mb: 2 }} />
      </Grid>

      <Grid item xs={12} md={4}>
        {recipe.cookingMinutes > 0 ? (
          <Typography>
            Cooking time : {recipe.cookingMinutes} minutes
          </Typography>
        ) : null}
        {recipe.preparationMinutes > 0 ? (
          <Typography>
            Preparation time : {recipe.preparationMinutes} minutes
          </Typography>
        ) : null}
        {recipe.healthScore ? (
          <Typography>HealthScore : {recipe.healthScore}</Typography>
        ) : null}
        {recipe.servings ? (
          <Typography>Servings for {recipe.servings} person</Typography>
        ) : null}
        {calories ? (
          <Typography>Calories: {calories[0]} per serving.</Typography>
        ) : null}
        {recipe.sourceUrl ? (
          <Typography>
            <a target={"_blank"} href={recipe.sourceUrl}>
              Source of this recipe
            </a>
          </Typography>
        ) : null}
      </Grid>
      {recipe.dishTypes.length ? (
        <Grid item display={{ xs: "none", md: "unset" }} md={3}>
          <Typography>
            Dish types:
            {recipe.dishTypes.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </Typography>
        </Grid>
      ) : null}
      {recipe.cuisines.length ? (
        <Grid item display={{ xs: "none", md: "unset" }} md={3}>
          <Typography>
            Cusines:{" "}
            {recipe.cuisines.map((cuisines, index) => (
              <li key={index}>{cuisines}</li>
            ))}
          </Typography>
        </Grid>
      ) : null}
      <Grid
        item
        display={{ xs: "none", md: "flex" }}
        sx={{ position: "absolute", right: "5px", top: "45px" }}
      >
        <Icons diets={recipe.diets} veryHealthy={recipe.veryHealthy} />
      </Grid>
    </Grid>
  );
};

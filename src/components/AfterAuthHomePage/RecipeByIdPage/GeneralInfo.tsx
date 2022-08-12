import { Box, Divider, Grid, Rating, Tooltip, Typography } from "@mui/material";
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
      <Grid item display={{ xs: "none", md: "flex" }} md={3}>
        <Box
          component="img"
          sx={{
            maxHeight: "100%",
            display: "block",
            overflow: "hidden",
            width: "100%",
            userSelect: "none",
          }}
          draggable="false"
          src={recipe.image}
          alt={recipe.title}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        {recipe.cookingMinutes > 0 ? (
          <Typography>
            Cooking time : <b>{recipe.cookingMinutes} minutes</b>
          </Typography>
        ) : null}
        {recipe.preparationMinutes > 0 ? (
          <Typography>
            Preparation time : <b>{recipe.preparationMinutes} minutes</b>
          </Typography>
        ) : null}
        {recipe.healthScore ? (
          <Typography>
            HealthScore : <b>{recipe.healthScore}</b>
          </Typography>
        ) : null}
        {recipe.servings ? (
          <Typography>
            Servings for <b>{recipe.servings} person</b>
          </Typography>
        ) : null}
        {calories ? (
          <Typography>
            Calories: <b>{calories[0]} per serving.</b>
          </Typography>
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
        <Grid item display={{ xs: "none", md: "unset" }} md={2}>
          <Typography
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "max-content",
            }}
          >
            Dish types:
            {recipe.dishTypes.map((dish, index) => (
              <li key={index}>{dish}</li>
            ))}
          </Typography>
        </Grid>
      ) : null}
      {recipe.cuisines.length ? (
        <Grid item display={{ xs: "none", md: "unset" }} md={2}>
          <Typography
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              width: "max-content",
            }}
          >
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

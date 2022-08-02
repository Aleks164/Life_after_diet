import { Box } from "@mui/material";
import React from "react";
import { RecipeItemType } from "../../../types/types";
import { RecipeItem } from "./RecipeItem";

export const RecipesConteiner = ({
  recipeInfo,
}: {
  recipeInfo: RecipeItemType[];
}) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
      justifyContent: "center",
    }}
  >
    {recipeInfo.map((recipe) => (
      <RecipeItem
        key={recipe.id.toString()}
        id={recipe.id}
        title={recipe.title}
        image={recipe.image}
      />
    ))}
  </Box>
);

import React from "react";
import { Box, Grid } from "@mui/material";
import veryhelthy from "@/assets/healthy.svg";
import { urlBadgeList } from "@/utils/urlBadgeList";
import { IconPropsType } from "@/types/types";

export const Icons = ({ diets, veryHealthy }: IconPropsType) => {
  console.log(
    [
      "Gluten Free",
      "Ketogenic",
      "Vegetarian",
      "Lacto-Vegetarian",
      "Ovo-Vegetarian",
      "Vegan",
      "Pescetarian",
      "Paleo",
      "Primal",
      "Low FODMAP",
      "Whole30",
    ].map((el) => el.toLowerCase())
  );

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-end"
    >
      {veryHealthy && (
        <Box
          component="img"
          sx={{
            height: "45px",
            display: "block",
            overflow: "hidden",
            width: "45px",
            userSelect: "none",
            mb: 1,
          }}
          draggable="false"
          src={veryhelthy}
          alt={"very healthy"}
        />
      )}
      {diets.map((diet, index) => (
        <Box
          component="img"
          key={index}
          sx={{
            height: "45px",
            display: "block",
            overflow: "hidden",
            width: "45px",
            userSelect: "none",
            mb: 1,
          }}
          draggable="false"
          src={urlBadgeList[diet].path}
          alt={diet}
        />
      ))}
    </Grid>
  );
};

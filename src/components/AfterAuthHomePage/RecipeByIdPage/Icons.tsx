import React from "react";
import { Box, Grid } from "@mui/material";
import veryhelthy from "@/assets/healthy.svg";
import { urlBadgeList } from "@/utils/urlBadgeList";
import { IconPropsType } from "@/types/types";

export const Icons = ({ diets, veryHealthy }: IconPropsType) => (
  <Grid
    container
    direction="row"
    justifyContent="flex-end"
    alignItems="center"
    sx={{ width: `${diets.length > 4 ? "100px" : "50px"}` }}
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
        title={"very healthy"}
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
        title={diet}
      />
    ))}
  </Grid>
);

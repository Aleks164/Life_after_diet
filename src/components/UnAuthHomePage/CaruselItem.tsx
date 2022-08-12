import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { authBenefits } from "@/utils/authBenefits";

export const CaruselItem = ({ index }: { index: number }) => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <Typography
      fontSize={{ xs: "1.5rem", md: "2rem" }}
      sx={{
        backgroundColor: "#41b9e8",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 4,
        fontFamily: "cursive",
        color: "#edefff",
        textShadow: "#0d5fae 3px 0px 1px",
        fontWeight: "900",
        p: 2,
      }}
    >
      {authBenefits[index]}
    </Typography>
    <Box
      component="img"
      sx={{
        maxHeight: 450,
        display: "block",
        overflow: "hidden",
        width: "100%",
        userSelect: "none",
      }}
      draggable="false"
      src={"https://spoonacular.com/recipeImages/715415-556x370.jpg"}
      alt={authBenefits[index]}
    />
  </Grid>
);

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Paper, Typography } from "@mui/material";
import intolerance from "@/assets/caruselItems/intolerance.png";
import configurator from "@/assets/caruselItems/configurator.png";
import favourites from "@/assets/caruselItems/favourites.png";
import recipeList from "@/assets/caruselItems/recipeList.png";
import сusines from "@/assets/caruselItems/сusines.png";
import history from "@/assets/caruselItems/history.png";
import { authBenefits } from "@/utils/authBenefits";

const Item = ({ index, item }) => (
  <Paper
    sx={
      {
        // position: "relative",
        // width: "60vw",
        // height: "45vw",
        // ml: "auto",
        // mr: "auto",
        // mt: "20px",
      }
    }
  >
    <Typography
      variant="h3"
      sx={{
        backgroundColor: "rgba(189, 133, 49, 0.4)",
        fontFamily: "monospace",
        display: "flex",
        alignItems: "center",
        height: 50,
        paddingLeft: "15px",
      }}
    >
      {authBenefits[index]}
    </Typography>
    <Box
      component="img"
      sx={{
        MaxHeight: 600,
        display: "block",
        overflow: "hidden",
        width: "100%",
        userSelect: "none",
      }}
      draggable="false"
      src={item}
      alt={authBenefits[index]}
    />
  </Paper>
);

export const Example = () => {
  const items = [
    configurator,
    сusines,
    intolerance,
    recipeList,
    favourites,
    history,
  ];

  return (
    <Carousel
      next={() => {
        /* Do stuff */
      }}
      prev={() => {
        /* Do other stuff */
      }}
      duration={2000}
      sx={{
        width: "60vw",
        MaxHeight: 900,
        ml: "auto",
        mr: "auto",
        mt: "20px",
      }}
      indicatorContainerProps={{
        style: {
          marginTop: "20px",
          height: "max-content",
          transform: "scale(4)",
        },
      }}
    >
      {items.map((item, i) => (
        <Item item={item} index={i} key={i} />
      ))}
    </Carousel>
  );
};

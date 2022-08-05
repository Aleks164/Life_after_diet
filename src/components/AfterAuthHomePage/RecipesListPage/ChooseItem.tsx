import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export type ChooseItemType = {
  itemName: string;
  сlientSettings: string[];
};

export const ChooseItem = ({ itemName, сlientSettings }: ChooseItemType) => (
  <Box sx={{ m: 2 }}>
    <Typography>{itemName}</Typography>
    {сlientSettings.map((ingridient, index, array) => (
      <li key={index}>
        {ingridient}
        {index === array.length - 1 && <Divider />}
      </li>
    ))}
  </Box>
);

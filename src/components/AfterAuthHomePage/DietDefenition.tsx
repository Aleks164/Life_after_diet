import { Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { DietList, DietDefenition } from "../../utils/consts";

type DietDefenitionType = {
  [number: number]: string;
};

export const DietDefenitionList = () => (
  <Paper sx={{ p: 3 }}>
    <Stack spacing={2}>
      {DietList.map((el, index) => (
        <div key={index}>
          <Typography variant="h4">{el}</Typography>
          <Typography variant="body2">
            {(DietDefenition as DietDefenitionType)[index + 1]}
          </Typography>
          <Divider />
        </div>
      ))}
    </Stack>
  </Paper>
);

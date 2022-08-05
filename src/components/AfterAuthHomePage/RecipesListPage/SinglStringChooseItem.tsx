import { Box, Divider, Typography } from "@mui/material";
import React from "react";

type SinglStringChooseItemParamType = {
  label: string;
  content: string;
};

export const SinglStringChooseItem = ({
  label,
  content,
}: SinglStringChooseItemParamType) => (
  <Box sx={{ m: 2 }}>
    <Typography>
      {label} {content}
    </Typography>
    <Divider />
  </Box>
);

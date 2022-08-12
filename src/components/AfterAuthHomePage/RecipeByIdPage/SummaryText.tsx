import { Box, Typography, Divider } from "@mui/material";
import React from "react";

type SummaryTextType = {
  summary: string;
};

export const SummaryText = ({ summary }: SummaryTextType) => {
  const scrFilted = summary.replace(/<a.+?>/gi, "");
  const aTegfilted = scrFilted.replace(/<\/a>/gi, "");
  const innerHtml = { __html: aTegfilted };
  return (
    <Box>
      <Typography sx={{ mt: 2 }} variant="h5">
        Short description
      </Typography>
      <Divider />
      <Typography
        sx={{ mt: 2, textAlign: "justify" }}
        dangerouslySetInnerHTML={innerHtml}
      ></Typography>
    </Box>
  );
};

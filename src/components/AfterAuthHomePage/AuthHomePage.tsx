import React, { useState } from "react";
import { Paper } from "@mui/material";
import { Markbooks } from "./Markbooks";
import { markbooksSwitcher } from "./markbooksSwitcher";
import { useClientSettings } from "@/hooks/useClientSettings";

export const AuthHomePage = () => {
  const { сlientSettings } = useClientSettings();
  const [curMarkbook, setCurMarkbook] = useState("Main");
  const [requestSettings, setRequestSettings] = useState(сlientSettings);

  return (
    <Paper
      sx={{
        maxWidth: 850,
        ml: "auto",
        mr: "auto",
        mt: "15px",
        p: "3%",
      }}
      elevation={3}
    >
      <Markbooks setCurMarkbook={setCurMarkbook} curMarkbook={curMarkbook} />
      {markbooksSwitcher(curMarkbook, requestSettings, setRequestSettings)}
    </Paper>
  );
};

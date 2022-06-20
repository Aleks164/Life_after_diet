import React, { useState } from "react";
import { Markbooks } from "./Markbooks";
import { markbooksSwitcher } from "./markbooksSwitcher";
import { useClientSettings } from "@/hooks/useClientSettings";
import "./AfterAuthHomePageStyles.css";

export const AuthHomePage = () => {
  const { сlientSettings } = useClientSettings();
  const [curMarkbook, setCurMarkbook] = useState("Main");
  const [requestSettings, setRequestSettings] = useState(сlientSettings);

  return (
    <div className="homePage">
      <Markbooks setCurMarkbook={setCurMarkbook} curMarkbook={curMarkbook} />
      {markbooksSwitcher(curMarkbook, requestSettings, setRequestSettings)}
    </div>
  );
};

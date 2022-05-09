import React, { useState } from "react";
import { LeftMenuHomePage } from "./LeftMenuHomePage";
import { Markbooks } from "./Markbooks";
import { markbooksSwitcher } from "./markbooksSwitcher";
import "./index.css";

export const AuthHomePage = () => {
  const [curMarkbook, setCurMarkbook] = useState("Main");
  console.log(curMarkbook);
  return (
    <div className="homePage">
      <LeftMenuHomePage />
      <Markbooks setCurMarkbook={setCurMarkbook} />
      {markbooksSwitcher(curMarkbook)}
    </div>
  );
};

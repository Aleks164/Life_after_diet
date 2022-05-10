import React, { useState } from "react";
import { LeftMenuHomePage } from "./LeftMenuHomePage";
import { Markbooks } from "./Markbooks";
import { markbooksSwitcher } from "./markbooksSwitcher";
import "./index.css";
import { RecipeList } from "./RecipeList";
import { SettingType } from "../../types/types";

const defaultSettings = { dietSelector: { diet: "Gluten Free" }, cuisinesList: [], intolerancesList: [] } as SettingType;

export const AuthHomePage = () => {
  const [curMarkbook, setCurMarkbook] = useState(() => "Main");
  const [drawRecipeInfo, setDrawRecipeInfo] = useState(() => null);
  const [requestSettings, setRequestSettings] = useState(defaultSettings);
  console.log(curMarkbook);
  return (
    <div className="homePage">
      {drawRecipeInfo ? (<RecipeList drawRecipeInfo={drawRecipeInfo} />) : (
        <><LeftMenuHomePage />
          <Markbooks setCurMarkbook={setCurMarkbook} />
          {markbooksSwitcher(curMarkbook, setDrawRecipeInfo, requestSettings, setRequestSettings)}
        </>)}
    </div>
  );
};

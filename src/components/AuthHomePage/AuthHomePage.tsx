import React, { useState } from "react";
import { LeftMenuHomePage } from "./LeftMenuHomePage";
import { Markbooks } from "./Markbooks";
import { markbooksSwitcher } from "./markbooksSwitcher";
import { usefulInfoswitcher } from "./usefulInfoswitcher";
import { RecipeList } from "./RecipeList";
import { SettingType } from "../../types/types";
import "./index.css";

const defaultSettings = {
  dietSelector: { diet: "Gluten Free" },
  cuisinesList: [],
  intolerancesList: []
} as SettingType;

export const AuthHomePage = () => {
  const [curMarkbook, setCurMarkbook] = useState({
    curMarkbook: "Main",
    curInformation: null
  });
  const [drawRecipeInfo, setDrawRecipeInfo] = useState(null);
  const [requestSettings, setRequestSettings] = useState(defaultSettings);
  console.log(curMarkbook);
  return (
    <div className="homePage">
      <LeftMenuHomePage
        setDrawRecipeInfo={setDrawRecipeInfo}
        drawRecipeInfo={drawRecipeInfo}
        curMarkbook={curMarkbook}
        setCurMarkbook={setCurMarkbook}
      />
      {drawRecipeInfo ? (
        <>
          <h3 className="markbooks">Recipe book</h3>
          <RecipeList drawRecipeInfo={drawRecipeInfo} />
        </>
      ) : (
        <>
          <Markbooks setCurMarkbook={setCurMarkbook} />
          {markbooksSwitcher(
            curMarkbook.curMarkbook,
            setDrawRecipeInfo,
            requestSettings,
            setRequestSettings
          )}
          {usefulInfoswitcher(curMarkbook.curInformation)}
        </>
      )}
    </div>
  );
};

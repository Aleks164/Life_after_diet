import React, { useState } from "react";
import { LeftMenuHomePage } from "./LeftMenuHomePage";
import { Markbooks } from "./Markbooks";
import { markbooksSwitcher } from "./markbooksSwitcher";
import { usefulInfoswitcher } from "./usefulInfoswitcher";
import { RecipeList } from "./RecipeList";
import { RecipeInfoType, SettingType } from "../../types/types";
import "./index.css";

const defaultSettings: SettingType = {
  dietSelector: { diet: "Gluten Free" },
  cuisinesList: [],
  intolerancesList: [],
  ingridients: []
};

export const AuthHomePage = () => {
  const [curMarkbook, setCurMarkbook] = useState({
    curMarkbook: "Main",
    curInformation: ""
  });
  const [recipeInfo, setRecipeInfo] = useState<RecipeInfoType>("");
  const [requestSettings, setRequestSettings] = useState(defaultSettings);
  return (
    <div className="homePage">
      <LeftMenuHomePage
        setRecipeInfo={setRecipeInfo}
        recipeInfo={recipeInfo}
        curMarkbook={curMarkbook}
        setCurMarkbook={setCurMarkbook}
      />
      {recipeInfo ? (
        <>
          <h3 className="markbooks">Recipe book</h3>
          <RecipeList recipeInfo={recipeInfo} />
        </>
      ) : (
        <>
          <Markbooks
            setCurMarkbook={setCurMarkbook}
            curMarkbook={curMarkbook.curMarkbook}
          />
          {markbooksSwitcher(
            curMarkbook.curMarkbook,
            setRecipeInfo,
            requestSettings,
            setRequestSettings
          )}
          {usefulInfoswitcher(curMarkbook.curInformation)}
        </>
      )}
    </div>
  );
};

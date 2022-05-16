import React, { useState } from "react";
import { LeftMenuHomePage } from "./LeftMenuHomePage";
import { Markbooks } from "./Markbooks";
import { markbooksSwitcher } from "./markbooksSwitcher";
import { usefulInfoswitcher } from "./usefulInfoswitcher";
import { RecipeList } from "./RecipeList";
import { isLoadingType, RecipeInfoType, SettingType } from "../../types/types";
import "./index.css";
import { LoadingPage } from "./LoadingPage/LoadinfPage";

const defaultSettings: SettingType = {
  dietSelector: { diet: "Gluten Free", status: true },
  cuisinesList: [],
  intolerancesList: [],
  ingridientsSelector: { ingridients: [], status: false },
  mealTypesSelector: { mealType: "", status: false },
  excludeIngridientsSelector: { excludeIngridients: [], status: false },
};

export const AuthHomePage = () => {
  const [curMarkbook, setCurMarkbook] = useState({
    curMarkbook: "Main",
    curInformation: ""
  });
  const [recipeInfo, setRecipeInfo] = useState<RecipeInfoType>("");
  const [requestSettings, setRequestSettings] = useState(defaultSettings);
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);
  return (
    <div className="homePage">
      <LeftMenuHomePage
        setRecipeInfo={setRecipeInfo}
        recipeInfo={recipeInfo}
        curMarkbook={curMarkbook}
        setCurMarkbook={setCurMarkbook}
      />
      {isLoading ? (<><div className="loadingPage"><LoadingPage /></div><h3 className="markbooks">Recipe book</h3></>) :
        <>{recipeInfo ? (
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
              setRequestSettings,
              setIsLoading
            )}
            {usefulInfoswitcher(curMarkbook.curInformation)}
          </>
        )}</>}
    </div>
  );
};

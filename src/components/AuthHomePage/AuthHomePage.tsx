import React, { useState } from "react";
import { LeftMenuHomePage } from "./LeftMenuHomePage";
import { Markbooks } from "./Markbooks";
import { markbooksSwitcher } from "./markbooksSwitcher";
import { usefulInfoswitcher } from "./usefulInfoswitcher";
import { RecipeList } from "./RecipeList";
import { isLoadingType, RecipeInfoType, SetSettingType } from "../../types/types";
import { LoadingPage } from "./LoadingPage/LoadinfPage";
import { useClientSettings } from "../../hooks/useClientSettings";
import "./index.css";

export const AuthHomePage = () => {

  const { сlientSettings } = useClientSettings();

  const [curMarkbook, setCurMarkbook] = useState({
    curMarkbook: "Main",
    curInformation: ""
  });

  const [recipeInfo, setRecipeInfo] = useState<RecipeInfoType>("");
  const [requestSettings, setRequestSettings] = useState(сlientSettings);
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);
  return (
    <div className="homePage">
      <LeftMenuHomePage
        setRecipeInfo={setRecipeInfo}
        recipeInfo={recipeInfo}
        curMarkbook={curMarkbook}
        setCurMarkbook={setCurMarkbook}
      />
      {isLoading ? (<div className="loadingPage"><LoadingPage /></div>) : ""}
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
            setRequestSettings,
            setIsLoading
          )}
          {usefulInfoswitcher(curMarkbook.curInformation)}
        </>
      )}
    </div>
  );
};

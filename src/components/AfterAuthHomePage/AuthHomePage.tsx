import React, { useEffect, useState } from "react";
import { LeftMenuHomePage } from "./LeftMenuHomePage";
import { Markbooks } from "./Markbooks";
import { markbooksSwitcher } from "./markbooksSwitcher";
import { usefulInfoswitcher } from "./usefulInfoswitcher";
import { RecipeInfoType } from "../../types/types";
import { useClientSettings } from "../../hooks/useClientSettings";
import { FBInterface } from "../../firebase_init/FBInterface";
import { useAuth } from "../../hooks/useAuth";
import "./AfterAuthHomePageStyles.css";

export const AuthHomePage = () => {
  const { сlientSettings, setFavourite, setHistory } = useClientSettings();

  const [curMarkbook, setCurMarkbook] = useState({
    curMarkbook: "Main",
    curInformation: ""
  });
  const newCrud = new FBInterface();
  const userAuth = useAuth().user;

  const [recipeInfo, setRecipeInfo] = useState<RecipeInfoType>("");
  const [requestSettings, setRequestSettings] = useState(сlientSettings);

  useEffect(() => {
    if (userAuth)
      newCrud.getUserParam(userAuth, "favourite").then((resolve) => {
        if (setFavourite)
          setFavourite(resolve);
      });
    if (userAuth)
      newCrud.getUserParam(userAuth, "history").then((resolve) => {
        if (setHistory)
          setHistory(resolve);
      });
  }, []);

  return (
    <div className="homePage">
      <LeftMenuHomePage
        setRecipeInfo={setRecipeInfo}
        recipeInfo={recipeInfo}
        curMarkbook={curMarkbook}
        setCurMarkbook={setCurMarkbook}
      />
      <Markbooks
        setCurMarkbook={setCurMarkbook}
        curMarkbook={curMarkbook.curMarkbook}
      />
      {markbooksSwitcher(
        curMarkbook.curMarkbook,
        requestSettings,
        setRequestSettings
      )}
      {usefulInfoswitcher(curMarkbook.curInformation)}
    </div>
  );
};

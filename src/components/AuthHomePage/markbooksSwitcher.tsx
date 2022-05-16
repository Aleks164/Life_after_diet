import React from "react";
import { IntolerancesListBookmark } from "./IntolerancesListBookmark";
import { CuisinesListBookmark } from "./CuisinesListBookmark";
import { DietSelector } from "./DietSelector/DietSelector";
import { SetIsLoadingType, SetRecipeInfo, SetRequestSettingsType, SettingType } from "../../types/types";

export function markbooksSwitcher(
  markbookName: string,
  setRecipeInfo: SetRecipeInfo,
  requestSettings: SettingType,
  setRequestSettings: SetRequestSettingsType,
  setIsLoading: SetIsLoadingType
) {
  switch (markbookName) {
    case "Main":
      return (
        <DietSelector
          settings={requestSettings}
          setRequestSettings={setRequestSettings}
          setRecipeInfo={setRecipeInfo}
          setIsLoading={setIsLoading}
        />
      );
    case "Cuisines":
      return (
        <CuisinesListBookmark
          settings={requestSettings}
          setRequestSettings={setRequestSettings}
        />
      );
    case "Intolerances":
      return (
        <IntolerancesListBookmark
          settings={requestSettings}
          setRequestSettings={setRequestSettings}
        />
      );
    default:
      return "";
  }
}

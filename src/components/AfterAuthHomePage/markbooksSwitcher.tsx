import React from "react";
import { IntolerancesListBookmark } from "./IntolerancesListBookmark";
import { CuisinesListBookmark } from "./CuisinesListBookmark";
import { DietSelector } from "./DietSelector/DietSelector";
import { SetRequestSettingsType, SettingType } from "../../types/types";

export function markbooksSwitcher(
  markbookName: string,
  requestSettings: SettingType,
  setRequestSettings: SetRequestSettingsType
) {
  switch (markbookName) {
    case "Main":
      return (
        <DietSelector
          settings={requestSettings}
          setRequestSettings={setRequestSettings}
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

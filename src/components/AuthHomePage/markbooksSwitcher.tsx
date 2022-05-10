import React, { useState } from "react";
import { CuisinesListBookmark } from "./CuisinesListBookmark";
import { IntolerancesListBookmark } from "./IntolerancesListBookmark";
import { DietSelector } from "./DietSelector";
import { SettingType } from "../../types/types";


export type SetSettingType = React.Dispatch<React.SetStateAction<SettingType>>;



export function markbooksSwitcher(markbookName: string, setDrawRecipeInfo, requestSettings, setRequestSettings) {

    console.log("requestSettings", requestSettings)
    switch (markbookName) {
        case "Main":
            return <DietSelector settings={requestSettings} setRequestSettings={setRequestSettings} setDrawRecipeInfo={setDrawRecipeInfo} />;
        case "Cuisines":
            return <CuisinesListBookmark settings={requestSettings} setRequestSettings={setRequestSettings} />;
        case "Intolerances":
            return <IntolerancesListBookmark settings={requestSettings} setRequestSettings={setRequestSettings} />;
        default:
            return <DietSelector settings={requestSettings} setRequestSettings={setRequestSettings} setDrawRecipeInfo={setDrawRecipeInfo} />;
    }
}
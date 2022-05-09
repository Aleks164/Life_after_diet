import React, { useState } from "react";
import { CuisinesListBookmark } from "./CuisinesListBookmark";
import { IntolerancesListBookmark } from "./IntolerancesListBookmark";
import { DietSelector } from "./DietSelector";
import { SettingType } from "../../types/types";


export type SetSettingType = React.Dispatch<React.SetStateAction<SettingType>>;

const defaultSettings = { dietSelector: { diet: "Gluten Free" }, cuisinesList: [], intolerancesList: [] } as SettingType;

export function markbooksSwitcher(markbookName: string) {
    const [requestSettings, setRequestSettings] = useState(defaultSettings);
    console.log("requestSettings", requestSettings)
    switch (markbookName) {
        case "Main":
            return <DietSelector settings={requestSettings} setRequestSettings={setRequestSettings} />;
        case "Cuisines":
            return <CuisinesListBookmark settings={requestSettings} setRequestSettings={setRequestSettings} />;
        case "Intolerances":
            return <IntolerancesListBookmark settings={requestSettings} setRequestSettings={setRequestSettings} />;
        default:
            return <DietSelector settings={requestSettings} setRequestSettings={setRequestSettings} />;
    }
}
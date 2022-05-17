import React, { createContext, useState } from "react";
import { ChildrenType, SetSettingType, SettingType } from "../types/types";

type ProviderPropsType = {
    сlientSettings: SettingType,
    setClientSettings?: SetSettingType
}

const defaultSettings: SettingType = {
    dietSelector: { diet: "Gluten Free", status: true },
    cuisinesList: [],
    intolerancesList: [],
    ingridientsSelector: { ingridients: [], status: false },
    mealTypesSelector: { mealType: "", status: false },
    excludeIngridientsSelector: { excludeIngridients: [], status: false },
};

export const ClientSettingsContext = createContext<ProviderPropsType>({ сlientSettings: defaultSettings });

export const ClientSettingsProvider = ({ children }: ChildrenType) => {
    const [сlientSettings, setClientSettings] = useState(defaultSettings);

    const value = { сlientSettings, setClientSettings };

    return (
        <ClientSettingsContext.Provider value={value}>{children}</ClientSettingsContext.Provider>
    );
};

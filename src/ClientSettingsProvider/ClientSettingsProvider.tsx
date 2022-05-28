import React, { createContext, useState } from "react";
import { ChildrenType, SetSettingType, SettingType } from "../types/types";
import { defaultSettings } from "../utils/defaultSettings";

type ProviderPropsType = {
    сlientSettings: SettingType,
    setClientSettings?: SetSettingType
}

export const ClientSettingsContext = createContext<ProviderPropsType>({ сlientSettings: defaultSettings });

export const ClientSettingsProvider = ({ children }: ChildrenType) => {
    const [сlientSettings, setClientSettings] = useState(defaultSettings);

    const value = { сlientSettings, setClientSettings };

    return (
        <ClientSettingsContext.Provider value={value}>{children}</ClientSettingsContext.Provider>
    );
};

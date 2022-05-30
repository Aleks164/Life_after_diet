import React, { createContext, useState } from "react";
import {
  ChildrenType,
  HistoryFavouriteTypes,
  SetFavouriteType,
  SetHistoryType,
  SetSettingType,
  SettingType
} from "../types/types";
import { defaultSettings } from "../utils/defaultSettings";

type ProviderPropsType = {
  сlientSettings: SettingType;
  setClientSettings?: SetSettingType;
  сlientHistory: HistoryFavouriteTypes;
  setClientHistory?: SetHistoryType;
  сlientFavourite: HistoryFavouriteTypes;
  setClientFavourite?: SetFavouriteType;
};

export const ClientSettingsContext = createContext<ProviderPropsType>({
  сlientSettings: defaultSettings,
  сlientHistory: [],
  сlientFavourite: []
});

export const ClientSettingsProvider = ({ children }: ChildrenType) => {
  const [сlientSettings, setClientSettings] = useState(defaultSettings);
  const [сlientHistory, setClientHistory] = useState(
    [] as HistoryFavoriteTypes
  );
  const [сlientFavourite, setClientFavourite] = useState(
    [] as HistoryFavoriteTypes
  );

  const value = {
    сlientSettings,
    setClientSettings,
    сlientHistory,
    setClientHistory,
    сlientFavourite,
    setClientFavourite
  };

  return (
    <ClientSettingsContext.Provider value={value}>
      {children}
    </ClientSettingsContext.Provider>
  );
};

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
import { FBInterface } from "../firebase_init/FBInterface";
import { useAuth } from "../hooks/useAuth";

type ProviderPropsType = {
  сlientSettings: SettingType;
  setClientSettings?: SetSettingType;
  сlientHistory: HistoryFavouriteTypes;
  setClientHistory?: SetHistoryType;
  сlientFavourite: HistoryFavouriteTypes;
  setClientFavourite?: SetFavouriteType;
  setHistory: SetHistoryType;
  setFavourite: SetFavouriteType;
};

export const ClientSettingsContext = createContext<ProviderPropsType>({
  сlientSettings: defaultSettings,
  сlientHistory: {},
  сlientFavourite: {}
} as ProviderPropsType);

export const ClientSettingsProvider = ({ children }: ChildrenType) => {
  const newCrud = new FBInterface();
  const userAuth = useAuth().user;

  const [сlientSettings, setClientSettings] = useState(defaultSettings);
  const [сlientHistory, setHistory] = useState({} as HistoryFavouriteTypes);
  const [сlientFavourite, setFavourite] = useState({} as HistoryFavouriteTypes);

  const setClientHistory = (newHistory: HistoryFavouriteTypes) => {
    if (userAuth)
      newCrud
        .updateUserParam(userAuth, "history", newHistory)
        .then(() => {
          setHistory(newHistory);
        })
        .catch((e: Error) => {
          setHistory(newHistory);
          console.log(e);
        });
  };

  const setClientFavourite = (newFavourite: HistoryFavouriteTypes) => {
    if (userAuth)
      newCrud
        .updateUserParam(userAuth, "favourite", newFavourite)
        .then(() => {
          setFavourite(newFavourite);
        })
        .catch((e: Error) => {
          setFavourite(newFavourite);
          console.log(e);
        });
  };

  const value = {
    сlientSettings,
    setClientSettings,
    сlientHistory,
    setClientHistory,
    сlientFavourite,
    setClientFavourite,
    setHistory,
    setFavourite
  };

  return (
    <ClientSettingsContext.Provider value={value}>
      {children}
    </ClientSettingsContext.Provider>
  );
};

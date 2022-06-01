import React, { createContext, useEffect, useState } from "react";
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
};

export const ClientSettingsContext = createContext<ProviderPropsType>({
  сlientSettings: defaultSettings,
  сlientHistory: [],
  сlientFavourite: []
});

export const ClientSettingsProvider = ({ children }: ChildrenType) => {
  const newCrud = new FBInterface();
  const userAuth = useAuth().user;

  const [сlientSettings, setClientSettings] = useState(defaultSettings);
  const [сlientHistory, setHistory] = useState([] as HistoryFavouriteTypes);
  const [сlientFavourite, setFavourite] = useState([] as HistoryFavouriteTypes);

  useEffect(() => {
    if (userAuth)
      newCrud.getUserParam(userAuth, "favourite").then((resolve) => {
        setFavourite(resolve);
      });
    if (userAuth)
      newCrud.getUserParam(userAuth, "history").then((resolve) => {
        setHistory(resolve);
      });
  }, []);

  const setClientHistory = (newHistory: HistoryFavouriteTypes) => {
    if (userAuth)
      newCrud
        .updateUserParam(userAuth, "history", newHistory)
        .then(() => {
          setHistory(newHistory);
          console.log("newHistory")
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
          console.log("favourite")
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
    setClientFavourite
  };

  return (
    <ClientSettingsContext.Provider value={value}>
      {children}
    </ClientSettingsContext.Provider>
  );
};

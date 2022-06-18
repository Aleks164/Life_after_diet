import React, { createContext, useState } from "react";
import {
  ChildrenType,
  HistoryFavouriteTypes,
  ProviderPropsType,
} from "../types/types";
import { defaultSettings } from "../utils/defaultSettings";
import { FBInterface } from "../firebase_init/FBInterface";
import { useAuth } from "../hooks/useAuth";
import { deleteOldestItem } from "./deleteOldestItem";

export const ClientSettingsContext = createContext<ProviderPropsType>({
  сlientSettings: defaultSettings,
  сlientHistory: {},
  сlientFavourite: {},
});

export const ClientSettingsProvider = ({ children }: ChildrenType) => {
  const newCrud = new FBInterface();
  const userAuth = useAuth().user;

  const [сlientSettings, setClientSettings] = useState(defaultSettings);
  const [сlientHistory, setHistory] = useState({} as HistoryFavouriteTypes);
  const [сlientFavourite, setFavourite] = useState({} as HistoryFavouriteTypes);

  const setClientHistory = (newHistory: HistoryFavouriteTypes) => {
    if (userAuth) {
      deleteOldestItem(newHistory);
      newCrud
        .updateUserParam(userAuth, "history", newHistory)
        .then(() => {
          setHistory(newHistory);
        })
        .catch((e: Error) => {
          setHistory(newHistory);
          console.log(e);
        });
    }
  };

  const setClientFavourite = (newFavourite: HistoryFavouriteTypes) => {
    if (userAuth) {
      deleteOldestItem(newFavourite);
      newCrud
        .updateUserParam(userAuth, "favourite", newFavourite)
        .then(() => {
          setFavourite(newFavourite);
        })
        .catch((e: Error) => {
          setFavourite(newFavourite);
          console.log(e);
        });
    }
  };

  const value = {
    сlientSettings,
    setClientSettings,
    сlientHistory,
    setClientHistory,
    сlientFavourite,
    setClientFavourite,
    setHistory,
    setFavourite,
  } as ProviderPropsType;

  return (
    <ClientSettingsContext.Provider value={value}>
      {children}
    </ClientSettingsContext.Provider>
  );
};

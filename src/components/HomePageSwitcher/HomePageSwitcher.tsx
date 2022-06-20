import React, { useEffect } from "react";
import { IsAuthType } from "@/types/types";
import { AuthHomePage } from "../AfterAuthHomePage/AuthHomePage";
import { UnAuthHomePage } from "../UnAuthHomePage/UnAuthHomePage";
import { FBInterface } from "@/firebase_init/FBInterface";
import { useClientSettings } from "@/hooks/useClientSettings";

export const HomePageSwitcher = ({ isAuth }: IsAuthType) => {
  const { setFavourite, setHistory } = useClientSettings();
  const newCrud = new FBInterface();

  useEffect(() => {
    if (isAuth) {
      newCrud.getUserParam(isAuth, "favourite").then((resolve) => {
        if (setFavourite) setFavourite(resolve);
      });
      newCrud.getUserParam(isAuth, "history").then((resolve) => {
        if (setHistory) setHistory(resolve);
      });
    }
  }, [isAuth]);

  return <>{!isAuth ? <UnAuthHomePage /> : <AuthHomePage />}</>;
};

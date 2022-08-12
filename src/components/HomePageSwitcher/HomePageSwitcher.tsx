import React, { useEffect, useState } from "react";
import { FBInterface } from "@/firebase_init/FBInterface";
import { useClientSettings } from "@/hooks/useClientSettings";
import { IsAuthType } from "@/types/types";
import { AuthHomePage } from "../AfterAuthHomePage/AuthHomePage";
import { UnAuthHomePage } from "../UnAuthHomePage/UnAuthHomePage";

export const HomePageSwitcher = ({ isAuth }: IsAuthType) => {
  const { setFavourite, setHistory } = useClientSettings();
  const newCrud = new FBInterface();
  const { сlientSettings } = useClientSettings();
  const [settings, setRequestSettings] = useState(сlientSettings);

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

  return (
    <>
      {!isAuth ? (
        <UnAuthHomePage />
      ) : (
        <AuthHomePage
          settings={settings}
          setRequestSettings={setRequestSettings}
        />
      )}
    </>
  );
};

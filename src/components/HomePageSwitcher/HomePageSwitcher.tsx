import React, { useEffect } from "react";
import { IsAuthType } from "@/types/types";
import { AuthHomePage } from "../AfterAuthHomePage/AuthHomePage";
// import { UnAuthHomePage } from "../UnAuthHomePage/UnAuthHomePage";
import { FBInterface } from "@/firebase_init/FBInterface";
import { useClientSettings } from "@/hooks/useClientSettings";
import { Example } from "../material_UI_components/CaruselOfAuthBenefits";
import { UnAuthHomePage } from "../material_UI_components/UnAuthHomePage/UnAuthHomePage";
import { AboutPage } from "../AboutPage/AboutPage";

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

  return <>{!isAuth ? <AboutPage /> : <AuthHomePage />}</>;
};

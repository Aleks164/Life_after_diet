import React, { useEffect, useState } from "react";
import { Markbooks } from "./Markbooks";
import { markbooksSwitcher } from "./markbooksSwitcher";
import { useClientSettings } from "../../hooks/useClientSettings";
import { FBInterface } from "../../firebase_init/FBInterface";
import { useAuth } from "../../hooks/useAuth";
import "./AfterAuthHomePageStyles.css";

export const AuthHomePage = () => {
  const { сlientSettings, setFavourite, setHistory } = useClientSettings();
  const [curMarkbook, setCurMarkbook] = useState("Main");
  const newCrud = new FBInterface();
  const userAuth = useAuth().user;
  const [requestSettings, setRequestSettings] = useState(сlientSettings);

  useEffect(() => {
    if (userAuth)
      newCrud.getUserParam(userAuth, "favourite").then((resolve) => {
        if (setFavourite) setFavourite(resolve);
      });
    if (userAuth)
      newCrud.getUserParam(userAuth, "history").then((resolve) => {
        if (setHistory) setHistory(resolve);
      });
  }, []);

  return (
    <div className="homePage">
      <Markbooks setCurMarkbook={setCurMarkbook} curMarkbook={curMarkbook} />
      {markbooksSwitcher(curMarkbook, requestSettings, setRequestSettings)}
    </div>
  );
};

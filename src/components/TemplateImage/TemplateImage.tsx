import React, { useState } from "react";
import { LeftMenuHomePage } from "./LeftMenuHomePage";
import { RecipeList } from "./RecipeList";
import { CuisinesListBookmark } from "./CuisinesListBookmark";
import { IntolerancesListBookmark } from "./IntolerancesListBookmark";
import "./index.css";

export const TemplateImage = () => {
  const [curMarkbook, setCurMarkbook] = useState("Main");
  return (
    <div className="homePage">
      <LeftMenuHomePage />
      <div className="markbooks">
        <button onClick={() => setCurMarkbook("Main")}>Main</button>
        <button onClick={() => setCurMarkbook("Cuisines")}>
          List of cuisines
        </button>
        <button onClick={() => setCurMarkbook("Intolerances")}>
          List of intolerances
        </button>
      </div>
      {curMarkbook === "Main" ? <RecipeList /> : ""}
      {curMarkbook === "Cuisines" ? <CuisinesListBookmark /> : ""}
      {curMarkbook === "Intolerances" ? <IntolerancesListBookmark /> : ""}
    </div>
  );
};

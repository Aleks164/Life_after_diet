import React from "react";
import { MarkbookType, RecipeInfoType, SetCurMarkbook, SetRecipeInfo } from "../../types/types";

type LeftMenuPropsType = {
  setRecipeInfo: SetRecipeInfo,
  recipeInfo: RecipeInfoType,
  curMarkbook: MarkbookType,
  setCurMarkbook: SetCurMarkbook
}

export const LeftMenuHomePage = ({
  setRecipeInfo,
  recipeInfo,
  curMarkbook,
  setCurMarkbook
}: LeftMenuPropsType) => {
  function checkDisabled() {

    if (recipeInfo) return false;
    if (curMarkbook.curInformation === "") return true;
    return false;
  }
  function showDietDefinitions() {
    setCurMarkbook({ curMarkbook: "", curInformation: "Diet definitions" });
  }
  return (
    <div className="leftMenuHomePage">
      <button
        className={curMarkbook.curInformation === "" ? "activeLeftButton" : ""}
        disabled={checkDisabled()}
        onClick={() => { setRecipeInfo(""); setCurMarkbook({ curMarkbook: "Main", curInformation: "" }) }}
      >
        Сhoose a diet
      </button>
      <hr />
      {!recipeInfo ? <><p>Useful information</p>
        <button
          className={curMarkbook.curInformation === "Diet definitions" ? "activeLeftButton" : ""} disabled={!checkDisabled()} onClick={showDietDefinitions}>Diet definitions</button></> : ""}
    </div>
  );
};

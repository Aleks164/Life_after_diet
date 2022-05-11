import React from "react";

export const LeftMenuHomePage = ({
  setDrawRecipeInfo,
  drawRecipeInfo,
  curMarkbook,
  setCurMarkbook
}) => {
  function checkDisabled() {

    if (drawRecipeInfo) return false;
    if (curMarkbook.curInformation === null) return true;
    return false;
  }
  function showDietDefinitions() {
    setCurMarkbook({ curMarkbook: null, curInformation: "Diet definitions" });
  }
  console.log(checkDisabled())
  return (
    <div className="leftMenuHomePage">
      <button
        style={{ width: curMarkbook.curInformation === null ? "100%" : "unset" }}
        disabled={checkDisabled()}
        onClick={() => { setDrawRecipeInfo(null); setCurMarkbook({ curMarkbook: "Main", curInformation: null }) }}
      >
        {drawRecipeInfo ? "<-- Back to diet configurator" : "Сhoose a diet"}
      </button>
      <hr />
      {!drawRecipeInfo ? <><p>Useful information</p>
        <button style={{ width: curMarkbook.curInformation === "Diet definitions" ? "100%" : "unset" }} disabled={!checkDisabled()} onClick={showDietDefinitions}>Diet definitions</button></> : ""}
    </div>
  );
};

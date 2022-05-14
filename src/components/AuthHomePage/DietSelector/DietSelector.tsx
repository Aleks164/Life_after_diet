import React from "react";
import { DietDefenitionType, DietParamType } from "../../../types/types";
import { DietList, DietDefenition } from "../../../utils/consts";
import { ViewRecipesButton } from "../ViewRecipesButton";
import { IngridientsList } from "./IngridientsList";
import { DietCooseField } from "./DietCooseField";

export const DietSelector = ({
  settings,
  setRequestSettings,
  setRecipeInfo
}: DietParamType) => {
  const curDiet = settings.dietSelector.diet;

  const defenitionNumber = DietList.indexOf(curDiet);

  return (
    <div className="dietSelector">
      <form>
        <DietCooseField settings={settings} setRequestSettings={setRequestSettings} />
        <IngridientsList settings={settings} setRequestSettings={setRequestSettings} />
        <ViewRecipesButton
          settings={settings}
          setRecipeInfo={setRecipeInfo}
        />
        <p><input list="character" />
          <datalist id="character"><>{DietList.map((el, index) => (<option key={index} value={el}></option>))}</>
          </datalist></p>
      </form>
      {curDiet !== "" ? (
        <>
          <h3>{DietList[defenitionNumber]}</h3>
          <p>{(DietDefenition as DietDefenitionType)[defenitionNumber + 1]}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

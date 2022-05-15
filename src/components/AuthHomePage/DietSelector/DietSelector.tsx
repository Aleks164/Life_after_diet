import React from "react";
import { DietDefenitionType, DietParamType } from "../../../types/types";
import { DietList, DietDefenition } from "../../../utils/consts";
import { ViewRecipesButton } from "../ViewRecipesButton";
import { IngridientsList } from "./IngridientsList";
import { DietCooseField } from "./DietCooseField";
import { MealTypesSelector } from "./MealTypesSelector";

export const DietSelector = ({
  settings,
  setRequestSettings,
  setRecipeInfo
}: DietParamType) => {
  const curDiet = settings.dietSelector.diet;
  const curDietStatus = settings.dietSelector.status;

  const defenitionNumber = DietList.indexOf(curDiet);

  return (
    <div className="dietSelector">
      <form>
        <DietCooseField settings={settings} setRequestSettings={setRequestSettings} />
        <IngridientsList settings={settings} setRequestSettings={setRequestSettings} />
        <MealTypesSelector settings={settings} setRequestSettings={setRequestSettings} />
        <ViewRecipesButton
          settings={settings}
          setRecipeInfo={setRecipeInfo}
        />
      </form>
      {curDietStatus ? (
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

import React from "react";
import { BookmarkPropsType } from "../../../types/types";
import { ViewRecipesButton } from "../ViewRecipesButton";
import { IngridientsList } from "./IngridientsList";
import { DietCooseField } from "./DietCooseField";
import { MealTypesSelector } from "./MealTypesSelector";
import { ExcludeIngridientList } from "./ExcludeIngridientList";

export const DietSelector = ({
  settings,
  setRequestSettings
}: BookmarkPropsType) => {
  return (
    <div className="dietSelector">
      <form>
        <DietCooseField
          settings={settings}
          setRequestSettings={setRequestSettings}
        />
        <hr />
        <IngridientsList
          settings={settings}
          setRequestSettings={setRequestSettings}
        />
        <hr />
        <ExcludeIngridientList
          settings={settings}
          setRequestSettings={setRequestSettings}
        />
        <hr />
        <MealTypesSelector
          settings={settings}
          setRequestSettings={setRequestSettings}
        />
        <hr />
        <ViewRecipesButton settings={settings} />
      </form>
    </div>
  );
};

import React, { useState } from "react";
import { BookmarkPropsType } from "../../../types/types";
import { ViewRecipesButton } from "../ViewRecipesButton";
import { IngridientsList } from "./IngridientsList";
import { DietCooseField } from "./DietCooseField";
import { MealTypesSelector } from "./MealTypesSelector";
import { ExcludeIngridientList } from "./ExcludeIngridientList";
import { LoadingPage } from "../LoadingPage/LoadinfPage";

export const DietSelector = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {

  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="dietSelector">

      {!isLoading ? <form>
        <DietCooseField settings={settings} setRequestSettings={setRequestSettings} />
        <hr />
        <IngridientsList settings={settings} setRequestSettings={setRequestSettings} />
        <hr />
        <ExcludeIngridientList settings={settings} setRequestSettings={setRequestSettings} />
        <hr />
        <MealTypesSelector settings={settings} setRequestSettings={setRequestSettings} />
        <hr />
        <ViewRecipesButton
          settings={settings} isLoading={isLoading} setIsLoading={setIsLoading}
        />
      </form> : (<div className="loadingPage"><LoadingPage /></div>)}

    </div>
  );
};

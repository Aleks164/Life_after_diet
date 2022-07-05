import React, { useState } from "react";
import { BookmarkPropsType, isLoadingType } from "@/types/types";
import { ViewRecipesButton } from "../ViewRecipesButton";
import { IngridientsList } from "./IngridientsList";
import { DietChooseField } from "./DietChooseField";
import { MealTypesSelector } from "./MealTypesSelector";
import { ExcludeIngridientList } from "./ExcludeIngridientList";
import { LoadingPage } from "../LoadingPage/LoadinfPage";
import { MaxCaloriesInput } from "./MaxCaloriesInput ";

export const DietSelector = ({
  settings,
  setRequestSettings,
}: BookmarkPropsType) => {
  const [isLoading, setIsLoading] = useState<isLoadingType>(false);
  return (
    <div className="dietSelector">
      {!isLoading ? (
        <form>
          <DietChooseField
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
          <MaxCaloriesInput
            settings={settings}
            setRequestSettings={setRequestSettings}
          />
          <hr />
          <ViewRecipesButton
            settings={settings}
            setRequestSettings={setRequestSettings}
            setIsLoading={setIsLoading}
          />
        </form>
      ) : (
        <div className="loadingPage">
          <LoadingPage />
        </div>
      )}
    </div>
  );
};

import React from "react";
import { ClientSettingsType } from "@/types/types";
import { ChooseItem } from "./ChooseItem";
import { SinglStringChooseItem } from "./SinglStringChooseItem";

export const HaveChosenInfo = ({ сlientSettings }: ClientSettingsType) => (
  <>
    <h3 className="chosenParam">You have chosen:</h3>
    <div className="leftMenuHomePage">
      {сlientSettings.dietSelector.status ? (
        <SinglStringChooseItem
          label={"Diet:"}
          content={сlientSettings.dietSelector.diet}
        />
      ) : (
        ""
      )}
      {сlientSettings.mealTypesSelector.status ? (
        <SinglStringChooseItem
          label={"Meal type:"}
          content={сlientSettings.mealTypesSelector.mealType}
        />
      ) : (
        ""
      )}
      {сlientSettings.maxCaloriesInput.status ? (
        <SinglStringChooseItem
          label={"Maximum calories:"}
          content={String(сlientSettings.maxCaloriesInput.value)}
        />
      ) : (
        ""
      )}
      {сlientSettings.cuisinesList.length > 0 ? (
        <ChooseItem
          itemName={"Cuisines: "}
          сlientSettings={сlientSettings.cuisinesList}
        />
      ) : (
        ""
      )}
      {сlientSettings.intolerancesList.length > 0 ? (
        <ChooseItem
          itemName={"List of intolerances: "}
          сlientSettings={сlientSettings.intolerancesList}
        />
      ) : (
        ""
      )}
      {сlientSettings.ingridientsSelector.status ? (
        <ChooseItem
          itemName={"List of ingridients: "}
          сlientSettings={сlientSettings.ingridientsSelector.ingridients}
        />
      ) : (
        ""
      )}
      {сlientSettings.excludeIngridientsSelector.status ? (
        <ChooseItem
          itemName={"List of excludes: "}
          сlientSettings={
            сlientSettings.excludeIngridientsSelector.excludeIngridients
          }
        />
      ) : (
        ""
      )}
    </div>
  </>
);

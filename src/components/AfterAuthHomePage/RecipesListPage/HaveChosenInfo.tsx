import React from "react";
import { ClientSettingsType } from "../../../types/types";
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
      ) : null}
      {сlientSettings.mealTypesSelector.status ? (
        <SinglStringChooseItem
          label={"Meal type:"}
          content={сlientSettings.mealTypesSelector.mealType}
        />
      ) : null}
      {сlientSettings.maxCaloriesInput.status ? (
        <SinglStringChooseItem
          label={"Maximum calories:"}
          content={String(сlientSettings.maxCaloriesInput.value)}
        />
      ) : null}
      {сlientSettings.cuisinesList.length > 0 ? (
        <ChooseItem
          itemName={"Cuisines: "}
          сlientSettings={сlientSettings.cuisinesList}
        />
      ) : null}
      {сlientSettings.intolerancesList.length > 0 ? (
        <ChooseItem
          itemName={"List of intolerances: "}
          сlientSettings={сlientSettings.intolerancesList}
        />
      ) : null}
      {сlientSettings.ingridientsSelector.status ? (
        <ChooseItem
          itemName={"List of ingridients: "}
          сlientSettings={сlientSettings.ingridientsSelector.ingridients}
        />
      ) : null}
      {сlientSettings.excludeIngridientsSelector.status ? (
        <ChooseItem
          itemName={"List of excludes: "}
          сlientSettings={
            сlientSettings.excludeIngridientsSelector.excludeIngridients
          }
        />
      ) : null}
    </div>
  </>
);

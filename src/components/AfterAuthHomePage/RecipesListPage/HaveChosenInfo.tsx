import React from "react";
import { ClientSettingsType } from "../../../types/types";

export const HaveChosenInfo = ({ сlientSettings }: ClientSettingsType) => (
  <>
    {console.log(сlientSettings)}
    <h3 className="chosenParam">You have chosen:</h3>
    <div className="leftMenuHomePage">
      {сlientSettings.dietSelector.status ? (
        <div>
          <p>Diet: {сlientSettings.dietSelector.diet}</p>
          <hr />
        </div>
      ) : (
        ""
      )}
      {сlientSettings.mealTypesSelector.status ? (
        <div>
          <p>Meal type: {сlientSettings.mealTypesSelector.mealType}</p>
          <hr />
        </div>
      ) : (
        ""
      )}
      {сlientSettings.maxCaloriesInput.status ? (
        <div>
          <p>Maximum calories: {сlientSettings.maxCaloriesInput.value}</p>
          <hr />
        </div>
      ) : (
        ""
      )}
      {сlientSettings.cuisinesList.length > 0 ? (
        <div>
          <p>Cuisines: </p>
          {сlientSettings.cuisinesList.map((cuisine, index, array) => (
            <li key={index}>
              {cuisine}
              {index === array.length - 1 ? <hr /> : ""}
            </li>
          ))}
        </div>
      ) : (
        ""
      )}
      {сlientSettings.intolerancesList.length > 0 ? (
        <div>
          <p>List of intolerances: </p>
          {сlientSettings.intolerancesList.map((intolerance, index, array) => (
            <li key={index}>
              {intolerance}
              {index === array.length - 1 ? <hr /> : ""}
            </li>
          ))}
        </div>
      ) : (
        ""
      )}
      {сlientSettings.ingridientsSelector.status ? (
        <div>
          <p>List of ingridients: </p>
          {сlientSettings.ingridientsSelector.ingridients.map(
            (ingridient, index, array) => {
              return (
                <li key={index}>
                  {ingridient}
                  {index === array.length - 1 ? <hr /> : ""}
                </li>
              );
            }
          )}
        </div>
      ) : (
        ""
      )}
      {сlientSettings.excludeIngridientsSelector.status ? (
        <div>
          <p>List of excludes: </p>
          {сlientSettings.excludeIngridientsSelector.excludeIngridients.map(
            (exclude, index, array) => (
              <li key={index}>
                {exclude}
                {index === array.length - 1 ? <hr /> : ""}
              </li>
            )
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  </>
);
